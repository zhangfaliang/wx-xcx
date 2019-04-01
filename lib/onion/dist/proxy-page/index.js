let util = require('../util/index'),
    Decoupler = require('../decoupler/index'),
    Component = require('../component/index')

// 应用公有
var publicDecoupler = new Decoupler()

class ProxyPage {
    constructor(opts) {
        let options = opts || {}

        this.config = {}

        // 合并配置项
        for (let name in options) {
            this.config[name] = options[name]
        }

        // 初始化
        this.config.data = util.extend(true, {}, this.config.data || {})
        this.config.data.components = this.config.data.components || {}

        // onload 之前初始化
        this._initComponentsBeforeOnLoad()
    }

    _initComponentsBeforeOnLoad() {
        // 定义子组件
        let self = this,
            onLoad = self.config.onLoad

        // 重定义page onLoad
        self.config.onLoad = function() {
            // 缓存page实例
            self.root = this
            let components = self.root.components = self.root.components || {}

            self._initDecoupler()

            self._setComponents(self.config.components)

            onLoad && onLoad.apply(this, arguments)

            self._triggerComponentsLifeCycle(components)
        }
    }

    _triggerComponentsLifeCycle(components){
        for (let id in components) {
            let component = components[id]

            component.onLoad && component.onLoad()
        }
    }

    _initDecoupler() {
        // 页面级私有消息，用于页面中组件与组件通信
        let decoupler = this.root._privateDecoupler = new Decoupler()

        this.root.on = decoupler.on.bind(decoupler)
        this.root.emit = decoupler.emit.bind(decoupler)
        this.root.off = decoupler.off.bind(decoupler)

        // 全局共有的消息机制，用于页面与页面之间通信
        this.root.decoupler = publicDecoupler
    }

    _setComponent(id, args) {
        let component = util.extend(true, {}, args.component || args),
            data = args.component ? args.data : {}

        component.data = util.extendWithoutArray(true, component.data, data)
        component.id = id
        component.root = this.root
        component.parent = this.root

        return new Component(component)
    }

    _setComponents(components) {
        for (let id in components) {
            let component = this._setComponent(id, components[id])

            // 注入到组件components中
            this.root.components[id] = component

            // 合并数据，利用引用
            this.config.data.components[id] = component.data
        }

        // 更新数据
        this.root.setData({
            components: this.config.data.components
        })
    }
}

module.exports = ProxyPage
