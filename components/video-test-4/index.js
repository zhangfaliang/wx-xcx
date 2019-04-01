Component({
    data: {
        videoList: [{ isPlaying: false }, { isPlaying: false }, { isPlaying: false }, { isPlaying: false }],
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
                videoList: [...videoList],
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
                videoList: [...videoList],
            });
        },
    },
});
