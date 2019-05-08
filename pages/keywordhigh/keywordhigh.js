//logs.js
const util = require('../../utils/util.js')
//获取应用实例
const app = getApp();
const getInf = (str, key) => str.replace(new RegExp(`${key}`, 'g'), `%%${key}%%`).split('%%');

Page({
  data: {
    keyName: null,
    listData: [
      { "id": "1", "fund_id": "150084", "fund_name": "广发深证100指数分级B" },
      { "id": "2", "fund_id": "450011", "fund_name": "国富研究精选混合" },
      { "id": "3", "fund_id": "000008", "fund_name": "嘉实中证500ETF联接" },
      { "id": "4", "fund_id": "050021", "fund_name": "博时深证基本面200ETF联接" },
      { "id": "5", "fund_id": "150064", "fund_name": "长盛同瑞A" },
      { "id": "6", "fund_id": "150136", "fund_name": "国富中证100指数增强分级B" },
      { "id": "7", "fund_id": "150049", "fund_name": "南方新兴消费收益" },
    ], // 内容原始数组
    listDataCopy: [], // 用来搜索的复制数组
    // 为什么要用两个数组就是，原始数组是不能改变的，我们每次输入关键字都要拿原始数组来处理，然后拆分成需要的数据去展示
  },

  onReady: function (e) {
    var that = this;
  },
  onLoad: function (e) {
    var that = this;
    that.searchTap();
  },
  // 输入框正在输入
  bindInput: function (e) {
    var that = this;
    that.setData({
      keyName: that.trim(e.detail.value)
    })
    that.searchTap();
  },
  // 搜索关键字
  searchTap: function () {
    var that = this;
    that.setData({
      listDataCopy: that.data.listData
    })
    var data = that.data.listData;
    var newData = that.data.listDataCopy;
    for (var i = 0; i < data.length; i++) {
      var dic = data[i];
      var newDic = newData[i];
      var fund_name = dic["fund_name"];
      newDic["fund_name"] = getInf(fund_name, that.data.keyName);
      var fund_id = dic["fund_id"];
      newDic["fund_id"] = getInf(fund_id, that.data.keyName);
    }
    that.setData({
      listDataCopy: newData,
    })
  },
  // 去除首尾的空格
  trim: function (s) {
    return s.replace(/(^\s*)|(\s*$)/g, "");
  }
})
