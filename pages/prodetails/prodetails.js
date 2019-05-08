var WxParse = require('../../wxParse/wxParse.js');
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    good_id:'',
    goodsDetail: {},
    productName:'',
    collectStatus:false,

    indicatorDots:false,

  },

  //添加或取消收藏 -- 正常逻辑是应该在一开始进入页面就要判读商品是否已经收藏
  collect:function(){
    if (this.data.collectStatus == false){
      this.setData({ collectStatus: true })
      wx.showToast({
        title: '收藏成功',
        icon: 'success',
        duration: 2000
      })
    }else{
      this.setData({ collectStatus: false })
      wx.showToast({
        title: '取消收藏成功',
        icon: 'none',
        duration: 2000
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.setData({
      good_id: options.good_id
    });
    wx.request({
      url: app.globalData.path + '/shop/goods/detail',
      data: {
        id: options.good_id
      },
      success: function (res) {
        var indicatorDots = false //是否显示轮播图面板指示点
        if (res.data.data.pics.length > 1){
          indicatorDots = true
        }else{
          indicatorDots = false
        }
        that.setData({
          goodsDetail: res.data.data,
          indicatorDots: indicatorDots,
          productName: res.data.data.basicInfo.name
        });
        WxParse.wxParse('article', 'html', res.data.data.content, that, 5);
      }
    })
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
    var title = this.data.productName
    var path = '/pages/prodetails/prodetails?good_id=' + this.data.good_id
    console.log('分享path：',path)

    return {
      title: title,
      path: path,
      success: (res) => {
        console.log("分享成功", res);
      },
      fail: (res) => {
        console.log("分享失败", res);
      }
    }
  }
})