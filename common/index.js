var pageUrl = {
  hashStr: "48477a591f2f316dc26d4a706e94c7b5227fb73a",
  urlStr: "https://github.com/zhangfaliang/xiaochengxu-shipin/raw/",
  fileStr: "/1/",
  sufFixStr: ".mp4",
  outputLength: 45 //视频数组的长度
};
function rand(maxNum, minNum, length) {
  var arr = new Array(length);
  var res = [];
  for (var i = 0; i < arr.length; i++) {
    var item = Math.ceil(Math.random() * (maxNum - minNum + 1) + minNum);
    if (res.indexOf(item) > -1) {
      --i;
      continue;
    }
    res.push(parseInt(item, 10));
  }
  return res;
}
var randomNumList = rand(43, -1, 45);
var common = {
  pageUrl,
  randomNumList
};

module.exports = common;
