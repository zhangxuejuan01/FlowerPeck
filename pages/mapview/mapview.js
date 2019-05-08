// pages/mapview/mapview.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address:'',
    name:'',
  },

  //选择地址信息
  getCurrentLocation: function () {
    var that = this;
    wx.chooseLocation({
      success: function (res) {
        console.log('选择地址信息', res)
        var address = res.address + '(' + res.name + ')'
        that.setData({ address: address,name:res.name, latitude: res.latitude, longitude: res.longitude })
        // that.setData({ address: res.address, latitude: res.latitude, longitude: res.longitude })
        console.log('address:', that.data.address)
      }
    })
  },

  //显示名片地址在地图中的位置
  showMapLocation: function () {

    var that = this
    var name = that.data.name
    var address = that.data.address
    var latitude = parseFloat(that.data.latitude)
    var longitude = parseFloat(that.data.longitude)
    console.log('latitude',latitude)
    console.log('name', name)
    wx.openLocation({
      latitude: latitude,
      longitude: longitude,
      name: name,
      address: address,
      scale: 28
    })

  },




  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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