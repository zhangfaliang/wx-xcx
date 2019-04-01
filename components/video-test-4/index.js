Component({
  properties: {
    videoList: {
      // 属性名
      type: Array, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: [
        { isPlaying: false },
        { isPlaying: false },
        { isPlaying: false },
        { isPlaying: false }
      ] // 属性初始值（可选），如果未指定则会根据类型选择一个
    }
  },
  data: {
    // videoList: [
    //   { isPlaying: false },
    //   { isPlaying: false },
    //   { isPlaying: false },
    //   { isPlaying: false }
    // ]
  },

  methods: {
    onPlay(e) {
      let idx = e.detail.index;
      let { videoList } = this.data;
      videoList.map((item, index) => {
        if (idx == index) {
          item.isPlaying = true;
        } else {
          item.isPlaying = false;
        }
      });
      this.setData({
        videoList: [...videoList]
      });
    },
    onPause(e) {
      let idx = e.detail.index;
      let { videoList } = this.data;
      videoList.map((item, index) => {
        if (idx == index) {
          item.isPlaying = false;
        }
      });
      this.setData({
        videoList: [...videoList]
      });
    }
  }
});
