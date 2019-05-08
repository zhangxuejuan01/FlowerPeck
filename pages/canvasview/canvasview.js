// pages/canvasview/canvasview.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      screenWidth: '',
      winHeight: '',
      ratio: '',
      shareImgPath: '',
      canvasHidden: true,
  },


  downImage() {
    var that = this
    //保存成功失败之后，都要隐藏画板，否则影响界面显示。
    if (!that.data.shareImgPath) return
    wx.getImageInfo({
      src: this.data.shareImgPath,
      success(res) {
        wx.saveImageToPhotosAlbum({
          filePath: res.path,
          success(res) {
            wx.showToast({
              title: '保存至相册成功',
              icon: 'success',
              success: function () {
                that.setData({
                  canvasHidden: true //把画布隐藏
                })
              }
            })
          },
          fail(err) {
            wx.showToast({
              title: '保存失败',
              icon: 'error',
              success: function () {
                that.setData({
                  canvasHidden: true //把画布隐藏
                })
              }
            })
          }
        })
      },

    })
  },

  savePosterPic: function () {
    var that = this
    wx.getSetting({
      success(res) {
        if (!res.authSetting['scope.writePhotosAlbum']) {
          wx.authorize({
            scope: "scope.writePhotosAlbum",
            success(res) {
              that.downImage()
            },
            fail(err) {
              wx.showModal({
                title: '系统提示',
                content: '保存二维码到本地需要授权，点击确定获取授权。',
                confirmText: '去授权',
                cancelText: '取消',
                success: function (res) {
                  if (res.confirm) {
                    wx.openSetting({
                      success(res) {
                        that.savePosterPic()
                      }
                    })
                  } else {
                    
                  }
                }
              })

            }
          })
        } else {
          that.downImage()
        }

      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    //画布 正规的是隐藏canvas 组件 ，展示的是缓存图 也就是生成图  点击保存执行保存操作
    //获取用户设备信息，屏幕宽度
    wx.getSystemInfo({
      success(res) {
        that.setData({
          screenWidth: res.screenWidth,
          winHeight: res.windowHeight,
          ratio: res.pixelRatio
        })
      }
    })
    // 由于canvas不能使用网络图片，所以此处进行头像临时路径存储，下载文件下来，如果用的是本地图片则不用下载下来
    // wx.downloadFile({
    //   url: qrPic,
    //   success(res) {
    //     that.setData({
    //       qrPicUrl: res.tempFilePath,
    //     })
       
    //   },
    // });


    var unit = that.data.screenWidth / 375;
    var ratio = that.data.ratio;
    var screenWidth = that.data.screenWidth;
    var winHeight = that.data.winHeight;
    // 使用 wx.createContext 获取绘图上下文 context
    const context = wx.createCanvasContext('canvas')
    //设置画板显示，才能开始绘图
    that.setData({
      canvasHidden: false
    })
    //画个矩形填充白色作为canvas的背景底图，不然有些手机系统会默认黑色底图
    //先填充颜色再画矩形
    context.setFillStyle('#fff')
    //方法一：context.rect（）+ context.fill()
    // context.rect(0, 0, screenWidth, winHeight)
    // context.fill()
    //方法二：context.fillRect（）
    context.fillRect(0, 0, screenWidth, winHeight)

    context.setFontSize(20)
    context.setFillStyle('#000')
    context.setTextAlign('center')
    context.fillText('我的个人微信', unit * 130, unit * 50)
    context.drawImage('../images/code.png', unit * 20, unit * 80, unit * 454 / 2, unit * 454 / 2)
    context.setFontSize(15)
    context.setFillStyle('#515151')
    context.setTextAlign('center')
    context.fillText('扫一扫二维码图案，即可添加我为好友哦！', unit * 140, unit * 350)

    //把画板内容绘制成图片，并回调 画板图片路径
    context.draw(false, function () {
      wx.canvasToTempFilePath({
        x: 0,
        y: 0,
        width: screenWidth,
        height: winHeight,
        destWidth: ratio * screenWidth,
        destHeight: ratio * winHeight,
        fileType: 'jpg',//保存为jpg，不然默认是png，就没有底图
        canvasId: 'canvas',
        quality: 1,
        success: function (res) {
          that.setData({
            shareImgPath: res.tempFilePath,
            canvasHidden: true  //把画布隐藏
          })
          if (!res.tempFilePath) {
            wx.showModal({
              title: '提示',
              content: '图片绘制中，请稍后重试',
              showCancel: false
            })
          }
          wx.hideLoading()

        }

      })
    });



  },





  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})