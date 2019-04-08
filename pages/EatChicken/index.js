import { pageUrl,randomNumList } from '../../common/index';
Page({
  properties: {
    hashStr: {
      // 属性名
      type: String, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: "48477a591f2f316dc26d4a706e94c7b5227fb73a" // 属性初始值（可选），如果未指定则会根据类型选择一个
    },
    fileStr: {
      // 属性名
      type: String, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: "/1/"
    },
    sufFixStr: {
      // 属性名
      type: String, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: ".mp4"
    },
  
  },
  data: {
    movies: [
      {
        url: "../../static/img/eat.jpeg"
      },
      {
        url: "../../static/img/header.jpg"
      }
    ],
    hashStr: "48477a591f2f316dc26d4a706e94c7b5227fb73a",
    urlStr: "https://github.com/zhangfaliang/xiaochengxu-shipin/raw/",
    fileStr: "/1/",
    sufFixStr: ".mp4",
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
        unitIds: [
          "adunit-50450502fd2f0ef6",
          "adunit-1c2999c6f39dbb9d",
          "adunit-fe28c90054a9603d",
          "adunit-a683af72afcb3619",
          "adunit-4e8e1cf6a91daa19",
          "adunit-0c1489a95e140458",
          "adunit-6fc8782e10b5557f",
          "adunit-1f78c5e0547aae9a",
          "adunit-e91b1a52893ce4ca",
          "adunit-9176a95211fa8413"
        ],
        indexNum: 44,
        outputLength: pageUrl.outputLength,
        isPlayingArr: [
          {
            isPlaying: false,
            headVideoInfo: {
              coverUrl:
                "http://img.18183.com/uploads/allimg/171107/168-1G10GI353235.jpg",
              videoUrl: `${pageUrl.urlStr}${pageUrl.hashStr}${pageUrl.fileStr}${randomNumList[44]}${pageUrl.sufFixStr}`
            }
          }
        ]
      },
      {
        unitIds: [
          "adunit-50450502fd2f0ef6",
          "adunit-1c2999c6f39dbb9d",
          "adunit-fe28c90054a9603d",
          "adunit-a683af72afcb3619",
          "adunit-4e8e1cf6a91daa19",
          "adunit-0c1489a95e140458",
          "adunit-6fc8782e10b5557f",
          "adunit-1f78c5e0547aae9a",
          "adunit-e91b1a52893ce4ca",
          "adunit-9176a95211fa8413"
        ],
        indexNum: 43,
        outputLength: pageUrl.outputLength,
        isPlayingArr: [
          {
            isPlaying: false,
            headVideoInfo: {
              coverUrl:
                "http://img.18183.com/uploads/allimg/171107/168-1G10GI353235.jpg",
              videoUrl: `${pageUrl.urlStr}${pageUrl.hashStr}${pageUrl.fileStr}${randomNumList[43]}${pageUrl.sufFixStr}`
            }
          }
        ]
      },
      {
        unitIds: [
          "adunit-50450502fd2f0ef6",
          "adunit-1c2999c6f39dbb9d",
          "adunit-fe28c90054a9603d",
          "adunit-a683af72afcb3619",
          "adunit-4e8e1cf6a91daa19",
          "adunit-0c1489a95e140458",
          "adunit-6fc8782e10b5557f",
          "adunit-1f78c5e0547aae9a",
          "adunit-e91b1a52893ce4ca",
          "adunit-9176a95211fa8413"
        ],
        indexNum: 42,
        outputLength: pageUrl.outputLength,
        isPlayingArr: [
          {
            isPlaying: false,
            headVideoInfo: {
              coverUrl:
                "http://img.18183.com/uploads/allimg/171107/168-1G10GI353235.jpg",
              videoUrl: `${pageUrl.urlStr}${pageUrl.hashStr}${pageUrl.fileStr}${randomNumList[42]}${pageUrl.sufFixStr}`
            }
          }
        ]
      },
      {
        unitIds: [
          "adunit-50450502fd2f0ef6",
          "adunit-1c2999c6f39dbb9d",
          "adunit-fe28c90054a9603d",
          "adunit-a683af72afcb3619",
          "adunit-4e8e1cf6a91daa19",
          "adunit-0c1489a95e140458",
          "adunit-6fc8782e10b5557f",
          "adunit-1f78c5e0547aae9a",
          "adunit-e91b1a52893ce4ca",
          "adunit-9176a95211fa8413"
        ],
        indexNum: 41,
        outputLength: pageUrl.outputLength,
        isPlayingArr: [
          {
            isPlaying: false,
            headVideoInfo: {
              coverUrl:
                "http://img.18183.com/uploads/allimg/171107/168-1G10GI353235.jpg",
              videoUrl: `${pageUrl.urlStr}${pageUrl.hashStr}${pageUrl.fileStr}${randomNumList[41]}${pageUrl.sufFixStr}`
            }
          }
        ]
      },
      {
        unitIds: [
          "adunit-50450502fd2f0ef6",
          "adunit-1c2999c6f39dbb9d",
          "adunit-fe28c90054a9603d",
          "adunit-a683af72afcb3619",
          "adunit-4e8e1cf6a91daa19",
          "adunit-0c1489a95e140458",
          "adunit-6fc8782e10b5557f",
          "adunit-1f78c5e0547aae9a",
          "adunit-e91b1a52893ce4ca",
          "adunit-9176a95211fa8413"
        ],
        indexNum: 40,
        outputLength: pageUrl.outputLength,
        isPlayingArr: [
          {
            isPlaying: false,
            headVideoInfo: {
              coverUrl:
                "http://img.18183.com/uploads/allimg/171107/168-1G10GI353235.jpg",
              videoUrl: `${pageUrl.urlStr}${pageUrl.hashStr}${pageUrl.fileStr}${randomNumList[40]}${pageUrl.sufFixStr}`
            }
          }
        ]
      },
      {
        unitIds: [
          "adunit-50450502fd2f0ef6",
          "adunit-1c2999c6f39dbb9d",
          "adunit-fe28c90054a9603d",
          "adunit-a683af72afcb3619",
          "adunit-4e8e1cf6a91daa19",
          "adunit-0c1489a95e140458",
          "adunit-6fc8782e10b5557f",
          "adunit-1f78c5e0547aae9a",
          "adunit-e91b1a52893ce4ca",
          "adunit-9176a95211fa8413"
        ],
        indexNum: 39,
        outputLength: pageUrl.outputLength,
        isPlayingArr: [
          {
            isPlaying: false,
            headVideoInfo: {
              coverUrl:
                "http://img.18183.com/uploads/allimg/171107/168-1G10GI353235.jpg",
              videoUrl: `${pageUrl.urlStr}${pageUrl.hashStr}${pageUrl.fileStr}${randomNumList[39]}${pageUrl.sufFixStr}`
            }
          }
        ]
      },
      {
        unitIds: [
          "adunit-50450502fd2f0ef6",
          "adunit-1c2999c6f39dbb9d",
          "adunit-fe28c90054a9603d",
          "adunit-a683af72afcb3619",
          "adunit-4e8e1cf6a91daa19",
          "adunit-0c1489a95e140458",
          "adunit-6fc8782e10b5557f",
          "adunit-1f78c5e0547aae9a",
          "adunit-e91b1a52893ce4ca",
          "adunit-9176a95211fa8413"
        ],
        indexNum: 38,
        outputLength: pageUrl.outputLength,
        isPlayingArr: [
          {
            isPlaying: false,
            headVideoInfo: {
              coverUrl:
                "http://img.18183.com/uploads/allimg/171107/168-1G10GI353235.jpg",
              videoUrl: `${pageUrl.urlStr}${pageUrl.hashStr}${pageUrl.fileStr}${randomNumList[38]}${pageUrl.sufFixStr}`
            }
          }
        ]
      },
      {
        unitIds: [
          "adunit-50450502fd2f0ef6",
          "adunit-1c2999c6f39dbb9d",
          "adunit-fe28c90054a9603d",
          "adunit-a683af72afcb3619",
          "adunit-4e8e1cf6a91daa19",
          "adunit-0c1489a95e140458",
          "adunit-6fc8782e10b5557f",
          "adunit-1f78c5e0547aae9a",
          "adunit-e91b1a52893ce4ca",
          "adunit-9176a95211fa8413"
        ],
        indexNum: 37,
        outputLength: pageUrl.outputLength,
        isPlayingArr: [
          {
            isPlaying: false,
            headVideoInfo: {
              coverUrl:
                "http://img.18183.com/uploads/allimg/171107/168-1G10GI353235.jpg",
              videoUrl: `${pageUrl.urlStr}${pageUrl.hashStr}${pageUrl.fileStr}${randomNumList[37]}${pageUrl.sufFixStr}`
            }
          }
        ]
      },
      {
        unitIds: [
          "adunit-50450502fd2f0ef6",
          "adunit-1c2999c6f39dbb9d",
          "adunit-fe28c90054a9603d",
          "adunit-a683af72afcb3619",
          "adunit-4e8e1cf6a91daa19",
          "adunit-0c1489a95e140458",
          "adunit-6fc8782e10b5557f",
          "adunit-1f78c5e0547aae9a",
          "adunit-e91b1a52893ce4ca",
          "adunit-9176a95211fa8413"
        ],
        indexNum: 36,
        outputLength: pageUrl.outputLength,
        isPlayingArr: [
          {
            isPlaying: false,
            headVideoInfo: {
              coverUrl:
                "http://img.18183.com/uploads/allimg/171107/168-1G10GI353235.jpg",
              videoUrl: `${pageUrl.urlStr}${pageUrl.hashStr}${pageUrl.fileStr}${randomNumList[36]}${pageUrl.sufFixStr}`
            }
          }
        ]
      },
      {
        unitIds: [
          "adunit-50450502fd2f0ef6",
          "adunit-1c2999c6f39dbb9d",
          "adunit-fe28c90054a9603d",
          "adunit-a683af72afcb3619",
          "adunit-4e8e1cf6a91daa19",
          "adunit-0c1489a95e140458",
          "adunit-6fc8782e10b5557f",
          "adunit-1f78c5e0547aae9a",
          "adunit-e91b1a52893ce4ca",
          "adunit-9176a95211fa8413"
        ],
        indexNum: 35,
        outputLength: pageUrl.outputLength,
        isPlayingArr: [
          {
            isPlaying: false,
            headVideoInfo: {
              coverUrl:
                "http://img.18183.com/uploads/allimg/171107/168-1G10GI353235.jpg",
              videoUrl: `${pageUrl.urlStr}${pageUrl.hashStr}${pageUrl.fileStr}${randomNumList[35]}${pageUrl.sufFixStr}`
            }
          }
        ]
      },
      {
        unitIds: [
          "adunit-50450502fd2f0ef6",
          "adunit-1c2999c6f39dbb9d",
          "adunit-fe28c90054a9603d",
          "adunit-a683af72afcb3619",
          "adunit-4e8e1cf6a91daa19",
          "adunit-0c1489a95e140458",
          "adunit-6fc8782e10b5557f",
          "adunit-1f78c5e0547aae9a",
          "adunit-e91b1a52893ce4ca",
          "adunit-9176a95211fa8413"
        ],
        indexNum: 34,
        outputLength: pageUrl.outputLength,
        isPlayingArr: [
          {
            isPlaying: false,
            headVideoInfo: {
              coverUrl:
                "http://img.18183.com/uploads/allimg/171107/168-1G10GI353235.jpg",
              videoUrl: `${pageUrl.urlStr}${pageUrl.hashStr}${pageUrl.fileStr}${randomNumList[34]}${pageUrl.sufFixStr}`
            }
          }
        ]
      },
      {
        unitIds: [
          "adunit-50450502fd2f0ef6",
          "adunit-1c2999c6f39dbb9d",
          "adunit-fe28c90054a9603d",
          "adunit-a683af72afcb3619",
          "adunit-4e8e1cf6a91daa19",
          "adunit-0c1489a95e140458",
          "adunit-6fc8782e10b5557f",
          "adunit-1f78c5e0547aae9a",
          "adunit-e91b1a52893ce4ca",
          "adunit-9176a95211fa8413"
        ],
        indexNum: 33,
        outputLength: pageUrl.outputLength,
        isPlayingArr: [
          {
            isPlaying: false,
            headVideoInfo: {
              coverUrl:
                "http://img.18183.com/uploads/allimg/171107/168-1G10GI353235.jpg",
              videoUrl: `${pageUrl.urlStr}${pageUrl.hashStr}${pageUrl.fileStr}${randomNumList[33]}${pageUrl.sufFixStr}`
            }
          }
        ]
      },
      {
        unitIds: [
          "adunit-50450502fd2f0ef6",
          "adunit-1c2999c6f39dbb9d",
          "adunit-fe28c90054a9603d",
          "adunit-a683af72afcb3619",
          "adunit-4e8e1cf6a91daa19",
          "adunit-0c1489a95e140458",
          "adunit-6fc8782e10b5557f",
          "adunit-1f78c5e0547aae9a",
          "adunit-e91b1a52893ce4ca",
          "adunit-9176a95211fa8413"
        ],
        indexNum: 32,
        outputLength: pageUrl.outputLength,
        isPlayingArr: [
          {
            isPlaying: false,
            headVideoInfo: {
              coverUrl:
                "http://img.18183.com/uploads/allimg/171107/168-1G10GI353235.jpg",
              videoUrl: `${pageUrl.urlStr}${pageUrl.hashStr}${pageUrl.fileStr}${randomNumList[32]}${pageUrl.sufFixStr}`
            }
          }
        ]
      },
      {
        unitIds: [
          "adunit-50450502fd2f0ef6",
          "adunit-1c2999c6f39dbb9d",
          "adunit-fe28c90054a9603d",
          "adunit-a683af72afcb3619",
          "adunit-4e8e1cf6a91daa19",
          "adunit-0c1489a95e140458",
          "adunit-6fc8782e10b5557f",
          "adunit-1f78c5e0547aae9a",
          "adunit-e91b1a52893ce4ca",
          "adunit-9176a95211fa8413"
        ],
        indexNum: 31,
        outputLength: pageUrl.outputLength,
        isPlayingArr: [
          {
            isPlaying: false,
            headVideoInfo: {
              coverUrl:
                "http://img.18183.com/uploads/allimg/171107/168-1G10GI353235.jpg",
              videoUrl: `${pageUrl.urlStr}${pageUrl.hashStr}${pageUrl.fileStr}${randomNumList[31]}${pageUrl.sufFixStr}`
            }
          }
        ]
      },
      {
        unitIds: [
          "adunit-50450502fd2f0ef6",
          "adunit-1c2999c6f39dbb9d",
          "adunit-fe28c90054a9603d",
          "adunit-a683af72afcb3619",
          "adunit-4e8e1cf6a91daa19",
          "adunit-0c1489a95e140458",
          "adunit-6fc8782e10b5557f",
          "adunit-1f78c5e0547aae9a",
          "adunit-e91b1a52893ce4ca",
          "adunit-9176a95211fa8413"
        ],
        indexNum: 30,
        outputLength: pageUrl.outputLength,
        isPlayingArr: [
          {
            isPlaying: false,
            headVideoInfo: {
              coverUrl:
                "http://img.18183.com/uploads/allimg/171107/168-1G10GI353235.jpg",
              videoUrl: `${pageUrl.urlStr}${pageUrl.hashStr}${pageUrl.fileStr}${randomNumList[30]}${pageUrl.sufFixStr}`
            }
          }
        ]
      },
      {
        unitIds: [
          "adunit-50450502fd2f0ef6",
          "adunit-1c2999c6f39dbb9d",
          "adunit-fe28c90054a9603d",
          "adunit-a683af72afcb3619",
          "adunit-4e8e1cf6a91daa19",
          "adunit-0c1489a95e140458",
          "adunit-6fc8782e10b5557f",
          "adunit-1f78c5e0547aae9a",
          "adunit-e91b1a52893ce4ca",
          "adunit-9176a95211fa8413"
        ],
        indexNum: 29,
        outputLength: pageUrl.outputLength,
        isPlayingArr: [
          {
            isPlaying: false,
            headVideoInfo: {
              coverUrl:
                "http://img.18183.com/uploads/allimg/171107/168-1G10GI353235.jpg",
              videoUrl: `${pageUrl.urlStr}${pageUrl.hashStr}${pageUrl.fileStr}${randomNumList[29]}${pageUrl.sufFixStr}`
            }
          }
        ]
      },
      {
        unitIds: [
          "adunit-50450502fd2f0ef6",
          "adunit-1c2999c6f39dbb9d",
          "adunit-fe28c90054a9603d",
          "adunit-a683af72afcb3619",
          "adunit-4e8e1cf6a91daa19",
          "adunit-0c1489a95e140458",
          "adunit-6fc8782e10b5557f",
          "adunit-1f78c5e0547aae9a",
          "adunit-e91b1a52893ce4ca",
          "adunit-9176a95211fa8413"
        ],
        indexNum: 28,
        outputLength: pageUrl.outputLength,
        isPlayingArr: [
          {
            isPlaying: false,
            headVideoInfo: {
              coverUrl:
                "http://img.18183.com/uploads/allimg/171107/168-1G10GI353235.jpg",
              videoUrl: `${pageUrl.urlStr}${pageUrl.hashStr}${pageUrl.fileStr}${randomNumList[28]}${pageUrl.sufFixStr}`
            }
          }
        ]
      },
      {
        unitIds: [
          "adunit-50450502fd2f0ef6",
          "adunit-1c2999c6f39dbb9d",
          "adunit-fe28c90054a9603d",
          "adunit-a683af72afcb3619",
          "adunit-4e8e1cf6a91daa19",
          "adunit-0c1489a95e140458",
          "adunit-6fc8782e10b5557f",
          "adunit-1f78c5e0547aae9a",
          "adunit-e91b1a52893ce4ca",
          "adunit-9176a95211fa8413"
        ],
        indexNum: 27,
        outputLength: pageUrl.outputLength,
        isPlayingArr: [
          {
            isPlaying: false,
            headVideoInfo: {
              coverUrl:
                "http://img.18183.com/uploads/allimg/171107/168-1G10GI353235.jpg",
              videoUrl: `${pageUrl.urlStr}${pageUrl.hashStr}${pageUrl.fileStr}${randomNumList[27]}${pageUrl.sufFixStr}`
            }
          }
        ]
      },
      {
        unitIds: [
          "adunit-50450502fd2f0ef6",
          "adunit-1c2999c6f39dbb9d",
          "adunit-fe28c90054a9603d",
          "adunit-a683af72afcb3619",
          "adunit-4e8e1cf6a91daa19",
          "adunit-0c1489a95e140458",
          "adunit-6fc8782e10b5557f",
          "adunit-1f78c5e0547aae9a",
          "adunit-e91b1a52893ce4ca",
          "adunit-9176a95211fa8413"
        ],
        indexNum: 26,
        outputLength: pageUrl.outputLength,
        isPlayingArr: [
          {
            isPlaying: false,
            headVideoInfo: {
              coverUrl:
                "http://img.18183.com/uploads/allimg/171107/168-1G10GI353235.jpg",
              videoUrl: `${pageUrl.urlStr}${pageUrl.hashStr}${pageUrl.fileStr}${randomNumList[26]}${pageUrl.sufFixStr}`
            }
          }
        ]
      },
      {
        unitIds: [
          "adunit-50450502fd2f0ef6",
          "adunit-1c2999c6f39dbb9d",
          "adunit-fe28c90054a9603d",
          "adunit-a683af72afcb3619",
          "adunit-4e8e1cf6a91daa19",
          "adunit-0c1489a95e140458",
          "adunit-6fc8782e10b5557f",
          "adunit-1f78c5e0547aae9a",
          "adunit-e91b1a52893ce4ca",
          "adunit-9176a95211fa8413"
        ],
        indexNum: 25,
        outputLength: pageUrl.outputLength,
        isPlayingArr: [
          {
            isPlaying: false,
            headVideoInfo: {
              coverUrl:
                "http://img.18183.com/uploads/allimg/171107/168-1G10GI353235.jpg",
              videoUrl: `${pageUrl.urlStr}${pageUrl.hashStr}${pageUrl.fileStr}${randomNumList[25]}${pageUrl.sufFixStr}`
            }
          }
        ]
      },
      {
        unitIds: [
          "adunit-50450502fd2f0ef6",
          "adunit-1c2999c6f39dbb9d",
          "adunit-fe28c90054a9603d",
          "adunit-a683af72afcb3619",
          "adunit-4e8e1cf6a91daa19",
          "adunit-0c1489a95e140458",
          "adunit-6fc8782e10b5557f",
          "adunit-1f78c5e0547aae9a",
          "adunit-e91b1a52893ce4ca",
          "adunit-9176a95211fa8413"
        ],
        indexNum: 24,
        outputLength: pageUrl.outputLength,
        isPlayingArr: [
          {
            isPlaying: false,
            headVideoInfo: {
              coverUrl:
                "http://img.18183.com/uploads/allimg/171107/168-1G10GI353235.jpg",
              videoUrl: `${pageUrl.urlStr}${pageUrl.hashStr}${pageUrl.fileStr}${randomNumList[24]}${pageUrl.sufFixStr}`
            }
          }
        ]
      },
      {
        unitIds: [
          "adunit-50450502fd2f0ef6",
          "adunit-1c2999c6f39dbb9d",
          "adunit-fe28c90054a9603d",
          "adunit-a683af72afcb3619",
          "adunit-4e8e1cf6a91daa19",
          "adunit-0c1489a95e140458",
          "adunit-6fc8782e10b5557f",
          "adunit-1f78c5e0547aae9a",
          "adunit-e91b1a52893ce4ca",
          "adunit-9176a95211fa8413"
        ],
        indexNum: 23,
        outputLength: pageUrl.outputLength,
        isPlayingArr: [
          {
            isPlaying: false,
            headVideoInfo: {
              coverUrl:
                "http://img.18183.com/uploads/allimg/171107/168-1G10GI353235.jpg",
              videoUrl: `${pageUrl.urlStr}${pageUrl.hashStr}${pageUrl.fileStr}${randomNumList[23]}${pageUrl.sufFixStr}`
            }
          }
        ]
      },
      {
        unitIds: [
          "adunit-50450502fd2f0ef6",
          "adunit-1c2999c6f39dbb9d",
          "adunit-fe28c90054a9603d",
          "adunit-a683af72afcb3619",
          "adunit-4e8e1cf6a91daa19",
          "adunit-0c1489a95e140458",
          "adunit-6fc8782e10b5557f",
          "adunit-1f78c5e0547aae9a",
          "adunit-e91b1a52893ce4ca",
          "adunit-9176a95211fa8413"
        ],
        indexNum: 22,
        outputLength: pageUrl.outputLength,
        isPlayingArr: [
          {
            isPlaying: false,
            headVideoInfo: {
              coverUrl:
                "http://img.18183.com/uploads/allimg/171107/168-1G10GI353235.jpg",
              videoUrl: `${pageUrl.urlStr}${pageUrl.hashStr}${pageUrl.fileStr}${randomNumList[22]}${pageUrl.sufFixStr}`
            }
          }
        ]
      },
      {
        unitIds: [
          "adunit-50450502fd2f0ef6",
          "adunit-1c2999c6f39dbb9d",
          "adunit-fe28c90054a9603d",
          "adunit-a683af72afcb3619",
          "adunit-4e8e1cf6a91daa19",
          "adunit-0c1489a95e140458",
          "adunit-6fc8782e10b5557f",
          "adunit-1f78c5e0547aae9a",
          "adunit-e91b1a52893ce4ca",
          "adunit-9176a95211fa8413"
        ],
        indexNum: 21,
        outputLength: pageUrl.outputLength,
        isPlayingArr: [
          {
            isPlaying: false,
            headVideoInfo: {
              coverUrl:
                "http://img.18183.com/uploads/allimg/171107/168-1G10GI353235.jpg",
              videoUrl: `${pageUrl.urlStr}${pageUrl.hashStr}${pageUrl.fileStr}${randomNumList[21]}${pageUrl.sufFixStr}`
            }
          }
        ]
      },
      {
        unitIds: [
          "adunit-50450502fd2f0ef6",
          "adunit-1c2999c6f39dbb9d",
          "adunit-fe28c90054a9603d",
          "adunit-a683af72afcb3619",
          "adunit-4e8e1cf6a91daa19",
          "adunit-0c1489a95e140458",
          "adunit-6fc8782e10b5557f",
          "adunit-1f78c5e0547aae9a",
          "adunit-e91b1a52893ce4ca",
          "adunit-9176a95211fa8413"
        ],
        indexNum: 20,
        outputLength: pageUrl.outputLength,
        isPlayingArr: [
          {
            isPlaying: false,
            headVideoInfo: {
              coverUrl:
                "http://img.18183.com/uploads/allimg/171107/168-1G10GI353235.jpg",
              videoUrl: `${pageUrl.urlStr}${pageUrl.hashStr}${pageUrl.fileStr}${randomNumList[10]}${pageUrl.sufFixStr}`
            }
          }
        ]
      },
      {
        unitIds: [
          "adunit-50450502fd2f0ef6",
          "adunit-1c2999c6f39dbb9d",
          "adunit-fe28c90054a9603d",
          "adunit-a683af72afcb3619",
          "adunit-4e8e1cf6a91daa19",
          "adunit-0c1489a95e140458",
          "adunit-6fc8782e10b5557f",
          "adunit-1f78c5e0547aae9a",
          "adunit-e91b1a52893ce4ca",
          "adunit-9176a95211fa8413"
        ],
        indexNum: 19,
        outputLength: pageUrl.outputLength,
        isPlayingArr: [
          {
            isPlaying: false,
            headVideoInfo: {
              coverUrl:
                "http://img.18183.com/uploads/allimg/171107/168-1G10GI353235.jpg",
              videoUrl: `${pageUrl.urlStr}${pageUrl.hashStr}${pageUrl.fileStr}${randomNumList[19]}${pageUrl.sufFixStr}`
            }
          }
        ]
      },
      {
        unitIds: [
          "adunit-50450502fd2f0ef6",
          "adunit-1c2999c6f39dbb9d",
          "adunit-fe28c90054a9603d",
          "adunit-a683af72afcb3619",
          "adunit-4e8e1cf6a91daa19",
          "adunit-0c1489a95e140458",
          "adunit-6fc8782e10b5557f",
          "adunit-1f78c5e0547aae9a",
          "adunit-e91b1a52893ce4ca",
          "adunit-9176a95211fa8413"
        ],
        indexNum: 18,
        outputLength: pageUrl.outputLength,
        isPlayingArr: [
          {
            isPlaying: false,
            headVideoInfo: {
              coverUrl:
                "http://img.18183.com/uploads/allimg/171107/168-1G10GI353235.jpg",
              videoUrl: `${pageUrl.urlStr}${pageUrl.hashStr}${pageUrl.fileStr}${randomNumList[18]}${pageUrl.sufFixStr}`
            }
          }
        ]
      },
      {
        unitIds: [
          "adunit-50450502fd2f0ef6",
          "adunit-1c2999c6f39dbb9d",
          "adunit-fe28c90054a9603d",
          "adunit-a683af72afcb3619",
          "adunit-4e8e1cf6a91daa19",
          "adunit-0c1489a95e140458",
          "adunit-6fc8782e10b5557f",
          "adunit-1f78c5e0547aae9a",
          "adunit-e91b1a52893ce4ca",
          "adunit-9176a95211fa8413"
        ],
        indexNum: 17,
        outputLength: pageUrl.outputLength,
        isPlayingArr: [
          {
            isPlaying: false,
            headVideoInfo: {
              coverUrl:
                "http://img.18183.com/uploads/allimg/171107/168-1G10GI353235.jpg",
              videoUrl: `${pageUrl.urlStr}${pageUrl.hashStr}${pageUrl.fileStr}${randomNumList[17]}${pageUrl.sufFixStr}`
            }
          }
        ]
      },
      {
        unitIds: [
          "adunit-50450502fd2f0ef6",
          "adunit-1c2999c6f39dbb9d",
          "adunit-fe28c90054a9603d",
          "adunit-a683af72afcb3619",
          "adunit-4e8e1cf6a91daa19",
          "adunit-0c1489a95e140458",
          "adunit-6fc8782e10b5557f",
          "adunit-1f78c5e0547aae9a",
          "adunit-e91b1a52893ce4ca",
          "adunit-9176a95211fa8413"
        ],
        indexNum: 16,
        outputLength: pageUrl.outputLength,
        isPlayingArr: [
          {
            isPlaying: false,
            headVideoInfo: {
              coverUrl:
                "http://img.18183.com/uploads/allimg/171107/168-1G10GI353235.jpg",
              videoUrl: `${pageUrl.urlStr}${pageUrl.hashStr}${pageUrl.fileStr}${randomNumList[16]}${pageUrl.sufFixStr}`
            }
          }
        ]
      },
      {
        unitIds: [
          "adunit-50450502fd2f0ef6",
          "adunit-1c2999c6f39dbb9d",
          "adunit-fe28c90054a9603d",
          "adunit-a683af72afcb3619",
          "adunit-4e8e1cf6a91daa19",
          "adunit-0c1489a95e140458",
          "adunit-6fc8782e10b5557f",
          "adunit-1f78c5e0547aae9a",
          "adunit-e91b1a52893ce4ca",
          "adunit-9176a95211fa8413"
        ],
        indexNum: 15,
        outputLength: pageUrl.outputLength,
        isPlayingArr: [
          {
            isPlaying: false,
            headVideoInfo: {
              coverUrl:
                "http://img.18183.com/uploads/allimg/171107/168-1G10GI353235.jpg",
              videoUrl: `${pageUrl.urlStr}${pageUrl.hashStr}${pageUrl.fileStr}${randomNumList[15]}${pageUrl.sufFixStr}`
            }
          }
        ]
      },
      {
        unitIds: [
          "adunit-50450502fd2f0ef6",
          "adunit-1c2999c6f39dbb9d",
          "adunit-fe28c90054a9603d",
          "adunit-a683af72afcb3619",
          "adunit-4e8e1cf6a91daa19",
          "adunit-0c1489a95e140458",
          "adunit-6fc8782e10b5557f",
          "adunit-1f78c5e0547aae9a",
          "adunit-e91b1a52893ce4ca",
          "adunit-9176a95211fa8413"
        ],
        indexNum: 14,
        outputLength: pageUrl.outputLength,
        isPlayingArr: [
          {
            isPlaying: false,
            headVideoInfo: {
              coverUrl:
                "http://img.18183.com/uploads/allimg/171107/168-1G10GI353235.jpg",
              videoUrl: `${pageUrl.urlStr}${pageUrl.hashStr}${pageUrl.fileStr}${randomNumList[14]}${pageUrl.sufFixStr}`
            }
          }
        ]
      },
      {
        unitIds: [
          "adunit-50450502fd2f0ef6",
          "adunit-1c2999c6f39dbb9d",
          "adunit-fe28c90054a9603d",
          "adunit-a683af72afcb3619",
          "adunit-4e8e1cf6a91daa19",
          "adunit-0c1489a95e140458",
          "adunit-6fc8782e10b5557f",
          "adunit-1f78c5e0547aae9a",
          "adunit-e91b1a52893ce4ca",
          "adunit-9176a95211fa8413"
        ],
        indexNum: 13,
        outputLength: pageUrl.outputLength,
        isPlayingArr: [
          {
            isPlaying: false,
            headVideoInfo: {
              coverUrl:
                "http://img.18183.com/uploads/allimg/171107/168-1G10GI353235.jpg",
              videoUrl: `${pageUrl.urlStr}${pageUrl.hashStr}${pageUrl.fileStr}${randomNumList[13]}${pageUrl.sufFixStr}`
            }
          }
        ]
      },
      {
        unitIds: [
          "adunit-50450502fd2f0ef6",
          "adunit-1c2999c6f39dbb9d",
          "adunit-fe28c90054a9603d",
          "adunit-a683af72afcb3619",
          "adunit-4e8e1cf6a91daa19",
          "adunit-0c1489a95e140458",
          "adunit-6fc8782e10b5557f",
          "adunit-1f78c5e0547aae9a",
          "adunit-e91b1a52893ce4ca",
          "adunit-9176a95211fa8413"
        ],
        indexNum: 12,
        outputLength: pageUrl.outputLength,
        isPlayingArr: [
          {
            isPlaying: false,
            headVideoInfo: {
              coverUrl:
                "http://img.18183.com/uploads/allimg/171107/168-1G10GI353235.jpg",
              videoUrl: `${pageUrl.urlStr}${pageUrl.hashStr}${pageUrl.fileStr}${randomNumList[12]}${pageUrl.sufFixStr}`
            }
          }
        ]
      },
      {
        unitIds: [
          "adunit-50450502fd2f0ef6",
          "adunit-1c2999c6f39dbb9d",
          "adunit-fe28c90054a9603d",
          "adunit-a683af72afcb3619",
          "adunit-4e8e1cf6a91daa19",
          "adunit-0c1489a95e140458",
          "adunit-6fc8782e10b5557f",
          "adunit-1f78c5e0547aae9a",
          "adunit-e91b1a52893ce4ca",
          "adunit-9176a95211fa8413"
        ],
        indexNum: 11,
        outputLength: pageUrl.outputLength,
        isPlayingArr: [
          {
            isPlaying: false,
            headVideoInfo: {
              coverUrl:
                "http://img.18183.com/uploads/allimg/171107/168-1G10GI353235.jpg",
              videoUrl: `${pageUrl.urlStr}${pageUrl.hashStr}${pageUrl.fileStr}${randomNumList[11]}${pageUrl.sufFixStr}`
            }
          }
        ]
      },
      {
        unitIds: [
          "adunit-50450502fd2f0ef6",
          "adunit-1c2999c6f39dbb9d",
          "adunit-fe28c90054a9603d",
          "adunit-a683af72afcb3619",
          "adunit-4e8e1cf6a91daa19",
          "adunit-0c1489a95e140458",
          "adunit-6fc8782e10b5557f",
          "adunit-1f78c5e0547aae9a",
          "adunit-e91b1a52893ce4ca",
          "adunit-9176a95211fa8413"
        ],
        indexNum: 10,
        outputLength: pageUrl.outputLength,
        isPlayingArr: [
          {
            isPlaying: false,
            headVideoInfo: {
              coverUrl:
                "http://img.18183.com/uploads/allimg/171107/168-1G10GI353235.jpg",
              videoUrl: `${pageUrl.urlStr}${pageUrl.hashStr}${pageUrl.fileStr}${randomNumList[10]}${pageUrl.sufFixStr}`
            }
          }
        ]
      },
      {
        unitIds: [
          "adunit-50450502fd2f0ef6",
          "adunit-1c2999c6f39dbb9d",
          "adunit-fe28c90054a9603d",
          "adunit-a683af72afcb3619",
          "adunit-4e8e1cf6a91daa19",
          "adunit-0c1489a95e140458",
          "adunit-6fc8782e10b5557f",
          "adunit-1f78c5e0547aae9a",
          "adunit-e91b1a52893ce4ca",
          "adunit-9176a95211fa8413"
        ],
        indexNum: 9,
        outputLength: pageUrl.outputLength,
        isPlayingArr: [
          {
            isPlaying: false,
            headVideoInfo: {
              coverUrl:
                "http://img.18183.com/uploads/allimg/171107/168-1G10GI353235.jpg",
              videoUrl: `${pageUrl.urlStr}${pageUrl.hashStr}${pageUrl.fileStr}${randomNumList[9]}${pageUrl.sufFixStr}`
            }
          }
        ]
      },
      {
        unitIds: [
          "adunit-50450502fd2f0ef6",
          "adunit-1c2999c6f39dbb9d",
          "adunit-fe28c90054a9603d",
          "adunit-a683af72afcb3619",
          "adunit-4e8e1cf6a91daa19",
          "adunit-0c1489a95e140458",
          "adunit-6fc8782e10b5557f",
          "adunit-1f78c5e0547aae9a",
          "adunit-e91b1a52893ce4ca",
          "adunit-9176a95211fa8413"
        ],
        indexNum: 8,
        outputLength: pageUrl.outputLength,
        isPlayingArr: [
          {
            isPlaying: false,
            headVideoInfo: {
              coverUrl:
                "http://img.18183.com/uploads/allimg/171107/168-1G10GI353235.jpg",
              videoUrl: `${pageUrl.urlStr}${pageUrl.hashStr}${pageUrl.fileStr}${randomNumList[8]}${pageUrl.sufFixStr}`
            }
          }
        ]
      },
      {
        unitIds: [
          "adunit-50450502fd2f0ef6",
          "adunit-1c2999c6f39dbb9d",
          "adunit-fe28c90054a9603d",
          "adunit-a683af72afcb3619",
          "adunit-4e8e1cf6a91daa19",
          "adunit-0c1489a95e140458",
          "adunit-6fc8782e10b5557f",
          "adunit-1f78c5e0547aae9a",
          "adunit-e91b1a52893ce4ca",
          "adunit-9176a95211fa8413"
        ],
        indexNum: 7,
        outputLength: pageUrl.outputLength,
        isPlayingArr: [
          {
            isPlaying: false,
            headVideoInfo: {
              coverUrl:
                "http://img.18183.com/uploads/allimg/171107/168-1G10GI353235.jpg",
              videoUrl: `${pageUrl.urlStr}${pageUrl.hashStr}${pageUrl.fileStr}${randomNumList[7]}${pageUrl.sufFixStr}`
            }
          }
        ]
      },
      {
        unitIds: [
          "adunit-50450502fd2f0ef6",
          "adunit-1c2999c6f39dbb9d",
          "adunit-fe28c90054a9603d",
          "adunit-a683af72afcb3619",
          "adunit-4e8e1cf6a91daa19",
          "adunit-0c1489a95e140458",
          "adunit-6fc8782e10b5557f",
          "adunit-1f78c5e0547aae9a",
          "adunit-e91b1a52893ce4ca",
          "adunit-9176a95211fa8413"
        ],
        indexNum: 6,
        outputLength: pageUrl.outputLength,
        isPlayingArr: [
          {
            isPlaying: false,
            headVideoInfo: {
              coverUrl:
                "http://img.18183.com/uploads/allimg/171107/168-1G10GI353235.jpg",
              videoUrl: `${pageUrl.urlStr}${pageUrl.hashStr}${pageUrl.fileStr}${randomNumList[6]}${pageUrl.sufFixStr}`
            }
          }
        ]
      },
      {
        unitIds: [
          "adunit-50450502fd2f0ef6",
          "adunit-1c2999c6f39dbb9d",
          "adunit-fe28c90054a9603d",
          "adunit-a683af72afcb3619",
          "adunit-4e8e1cf6a91daa19",
          "adunit-0c1489a95e140458",
          "adunit-6fc8782e10b5557f",
          "adunit-1f78c5e0547aae9a",
          "adunit-e91b1a52893ce4ca",
          "adunit-9176a95211fa8413"
        ],
        indexNum: 5,
        outputLength: pageUrl.outputLength,
        isPlayingArr: [
          {
            isPlaying: false,
            headVideoInfo: {
              coverUrl:
                "http://img.18183.com/uploads/allimg/171107/168-1G10GI353235.jpg",
              videoUrl: `${pageUrl.urlStr}${pageUrl.hashStr}${pageUrl.fileStr}${randomNumList[5]}${pageUrl.sufFixStr}`
            }
          }
        ]
      },
      {
        unitIds: [
          "adunit-50450502fd2f0ef6",
          "adunit-1c2999c6f39dbb9d",
          "adunit-fe28c90054a9603d",
          "adunit-a683af72afcb3619",
          "adunit-4e8e1cf6a91daa19",
          "adunit-0c1489a95e140458",
          "adunit-6fc8782e10b5557f",
          "adunit-1f78c5e0547aae9a",
          "adunit-e91b1a52893ce4ca",
          "adunit-9176a95211fa8413"
        ],
        indexNum: 4,
        outputLength: pageUrl.outputLength,
        isPlayingArr: [
          {
            isPlaying: false,
            headVideoInfo: {
              coverUrl:
                "http://img.18183.com/uploads/allimg/171107/168-1G10GI353235.jpg",
              videoUrl: `${pageUrl.urlStr}${pageUrl.hashStr}${pageUrl.fileStr}${randomNumList[4]}${pageUrl.sufFixStr}`
            }
          }
        ]
      },
      {
        unitIds: [
          "adunit-50450502fd2f0ef6",
          "adunit-1c2999c6f39dbb9d",
          "adunit-fe28c90054a9603d",
          "adunit-a683af72afcb3619",
          "adunit-4e8e1cf6a91daa19",
          "adunit-0c1489a95e140458",
          "adunit-6fc8782e10b5557f",
          "adunit-1f78c5e0547aae9a",
          "adunit-e91b1a52893ce4ca",
          "adunit-9176a95211fa8413"
        ],
        indexNum: 3,
        outputLength: pageUrl.outputLength,
        isPlayingArr: [
          {
            isPlaying: false,
            headVideoInfo: {
              coverUrl:
                "http://img.18183.com/uploads/allimg/171107/168-1G10GI353235.jpg",
              videoUrl: `${pageUrl.urlStr}${pageUrl.hashStr}${pageUrl.fileStr}${randomNumList[3]}${pageUrl.sufFixStr}`
            }
          }
        ]
      },
      {
        unitIds: [
          "adunit-14b691e5c57844fd",
          "adunit-d503f97c4678ece8",
          "adunit-0748bdcd3c8e330e",
          "adunit-2ebbb9e3dc9b8ed2",
          "adunit-310b6fb5bd90b9c5",
          "adunit-95926c7ca4d99c4f",
          "adunit-7031caf79bae149f",
          "adunit-18387fa54bcceb41",
          "adunit-61bb4c91506b5ed4",
          "adunit-c7af9b39f06ea43b"
        ],
        indexNum: 2,
        outputLength: pageUrl.outputLength,
        isPlayingArr: [
          {
            isPlaying: false,
            headVideoInfo: {
              coverUrl: "http://pic.uzzf.com/up/2017-9/20179259513989.png",
              videoUrl: `${pageUrl.urlStr}${pageUrl.hashStr}${pageUrl.fileStr}${randomNumList[2]}${pageUrl.sufFixStr}`
            }
          }
        ]
      },
      {
        unitIds: [
          "adunit-feda5011874873b6",
          "adunit-158f9ba9d8a17efd",
          "adunit-2ecbbb8d9a9baa6c",
          "adunit-849fa37b6f759659",
          "adunit-81165735c25c8e44",
          "adunit-16e1088ce22e77de",
          "adunit-d76dc13d06dd605b",
          "adunit-8363446d205805bd",
          "adunit-c862f8d245fda077",
          "adunit-af8be95a81757654"
        ],
        indexNum: 1,
        outputLength: pageUrl.outputLength,
        isPlayingArr: [
          {
            isPlaying: false,
            headVideoInfo: {
              coverUrl:
                "http://img5.imgtn.bdimg.com/it/u=3159449345,3781131544&fm=27&gp=0.jpg",
              videoUrl: `${pageUrl.urlStr}${pageUrl.hashStr}${pageUrl.fileStr}${randomNumList[1]}${pageUrl.sufFixStr}`
            }
          }
        ]
      },
      {
        unitIds: [
          "adunit-ba7b8d2fb76d80e4",
          "adunit-38dac77234ec38a6",
          "adunit-c782681025fd6789",
          "adunit-2b5f0084f137824f",
          "adunit-d7b9cbe1fddf121e",
          "adunit-2da8fd1d9f0c14ea",
          "adunit-86f281ad5914e7b0",
          "adunit-771c23e17b7efa7d",
          "adunit-bb0ace5b768d094e",
          "adunit-2e6f87e5411fb62b"
        ],
        indexNum: 0,
        outputLength: pageUrl.outputLength,
        isPlayingArr: [
          {
            isPlaying: false,
            headVideoInfo: {
              coverUrl:
                "http://5b0988e595225.cdn.sohucs.com/images/20171113/fbf8aae351cd4049bf8f29ec22b70e96.jpeg",
              videoUrl: `${pageUrl.urlStr}${pageUrl.hashStr}${pageUrl.fileStr}${randomNumList[0]}${pageUrl.sufFixStr}`
            }
          }
        ]
      }
    ],
    hiddenflag: false,
    indicatorDots: false, // 角标按钮
    vertical: true, //竖向
    autoplay: false, //自动播放
    circular: true, // 衔接滑动
    interval: 2000,
    duration: 600,
    previousMargin: 60,
    nextMargin: 60,
    transformNum: 0,
    current: 0
  },
  debouncedebouce(func, delay, immediate) {
    var timer = null;
    return function() {
      var context = this;
      var args = arguments;
      if (timer) clearTimeout(time);
      if (immediate) {
        //根据距离上次触发操作的时间是否到达delay来决定是否要现在执行函数
        var doNow = !timer;
        //每一次都重新设置timer，就是要保证每一次执行的至少delay秒后才可以执行
        timer = setTimeout(function() {
          timer = null;
        }, delay);
        //立即执行
        if (doNow) {
          func.apply(context, args);
        }
      } else {
        timer = setTimeout(function() {
          func.apply(context, args);
        }, delay);
      }
    };
  },
  processsSetData(params) {
    this.setData({
      ...params
    });
  },
  bindtransitionfn(e) {},
  bindchangeFn(e) {},
  bindanimationfinishFn(e) {
    this.debouncedebouce(this.processsSetData, 0)({
      current: e.detail.current
    });
  }
});
