//获取应用实例
const app = getApp()
Page({
  data: {
    rootPath: 'index',
    title: '客户'
  },
  exFun: function (e) {
    this.setData({ rootPath: e.detail.rootPath, title: e.detail.title })
  },
  onShow: function () {
    wx.setNavigationBarTitle({
      title: this.data.title
    })
  }
})
