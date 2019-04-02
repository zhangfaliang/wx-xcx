var base = require('../lib/base/dist/base'),
    helper = require('./helper/index'),
    spider = require('../lib/mina-spider/src/index');

var common = {
    helper: base.core.extend(helper, base.helper),
    core: base.core,
    date: base.date,
    spider: spider,
};

module.exports = common;
