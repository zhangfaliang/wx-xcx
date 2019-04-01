class Decoupler{
    constructor(){
        this.handlers = {}
    }
    on(name, handler){
        var events = this.handlers[name]

        if (typeof handler === 'function') {
            !events && (events = [])
            events.push(handler)

            this.handlers[name] = events
        }

        return this
    }
    emit(name, args){
        var events = this.handlers[name],l

        if (events && (l = events.length )) {
            for (var i = 0; i < l; i++) {
                events[i] && events[i].call(null, args)
            }
        }

        return this
    }
    off(name, handler){
        var events = this.handlers[name]

        if (!handler) {
            events = null
        } else if (events) {
            for (var i = 0, l = events.length; i < l; i++) {
                if (events[i] === handler) {
                    events.splice(i, 1)
                }
            }
        }
        this.handlers[name] = events

        return this
    }
}

module.exports = Decoupler
