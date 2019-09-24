var types
// const utils = require('../../utils/util.js')
var app = getApp()
Component({
  options: {
    multipleSlots: true
  },
  properties: {
    rootPath: String
  },
  data: {
    url: '',
    showMore: false,
    imgUrl: '/images/'
  },
  methods: {
    switchMian: function(e) {
      let pathStr = e.target.dataset.path
      
      if (pathStr != this.data.rootPath) {
        this.triggerEvent('rootPath', { rootPath: pathStr, title: e.target.dataset.title })
      }

      wx.setNavigationBarTitle({
        title: e.target.dataset.title
      })
    },
  }
})