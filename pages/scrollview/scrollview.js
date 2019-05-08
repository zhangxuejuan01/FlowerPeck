
Page({
  data: {
    imgUrls: [
      '../images/icon1.jpg',
      '../images/icon2.jpg',
      '../images/icon3.jpg'
    ],
    scrollTop: 0,
    toView:""
  },
  // 返回顶部方法一：要结合scroll-view使用
  goTop: function (e) {
    this.setData({
      scrollTop: 0
    })
  },
  scroll: function (e) {
    // 容器滚动时将此时的滚动距离赋值给 this.data.scrollTop
    console.log('e.detail', e.detail)
    if (e.detail.scrollTop > 500) {
      this.setData({
        floorstatus: true
      });
    } else {
      this.setData({
        floorstatus: false
      });
    }
  },

  // 滚动到指定的某位置
  toNav: function (e) {
    this.setData({
      toView: e.currentTarget.dataset.id
    }) 
    //console.log('toView', this.data.toView)

//加上下面这一段代码，应该是滚动会顺畅一点，而要注意的是要设置scroll-view的高度为：style="height: 100vh;",不然会出现闪一下的卡顿现象；如果不加这一段代码scroll-view设置为style="position: absolute; left: 0; top:0; bottom: 0; right: 0;"或者style="height: 100vh;"都行，不会出现闪一下那种情况
    const query = wx.createSelectorQuery()
   // console.log('query', query)
    query.select('#' + this.data.toView).boundingClientRect()
    query.selectViewport().scrollOffset()
    query.exec(function (res) {
      //console.log('res',res)
      wx.pageScrollTo({
        scrollTop: 0,
        duration: 300
      })
      // res[0].top       // #the-id节点的上边界坐标
      // res[1].scrollTop // 显示区域的竖直滚动位置
    })
  },


  //返回顶部方法二：不要结合scroll-view使用，去掉scroll-view
  // goTop() { 
  //   wx.pageScrollTo({
  //     scrollTop: 0,
  //     duration: 300
  //   })
  // },
  
  // onPageScroll: function (e) {
  //    console.log('e的值：',e)
  //   console.log('滚动位置：',e.scrollTop)
  //   if (e.scrollTop > 100) {
  //     this.setData({
  //       floorstatus: true
  //     });
  //   } else {
  //     this.setData({
  //       floorstatus: false
  //     });
  //   }
  // },
    
})