var util = {}

;['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error', 'Array', 'Object', 'Boolean'].forEach(function(name) {
    util['is' + name] = function(obj) {
        return toString.call(obj) === '[object ' + name + ']'
    }
})

util.extendWithoutArray = function(target, source) {
    var deep,
        args = Array.prototype.slice.call(arguments, 1),
        length

    if (this.isBoolean(target)) {
        deep = target
        target = args.shift()
    }
    length = args.length
    for (var i = 0; i < length; i++) {
        source = args[i]
        for (var key in source) {
            if (source.hasOwnProperty(key)) {
                if (deep && this.isObject(source[key])) {
                    if (!this.isObject(target[key])) {
                        target[key] = {}
                    }
                    this.extendWithoutArray(deep, target[key], source[key])
                } else {
                    (source[key] !== undefined) && (target[key] = source[key])
                }
            }
        }
    }
    return target
}

util.copy = function(target, source) {
    for (var key in source) {
        if (source.hasOwnProperty(key)) {

            if (this.isObject(source[key])) {
                if (!this.isObject(target[key])) {
                    target[key] = {}
                }
                this.copy(target[key], source[key])
            } else {
                (source[key] !== undefined) && (target[key] = source[key])
            }
        }
    }

    function clean(target, source){
        for (var key in target) {
            if (target.hasOwnProperty(key)) {

                if(!source.hasOwnProperty(key)){
                    delete target[key]
                    continue
                }

                if (util.isObject(target[key])) {
                    clean(target[key], source[key])
                }
            }
        }
    }
    clean(target, source)

    return target
}

util.extend = function(target, source) {
    var deep,
        args = Array.prototype.slice.call(arguments, 1),
        length

    if (this.isBoolean(target)) {
        deep = target
        target = args.shift()
    }
    length = args.length
    for (var i = 0; i < length; i++) {
        source = args[i]
        for (var key in source) {
            if (source.hasOwnProperty(key)) {
                if (deep && (this.isArray(source[key]) || this.isObject(source[key]))) {
                    if (this.isArray(source[key]) && !this.isArray(target[key])) {
                        target[key] = []
                    }
                    if (this.isObject(source[key]) && !this.isObject(target[key])) {
                        target[key] = {}
                    }
                    this.extend(deep, target[key], source[key])
                } else {
                    (source[key] !== undefined) && (target[key] = source[key])
                }
            }
        }
    }
    return target
}

module.exports = util
