require('./polyfill/index')

var core = require('./core/index'),
    helper = require('./helper/index'),
    util = require('./util/index'),
    date = require('./date/index')

module.exports = {
    core :core,
    helper:helper,
    util:util,
    date:date
}
