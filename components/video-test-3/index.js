Component({
    properties: {
        isplaying: {
            type: Boolean,
            value: false,
            observer(newVal) {
                if (newVal && newVal === true) {
                    this.videoPlay();
                } else {
                    this.videoPause();
                }
            },
        },
        idx: {
            type: String,
        },
    },
    data: {
        headVideoInfo: {
            coverUrl: 'https://si.geilicdn.com/open813142332-560300000167c1b76d220a217216_740_737.jpg?w=800&h=800&cp=1',
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
        this.subscribePosition();
    },

    methods: {
        initData() {
            let videoContext = wx.createVideoContext('item-head-video', this);
            this.setData({
                videoContext,
            });
        },

        _selectedChange(newVal, oldVal) {
            if (newVal && oldVal && newVal !== oldVal && newVal === false) {
                this.videoPause();
            }
        },

        subscribePosition() {
            let that = this;
            const { idx } = this.data;
            wx.createIntersectionObserver(that)
                .relativeToViewport()
                .observe('.video--wrap', res => {
                    if (res && res.intersectionRatio > 0) {
                    } else {
                        that.triggerEvent('onpause', { index: idx });
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
            const { idx } = this.data;
            this.triggerEvent('onplay', { index: idx });
        },
        handleVideoEnded() {
            const { idx } = this.data;
            this.triggerEvent('onpause', { index: idx });
        },
    },
});
