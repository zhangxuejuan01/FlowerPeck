//获取应用实例
Page({
  data: {
    defaultSize: 'default',
    primarySize: 'default',
    warnSize: 'default',
    disabled: false,
    plain: false,
    loading: false,
    userInfo:{},
    info:false
  },
  setDisabled(e) {
    this.setData({
      disabled: !this.data.disabled
    })
  },
  setPlain(e) {
    this.setData({
      plain: !this.data.plain
    })
  },
  setLoading(e) {
    this.setData({
      loading: !this.data.loading
    })
  },

  onGotUserInfo(e) {
    console.log('e:', e)
    // console.log('e.detail.errMsg:',e.detail.errMsg)
    //console.log('e.detail.userInfo:',e.detail.userInfo)
    //console.log('e.detail.rawData:',e.detail.rawData)
    // var username = e.detail.userInfo.nickName
    // console.log('username', username)
    // var userimg = e.detail.userInfo.avatarUrl
    // console.log('userimg:', userimg)
    
    this.setData({
      userInfo: e.detail.userInfo,
      info: true
    })
    console.log('userInfo:', this.data.userInfo)

    // wx.showModal({
    //   title: '用户信息',
    //   content: this.data.userInfo.nickName +'是来自' + this.data.userInfo.country + '的' + this.data.userInfo.province,
    //   success: function (res) {
    //     if (res.confirm) {
    //       console.log('用户点击确定')
    //     } else {
    //       console.log('用户点击取消')
    //     }
    //   }
    // })

  },
  
})
