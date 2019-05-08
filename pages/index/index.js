//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '../images/icon1.jpg',
      '../images/icon2.jpg',
      '../images/icon3.jpg'
    ]
    // motto: 'Hello World',
    // userInfo: {},
    // hasUserInfo: false,
    // canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  
  //事件处理函数

  //跳去view类容器页面
  toClassView: function() {
    wx.navigateTo({
      url: '../classview/classview'
    })
  },
   //跳去动画演示页面
  toAnimationView: function() {
    wx.navigateTo({
      url: '../animationview/animationview'
    })
  },
   //跳去scroll-view页面
  toScrollView: function () {
    wx.navigateTo({
      url: '../scrollview/scrollview'
    })
  },
   //跳去切换类容器页面
  toSwiperview: function () {
    wx.navigateTo({
      url: '../swiperview/swiperview'
    })
  },
   //跳去手势表单页面
  toBtnslidView: function () {
    wx.navigateTo({
      url: '../account/account'
    })
  },
  // toBtnslidView: function () {
  //   wx.navigateTo({
  //     url: '../btnslidview/btnslidview'
  //   })
  // },
   //跳去选择表单页面
  toCheckFormView: function () {
    wx.navigateTo({
      url: '../checkformview/checkformview'
    })
  },
   //跳去动画页面
  toTextView: function () {
    wx.navigateTo({
      // url: '../textview/textview'
      url: '../animationview/animationview'
    })
  },
  //跳去音频与图片页面
  toAudioPicture: function () {
    wx.navigateTo({
      url: '../audiopicture/audiopicture'
    })
  },
  //跳去授权页面
  toExtendView: function () {
    wx.navigateTo({
      url: '../extendview/extendview'
    })
  },
  //跳去画布页面
  toCanvasView: function () {
    wx.navigateTo({
      url: '../canvasview/canvasview'
    })
  },
  //跳去地图页面
  toMapView: function () {
    wx.navigateTo({
      url: '../mapview/mapview'
    })
  },


  onShareAppMessage: function () {
    return {
      title: '分享',
      desc: '小程序组件库',
      path: '/pages/index/index'
    }
  },

  onLoad:function(){
    //授权之后才可以调用wx.getUserInfo方法
    // wx.getUserInfo({
    //   success(res) {
    //     console.log('getUserInfo-res', res)
    //   }
    // })

  },



   
  // onLoad: function () {
  // 首先先找全局变量里是否有用户信息这个数据 没有再去调api获取,app.js里就是要把用户信息存入全局变量里,一般都是在启动的时候 就把这些数据准备好 
  //   if (app.globalData.userInfo) {
  //     this.setData({
  //       userInfo: app.globalData.userInfo,
  //       hasUserInfo: true
  //     })
  //   } else if (this.data.canIUse){
  //     // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
  //     // 所以此处加入 callback 以防止这种情况
  //     app.userInfoReadyCallback = res => {
  //       this.setData({
  //         userInfo: res.userInfo,
  //         hasUserInfo: true
  //       })
  //     }
  //   } else {
  //     // 在没有 open-type=getUserInfo 版本的兼容处理
  //     wx.getUserInfo({
  //       success: res => {
  //         app.globalData.userInfo = res.userInfo
  //         this.setData({
  //           userInfo: res.userInfo,
  //           hasUserInfo: true
  //         })
  //       }
  //     })
  //   }
  // },
  // getUserInfo: function(e) {
  //   console.log(e)
  //   app.globalData.userInfo = e.detail.userInfo
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  // }
})
