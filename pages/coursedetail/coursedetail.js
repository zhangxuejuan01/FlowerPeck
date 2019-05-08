// super_card/pagess/team/team.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeTitleId: 1,
    titleChioce: 1,
    course_id:'',
    detial:{},

  },

  titleClick: function (e) {
    var id = e.target.dataset.id
    this.setData({
      activeTitleId: id,
      titleChioce: id
    });
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    //方法一：通过在路径后面以字符串形式传递所选择的那条数据值(不建议用这种方法，不然数据太多的时候，在路径后面传字符串会有长度限制)
    //var info = JSON.parse(options.msgs) 
    //that.setData({ detial: info });



   //方法二：通过从上一级页拿数据，当然跳转的时候也要把需要的数据id传过来
    var course_id = options.course_id 
    var pages = getCurrentPages();
    var prevPage = pages[pages.length - 2]; // 上一级页
    var info = prevPage.data.courseList
    for (var x in info) {
      if (info[x].id == course_id) {
        that.setData({ detial: info[x] })
        break
      }
    }
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

})