let ProxyPage = require('./proxy-page/index')

const ORIGIN_PAGE = Page

Page = function(options) {
    var proxyPage = new ProxyPage(options)
    return ORIGIN_PAGE(proxyPage.config)
}
