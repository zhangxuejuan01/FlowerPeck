Page({
  data: {

  },
  //事件处理函数
  toAudioView: function () {
    wx.navigateTo({
      url: '../audioview/audioview'
    })
  },
  toVideoView: function () {
    wx.navigateTo({
      url: '../videoview/videoview'
    })
  },
  toCameraView: function () {
    wx.navigateTo({
      url: '../cameraview/cameraview'
    })
  },
  toImageView: function () {
    wx.navigateTo({
      url: '../imageview/imageview'
    })
  },
  onShareAppMessage: function () {
    return {
      title: '分享',
      desc: '手势表单',
      path: 'pages/btnslidview/btnslidview'
    }
  }


})
