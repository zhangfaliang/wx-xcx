Page({
  data: {
    movies: [
      {
        url: "../../static/img/eat.jpeg"
      },
      {
        url: "../../static/img/header.jpg"
      }
    ],
    bannerUrl: "",
    titleList: [
      {
        title: "新手吃鸡必看 绝地求生大逃杀生存指南",
        imgUrl:
          "http://5b0988e595225.cdn.sohucs.com/images/20171113/fbf8aae351cd4049bf8f29ec22b70e96.jpeg",
        idNum: "01"
      },
      {
        title: "新手吃鸡，自定义操作",
        imgUrl:
          "http://img5.imgtn.bdimg.com/it/u=3159449345,3781131544&fm=27&gp=0.jpg",
        idNum: "02"
      },
      {
        title: "绝地求生刺激战场怎么瞄准",
        imgUrl: "http://pic.uzzf.com/up/2017-9/20179259513989.png",
        idNum: "03"
      },
      {
        title: "超级干货贴! 教你如何用手机操作稳吃鸡",
        imgUrl:
          "http://img.18183.com/uploads/allimg/171107/168-1G10GI353235.jpg",
        idNum: "04"
      }
    ],
    videoList: [
      {
        title: "视频",
        videoUrl:
          "https://d.pcs.baidu.com/file/4e564b2faaed891070ab80cf075d0ed1?fid=2605574314-250528-131204861852087&rt=pr&sign=FDtAERVC-DCb740ccc5511e5e8fedcff06b081203-7wZcVRkPMA1D8%2BYdJf1GKLHXG3E%3D&expires=8h&chkv=1&chkbd=1&chkpc=&dp-logid=2100929276169546194&dp-callid=0&dstime=1554098571&r=641596949&vip=0",
        idNum: 0,
        danmuList: ["66666", "88888"]
      },
      {
        title: "视频1",
        videoUrl:
          "https://d.pcs.baidu.com/file/800eadc8be8d1efef4c073ff772b4e2a?fid=2605574314-250528-635927860940891&rt=pr&sign=FDtAERVC-DCb740ccc5511e5e8fedcff06b081203-sq9uwhvRnz4S4GQtUQ78pTZrS48%3D&expires=8h&chkv=1&chkbd=1&chkpc=&dp-logid=2100964203140174839&dp-callid=0&dstime=1554098701&r=938149758&vip=0",
        idNum: 1,
        danmuList: ["66666", "88888"]
      }
    ],
    footer: "",
    scrollTopNum:0
  },
  scroll(e) {
    const scrollTopNum = (e.detail.scrollTop / 500)
    this.setData({
      scrollTopNum:scrollTopNum
    })
  }
});
