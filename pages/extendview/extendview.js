Page({
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad() {
    // 查看是否授权
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          // wx.getUserInfo({
          //   success(res) {
          //     console.log('res22',res.userInfo)
          //   }
          // })
          wx.showModal({
            title: '提示',
            content: '您已授权过了，无需重新授权！',
            showCancel: false,
            confirmText: '知道了' ,
            success:function(res){
              wx.switchTab({
                url: '../index/index'
              })
            }
          })

         
        }else{
          console.log('请先授权')
        }
      }
    })
  },
  bindGetUserInfo(e) {
    console.log('点击授权-e：',e)
    wx.switchTab({
      url: '../index/index'
    })
  }
})