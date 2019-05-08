Page({
  data: {
    poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
    name: '此时此刻',
    author: '许巍',
    src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
  },
  onReady(e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
  },
  audioPlay() {
    this.audioCtx.play()
  },
  audioPause() {
    this.audioCtx.pause()
  },
  audio14() {
    this.audioCtx.seek(14)
  },
  audioStart() {
    this.audioCtx.seek(0)

    // wx.showActionSheet({
    //   itemList: ['A', 'B', 'C'],
    //   success(res) {
    //     console.log(res.tapIndex)
    //   },
    //   fail(res) {
    //     console.log(res.errMsg)
    //   }
    // })
  },

  openActionsheet() {
    wx.showActionSheet({
      itemList: ['拍照或录像', '选取现有的'],
      itemColor: '#007aff',
      success(res) {
        console.log('res',res)
        console.log('res.tapIndex',res.tapIndex);
        if (res.tapIndex === 0) {
          wx.chooseVideo({
            sourceType: ['camera'],
            success(res) {
              console.log(res.tempFilePath);
            }
          })
        } else if (res.tapIndex === 1) {
          wx.chooseImage({
            count: 3, // 设置最多三张
            sizeType: ['original', 'compressed'],
            sourceType: ['album', 'camera'],
            success(res) {
              var tempFilePaths = res.tempFilePaths;
              // 图片预览
              wx.previewImage({
                current: res.tempFilePaths[0],
                urls: res.tempFilePaths
              })
            }
          })
        }
      }
    })
  },
  openActionsheetDe(e) {
    wx.showActionSheet({
      itemList: ['删除信息'],
      itemColor: '#FF3B30',
      success(res) {
        wx.showToast({ title: '删除成功！' })
      }
    })
  },
  openActionsheetSh(e) {
    wx.showActionSheet({
      itemList: ['回复', '转发', '打印'],
      itemColor: '#007aff',
      success(res) {
        if (res.tapIndex === 0) {
          wx.showToast({ title: '回复成功！' });
        } else if (res.tapIndex === 1) {
          wx.showToast({ title: '转发成功！' });
        } else if (res.tapIndex === 2) {
          wx.showToast({ title: '打印成功！' });
        }
      }
    })
  }


})