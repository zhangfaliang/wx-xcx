Component({
    data: {
        headVideoInfo: {
            coverUrl: 'https://si.geilicdn.com/vshop1488415812261-13639512.jpg?w=800&h=800&cp=1',
            videoUrl: 'https://v.geilicdn.com/video/wdsgoods1397000013-731e00000168308294340a207825.mp4.f20.mp4',
        },
        autoplay: false,
        controls: true,
        video: true,
        play: false,
        left: false,
        fullScreen: false,
    },

    ready() {
        this.initData();
        this.getNetWorkType();
        this.subscribePosition();
    },

    methods: {
        initData() {
            let videoContext = wx.createVideoContext('item-head-video', this);
            this.setData({
                videoContext,
            });
        },
        getNetWorkType() {
            let that = this;
            wx.getNetworkType({
                success(res) {
                    const networkType = res.networkType;
                    if (networkType === 'wifi') {
                        that.videoPlay();
                    }
                },
            });
        },
        subscribePosition() {
            let that = this;
            wx.createIntersectionObserver(that)
                .relativeToViewport()
                .observe('.video--wrap', res => {
                    if (res && res.intersectionRatio > 0) {
                        that.videoPlay();
                    } else {
                        that.videoPause();
                    }
                });
        },
        videoPlay() {
            const { videoContext } = this.data;

            this.setData(
                {
                    play: true,
                    autoplay: true,
                },
                () => {
                    videoContext.play();
                }
            );
        },
        videoPause() {
            const { videoContext } = this.data;

            this.setData(
                {
                    play: false,
                    autoplay: false,
                },
                () => {
                    videoContext.pause();
                }
            );
        },
        controlVideo() {
            this.videoPlay();
        },
        handleFullScreenChange() {
            const { fullScreen } = this.data;
            this.setData({
                fullScreen: !fullScreen,
            });
        },
        handleSwapeShow(e) {
            const { dataset } = e.target;
            const { videoContext } = this.data;
            if (dataset.target === 'video') {
                this.setData({
                    video: true,
                    left: false,
                    play: false,
                });
            } else {
                this.setData({
                    video: false,
                    left: true,
                });
            }
            videoContext.pause();
        },
        handleVideoEnded() {
            let videoContext = wx.createVideoContext('item-head-video', this);
            this.setData(
                {
                    play: false,
                    autoplay: false,
                },
                () => {
                    videoContext.stop();
                }
            );
        },
    },
});
