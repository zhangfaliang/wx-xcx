"use strict";

var pageStack = [];

function push() {
    var wxPageStack = getCurrentPages();
    var currentPage = wxPageStack[wxPageStack.length - 1];

    pageStack.push(currentPage);
    var index = pageStack.indexOf(currentPage);
    if (index !== pageStack.length - 1) {
        pageStack = pageStack.slice(0, index + 1);
        return;
    }
}

function getPageStack() {
    return pageStack;
}

function getCurPage() {
    return pageStack[pageStack.length - 1] || null;
}

function getPrevPage() {
    return pageStack[pageStack.length - 2] || null;
}

module.exports = {
    push: push,
    getPageStack: getPageStack,
    getCurPage: getCurPage,
    getPrevPage: getPrevPage
}