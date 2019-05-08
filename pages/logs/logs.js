const app = getApp()
Page({
  data: {
    img: "../images/icon3.jpg",
    banners: [],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    loadingHidden: false, // loading
    userInfo: {},
    swiperCurrent: 0,
    selectCurrent: 0,
    categories: [],
    activeCategoryId: 0,
    goods: [],
    scrollTop: 0,
    loadingMoreHidden: true,

    hasNoCoupons: true,
    coupons: [],
    searchInput: '',

    curPage: 1,
    pageSize: 20,

    show_goTop: false,

    lastPage: false,
  },

  //swiper事件处理函数
  swiperchange: function (e) {
    this.setData({
      swiperCurrent: e.detail.current
    })
  },

  //分类标题切换事件
  tabClick: function (e) {
    var id = e.currentTarget.dataset.id
    this.setData({
      activeCategoryId: id,
      curPage: 1,
      lastPage: false,
    })
    this.getGoodsList(this.data.activeCategoryId)
  },

  //跳转到详情页
  toDetailsTap: function(e){
    var good_id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '../prodetails/prodetails?good_id=' + good_id
    })
  },

  // 获取banner列表
  getBannerList: function () {
    var that = this;
    wx.request({
      url: app.globalData.path + '/banner/list',
      success: function (res) {
        var data = res.data.data
        that.setData({
          banners: data
        })
      }
    })

  },

  // 获取分类标题列表
  getCategoryList: function () {
    var that = this;
    wx.request({
      url: app.globalData.path + '/shop/goods/category/all',
      success: function (res) {
        var data = res.data.data
        console.log('data',data)
        var categories = [{ id: 0, name: "全部" }]; // 给数组加一条数据
        if (res.data.code == 0) {
          for (var i = 0; i < data.length; i++) {
            categories.push(res.data.data[i]);
          }
        }
        that.setData({
          categories: categories
        })
        console.log('categories', that.data.categories)
      }
    })
    that.getGoodsList(0);
  },

  // 获取产品列表
  getGoodsList: function (categoryId, isload) {
    var that = this;
    wx.request({
      url: app.globalData.path + '/shop/goods/list',
      data: {
        categoryId: categoryId,
        nameLike: that.data.searchInput,
        page: that.data.curPage,
        pageSize: that.data.pageSize
      },
      success: function (res) {

        //res.data.code == 700表示没有更多数据了
        if (res.data.code == 404 || res.data.code == 700) {
          //表示首次加载都没有数据的时候，即分类没有数据的情况下
          if (that.data.curPage == 1) {
            that.setData({
              goods: [],
              loadingMoreHidden: false,
            })
          }

          that.setData({
            loadingMoreHidden: false,
            lastPage: true // 表示尾页没有更多数据

          })

        } else {
          //isload==true表示是在页面上拉加载的函数里面执行的方法，则不清空数据，继续再原有数据的基础上追加
          if (isload == true) {
            that.data.goods = that.data.goods.concat(res.data.data)
          } else {
            that.setData({
              goods: []
            })
            that.data.goods = res.data.data
          }
          that.setData({
            goods: that.data.goods
          })
        }
      }
    })
    console.log('goods', that.data.goods)
  },

  onLoad() {
    this.getBannerList()
    this.getCategoryList()
  },

  //设置搜索关键字,监听搜索输入框的关键字
  setSearchKey: function (e) {
    var that = this;
    var key = e.detail.value
    that.setData({
      searchInput: key,
      curPage: 1
    })
  },

  //搜索
  toSearch: function () {
    if (this.data.searchInput) {
      this.setData({
        curPage: 1
      });
      this.getGoodsList(this.data.activeCategoryId);
    } else {
      wx.showToast({
        title: '请输入搜索关键词',
        icon: 'none'
      })
    }

  },

  //监听页面滚动
  onPageScroll: function (e) {
    this.setData({
      scrollTop: e.scrollTop  //页面需要用到？
    })

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
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

    //为了防止重复请求，lastPage表示尾页
    if (this.data.lastPage === true) return false

    this.setData({
      curPage: this.data.curPage + 1
    });
    this.getGoodsList(this.data.activeCategoryId, true)


    // this.setData({
    //   curPage: this.data.curPage + 1
    // });
    // this.getGoodsList(this.data.activeCategoryId, true)

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.setData({
      curPage: 1
    });
    this.getGoodsList(this.data.activeCategoryId)
    wx.stopPullDownRefresh() //处理完数据刷新后，wx.stopPullDownRefresh可以停止当前页面的下拉刷新。
    console.log('下拉刷新curPage：', this.data.curPage)
  },

  onShareAppMessage: function (res) {
    return {
      title: '分享',
      path: 'pages/classview/classview',
      success: (res) => {
        console.log("转发成功", res);
      },
      fail: (res) => {
        console.log("转发失败", res);
      }
    }
  },

})
