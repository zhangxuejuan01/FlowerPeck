// super_card/pagess/team/team.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    itemChioce: 0,
    page: 1,
    lastPage: false,
    show_goTop: false,

    scrollLeft: 0,
    currentTab: 0,

    categories: [
      { id: 1, name: "全部" },
      { id: 2, name: "商业管理" },
      { id: 3, name: "产品开发" },
      { id: 4, name: "推广营销" },
      { id: 5, name: "设计创意" },
      { id: 6, name: "电商运营" },
      { id: 7, name: "职业考试" },
      { id: 8, name: "生活兴趣" },
      { id: 9, name: "向上管理" },
      { id: 10, name: "商业实战" },
      { id: 11, name: "人力资源管理" },
    ],

    chargeList: [
      { id: 1, name: "全部" },
      { id: 2, name: "免费" },
      { id: 3, name: "收费" },
    ],

    courseList:[
      { id: 1, name: '项目管理实战指南', price: 299, num: 120, pic: '../images/icon1.jpg', introduce:'区块链（Blockchain）是比特币的一个重要概念，它本质上是一个去中心化的数据库，同时作为比特币的底层技术。区块链是一串使用密码学方法相关联产生的数据块，每一个数据块中包含了一次比特币网络交易的信息，用于验证其信息的有效性（防伪）和生成下一个区块。' ,catalog:[{ id: 1, name: '课程介绍、资源获取'},{ id: 2, name: '货币发展史与比特币特性' },{ id: 3, name: '中心化与去中心化介绍' },{ id: 4, name: '区块链概念介绍' },{ id: 5, name: 'POW、POS、DPOS' },{ id: 6, name: '比特币产生的分配' }]},

      { id: 2, name: '区块链政务应用-档案与身份管理', price: 0, num: 225, pic: '../images/icon2.jpg', introduce: '区块链（Blockchain）是比特币的一个重要概念，它本质上是一个去中心化的数据库，同时作为比特币的底层技术。区块链是一串使用密码学方法相关联产生的数据块，每一个数据块中包含了一次比特币网络交易的信息，用于验证其信息的有效性（防伪）和生成下一个区块。', catalog: [{ id: 1, name: '课程介绍、资源获取' }, { id: 2, name: '货币发展史与比特币特性' }, { id: 3, name: '中心化与去中心化介绍' }, { id: 4, name: '区块链概念介绍' }, { id: 5, name: 'POW、POS、DPOS' }, { id: 6, name: '比特币产生的分配' }] },

      { id: 3, name: '即学即用的数据驱动课', price: 199, num: 123, pic: '../images/icon3.jpg', introduce: '区块链（Blockchain）是比特币的一个重要概念，它本质上是一个去中心化的数据库，同时作为比特币的底层技术。区块链是一串使用密码学方法相关联产生的数据块，每一个数据块中包含了一次比特币网络交易的信息，用于验证其信息的有效性（防伪）和生成下一个区块。', catalog: [{ id: 1, name: '课程介绍、资源获取' }, { id: 2, name: '货币发展史与比特币特性' }, { id: 3, name: '中心化与去中心化介绍' }, { id: 4, name: '区块链概念介绍' }, { id: 5, name: 'POW、POS、DPOS' }, { id: 6, name: '比特币产生的分配' }] },

      { id: 4, name: '小程序指导', price: 0, num: 99, pic: '../images/icon2.jpg', introduce: '区块链（Blockchain）是比特币的一个重要概念，它本质上是一个去中心化的数据库，同时作为比特币的底层技术。区块链是一串使用密码学方法相关联产生的数据块，每一个数据块中包含了一次比特币网络交易的信息，用于验证其信息的有效性（防伪）和生成下一个区块。', catalog: [{ id: 1, name: '课程介绍、资源获取' }, { id: 2, name: '货币发展史与比特币特性' }, { id: 3, name: '中心化与去中心化介绍' }, { id: 4, name: '区块链概念介绍' }, { id: 5, name: 'POW、POS、DPOS' }, { id: 6, name: '比特币产生的分配' }] },
      { id: 5, name: '数据结构', price: 199, num: 23, pic: '../images/icon1.jpg', introduce: '区块链（Blockchain）是比特币的一个重要概念，它本质上是一个去中心化的数据库，同时作为比特币的底层技术。区块链是一串使用密码学方法相关联产生的数据块，每一个数据块中包含了一次比特币网络交易的信息，用于验证其信息的有效性（防伪）和生成下一个区块。', catalog: [{ id: 1, name: '课程介绍、资源获取' }, { id: 2, name: '货币发展史与比特币特性' }, { id: 3, name: '中心化与去中心化介绍' }, { id: 4, name: '区块链概念介绍' }, { id: 5, name: 'POW、POS、DPOS' }, { id: 6, name: '比特币产生的分配' }] },
    ],
    

    activeChargeId: 1,
    chargeChioce: 1,

    showMoreCate: false,
    allInfo: [],



    //课程详情页数据
    activeTitleId: 1,
    titleChioce: 1,


  },


  // 点击分类标题切换
  tabClick: function (e) {
    console.log('e', e)
    var currentTab = e.target.dataset.current
    console.log('currentTab', currentTab)
    // console.log('this.data.category[currentTab]:', this.data.category[currentTab])
    this.setData({
      page: 1,
      currentTab: currentTab,
      itemChioce: currentTab,
      showMoreCate: false
    });
   // this.getCourse() //课程数据
    this.checkCate()
  },

  // 设置切换位置
  checkCate: function () {
    if (this.data.currentTab > 3 && this.data.currentTab < 7) {
      this.setData({
        scrollLeft: 280
      });
    } else if (this.data.currentTab >= 7 && this.data.currentTab < 10) {
      this.setData({
        scrollLeft: 480
      });
    } else if (this.data.currentTab >= 10 && this.data.currentTab < 14) {
      this.setData({
        scrollLeft: 720
      });
    } else {
      this.setData({
        scrollLeft: 0
      });
    }
  },


  //点击展开更多分类
  tabMore: function () {
    this.setData({
      showMoreCate: true
    });
    //this.getCourse()
  },

  //关闭更多分类
  moreClose: function () {
    this.setData({
      showMoreCate: false
    });
    //this.getCourse()
  },

  //全部，免费，收费
  chargeClick: function (e) {
    var id = e.target.dataset.id
    this.setData({
      page: 1,
      activeChargeId: id,
      chargeChioce: id
    });
    //this.getCourse()
  },


  chooseCourse: function (e) {
    var index = e.currentTarget.dataset.index
    var courseList = this.data.courseList
    

    //方法一：通过在路径后面以字符串形式传递所选择的那条数据
    // var chooseInfo = courseList[index]
    // chooseInfo = JSON.stringify(chooseInfo) //转成字符串才可以携带在地址后面
    // wx.navigateTo({
    //   url: '../coursedetail/coursedetail?msgs=' + chooseInfo
    // })


   //方法二：详情页通过从上一级页（列表页）拿数据，所以现在当前列表页跳转的时候也要把需要的数据id传过去给详情页
    var course_id = courseList[index].id
    wx.navigateTo({
      url: '../coursedetail/coursedetail?course_id=' + course_id
    })

  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //  this.getCourseCateList()
    //  this.getCourse()


  },


  // 课程分类
  getCourseCateList: function () {
    var that = this;
    wx.request({
      url: app.globalData.path + '/shop/goods/category/all',
      method: 'POST',
      success(res) {
        that.setData({
          category: res.data.data
        })
      }
    })
  },


  // 课程列表
  getCourse: function (isload) {
    var that = this;
    var data = {
      page: that.data.page,
      type: that.data.itemChioce
    }
    wx.request({
      url: app.globalData.path + '/shop/goods/category/all',
      method: 'POST',
      data: data,
      success(res) {
        // if (!res.data.data.length) {
        //   that.data.lastPage = true
        //   return false
        // }

        //isload==true表示是在页面上拉加载的函数里面执行的方法，则不清空数据，继续再原有数据的基础上追加
        if (isload == true) {
          that.data.allInfo = that.data.allInfo.concat(res.data.data)
        } else {
          that.setData({
            allInfo: []
          })
          that.data.allInfo = res.data.data
        }
        that.setData({
          allInfo: that.data.allInfo
        })

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

  //监听页面滚动
  onPageScroll: function (e) {

    if (this.data.show_goTop === false && e.scrollTop >= 200) this.setData({ show_goTop: true })

    if (this.data.show_goTop === true && e.scrollTop < 200) this.setData({ show_goTop: false })

  },

  // 一键回到顶部
  goTop: function (e) {
    if (wx.pageScrollTo) {
      this.setData({ show_goTop: false })
      wx.pageScrollTo({
        scrollTop: 0,
        duration: 300
      })
    } else {
      wx.showToast({
        title: '暂不支持',
      })
    }
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
    this.data.page = 1
    this.data.lastPage = false
    //this.getCourse()
    wx.stopPullDownRefresh() //处理完数据刷新后，wx.stopPullDownRefresh可以停止当前页面的下拉刷新。

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    var that = this

    if (that.data.lastPage === true) return false

    // wx.showLoading({
    //   title: '加载中',
    // })

    that.data.page++

   // that.getCourse(true) //传值过去，表示页面上拉加载的就不清空数据

  },

})