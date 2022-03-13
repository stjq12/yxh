//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    url: '',
    tapIndex: 0,
    lbPhoto: [{
        id: 0,
        src: '轮播图1.JPG'
      },
      {
        id: 0,
        src: '轮播图2.JPG'
      },
      {
        id: 0,
        src: '轮播图3.JPG'
      },
    ],
    xwList: [],
    mesList: []
  },
  changeTap(e) {
    if (e.currentTarget.dataset.index != this.data.tapIndex) {
      this.setData({
        tapIndex: e.currentTarget.dataset.index
      })
    }
  },
  slipTap(e) {
    this.setData({
      tapIndex: e.detail.current
    })
  },
  toDetail() {
    wx.navigateTo({
      url: '/pages/xwDetail/xwDetail',
    })
  },
  onLoad: function () {
    var that = this
    that.setData({
      url: getApp().globalData.url
    })
    wx.request({
      url: getApp().globalData.url + '/xwList',
      data: {},
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'POST',
      success: (res) => {
        console.log(res.data)
        that.setData({
          xwList: res.data
        })
      },
      fail: (res) => {},
    })
    wx.request({
      url: getApp().globalData.url + '/mesList',
      data: {},
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'POST',
      success: (res) => {
        console.log(res.data)
        that.setData({
          mesList: res.data
        })
      },
      fail: (res) => {},
    })
  }
})