//方法一：
// const pageData = {}
// for (let i = 1; i < 7; i++) {
//   (function (index) {
//     pageData['slider' + index + 'change'] = function (e) {
//       console.log('slider' + index +'change'+ '发生 change 事件，携带值为', e.detail.value)
//     }
//   }(i))
// }
// Page(pageData)

//方法二：
Page({
  slider2change: function(e) {
    console.log('slider2change发生 change 事件，携带值为', e.detail.value)
    },
  slider3change: function (e) {
    console.log('e',e)
    console.log('slider3change change 事件，携带值为', e.detail.value)
  },
  slider4change: function (e) {
    console.log('slider4change发生 change 事件，携带值为', e.detail.value)
  },
  slider5change: function (e) {
    console.log('slider5change发生 change 事件，携带值为', e.detail.value)
  },
  slider6change: function (e) {
    console.log('slider6change发生 change 事件，携带值为', e.detail.value)
  }

})