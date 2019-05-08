Page({
  data: {

  },
  //事件处理函数
  toCheckboxRadioView: function () {
    wx.navigateTo({
      url: '../checkboxradioview/checkboxradioview'
    })
  },
  toPickerViewView: function () {
    wx.navigateTo({
      url: '../pickerviewview/pickerviewview'
    })
  }, 
  toPickerView: function () {
    wx.navigateTo({
      url: '../pickerview/pickerview'
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
