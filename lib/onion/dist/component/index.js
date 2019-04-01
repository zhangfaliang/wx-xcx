let util = require('../util/index')

const COMPONENT_KEYS = [
    "id",
    "data",
    "methods",
    "components",
    "parent",
    "root"
]

const COMPONENT_LIFECYCLE = [
    "onLoad",
    "onUnload",
    "onShow",
    "onHide"
]

const METHOD_PREFIX = '$$',
    ID_SPLIT = '.'

let METHOD_ID = 1,
    COMPONENT_ID = 1

function getComponentId(name, index) {
    return index ? name + ID_SPLIT + index : name
}

function getReMethodName(name) {
    return name + METHOD_PREFIX + (METHOD_ID++)
}

class Component {
    constructor(opts) {
        let options = opts || {}

        for (let name in options) {
            COMPONENT_KEYS.indexOf(name) === -1 && (this[name] = options[name])
        }

        this.id = options.id
        this.root = options.root
        this.parent = options.parent

        this.data = util.extend(true, {}, options.data || {})
        this.data.components = this.data.components || {}
        this.data.methods = this.data.methods || {}

        this.components = {}

        this._setMethods(options.methods || {})
        this._setComponents(options.components || {})
        this._setLifeCycle()
    }

    _setMethod(name, fn) {
        let self = this,
            rename = getReMethodName(name)

        // 缓存方法名称到数据中
        self.data.methods[name] = rename

        // 缓存到page中
        self.root[rename] = function() {
            // 修改作用域，执行到当前组件实例
            fn.apply(self, arguments)
        }
    }

    _setMethods(methods) {
        for (let name in methods) {
            let fn = methods[name]
            this._setMethod(name, fn)
        }
    }

    _setLifeCycle() {
        let self = this
        COMPONENT_LIFECYCLE.forEach(function(name) {
            let pfn = self.parent[name],
                fn = self[name]

            if (fn) {
                self.parent[name] = function() {

                    pfn && pfn.apply(this)

                    fn && fn.apply(self)
                }
            }
        })
    }

    _setComponent(id, args) {
        let component = util.extend(true, {}, args.component || args),
            data = args.component ? args.data : {}

        component.data = util.extendWithoutArray(true, component.data, data)
        component.id = id
        component.root = this.root
        component.parent = this

        return new Component(component)
    }

    _setComponents(components) {
        for (let id in components) {
            let component = this._setComponent(id, components[id])

            // 注入到组件components中
            this.components[id] = component

            // 合并数据，利用引用
            this.data.components[id] = component.data
        }
    }

    _updateComponent(name) {
        let data = {}

        data['components.' + name] = this.data.components[name]

        this.setData(data)
    }

    deleteComponent(name){
        let newData = {}
        // 删除组件
        delete this.components[name]

        newData['components.' + name ] = null
        this.setData(newData)
    }

    setComponent(name, components, replace) {
        let self = this

        if (util.isArray(components)) {
            // 如果为替换
            if(replace){
                delete self.components[name]
                delete self.data.components[name]
            }

            let group = self.components[name] = self.components[name] || {},
                groupData = self.data.components[name] = self.data.components[name] || {}

            components.forEach(function(value) {
                let component = self._setComponent(name, value),
                    index = COMPONENT_ID++

                component.id = getComponentId(name, index)

                group[index] = component
                groupData[index] = component.data
            })
        } else {
            let args = {}
            args[name] = components
            self._setComponents(args)
        }

        // 更新组件数据
        self._updateComponent(name)
    }

    setData(data) {
        let newData = {},
            parent = this.parent

        // 拼接name
        for (let id in data) {
            newData['components.' + this.id + '.' + id] = data[id]
        }

        // 如果父类不是Container
        if (parent instanceof Component) {

            // 向上调用
            parent.setData(newData)
        } else {
            let components = parent.components,
                id = this.id

            // 小程序唯一可修改数据的方法
            parent.setData(newData)

            // 更新组件的data数据，保持数据一致性
            util.copy(components[id].data, parent.data.components[id])
        }
    }

    on() {
        let decoupler = this.root._privateDecoupler
        decoupler.on.apply(decoupler, arguments)
    }

    emit() {
        let decoupler = this.root._privateDecoupler
        decoupler.emit.apply(decoupler, arguments)
    }

    off() {
        let decoupler = this.root._privateDecoupler
        decoupler.off.apply(decoupler, arguments)
    }
}

module.exports = Component
