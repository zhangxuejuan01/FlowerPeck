Page({
  data: {

  },
  //事件处理函数
  toButtonView: function () {
    wx.navigateTo({
      url: '../buttonview/buttonview'
    })
  },
  toSliderView: function () {
    wx.navigateTo({
      url: '../sliderview/sliderview'
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
