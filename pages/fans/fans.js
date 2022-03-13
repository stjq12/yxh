// pages/fans/fans.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    url:'',
    fansList:[
      {name:'我不用微信',introduction:'我的我不同微信但也用微信',pic:'11.png'},
      {name:'我不用支付宝',introduction:'我的我不同支付宝但也用微信',pic:'22.png'},
      {name:'我不用微博',introduction:'我的我不同微信但也用微信',pic:'33.png'},
      {name:'我不用手机',introduction:'我的我不同微信但也用微信',pic:'44.png'},
      {name:'我不用饿了么',introduction:'我的我不同微信但也用微信',pic:'55.png'},
      {name:'我不用微信',introduction:'我的我不同微信但也用微信',pic:'11.png'},
      {name:'我不用支付宝',introduction:'我的我不同支付宝但也用微信',pic:'22.png'},
      {name:'我不用微博',introduction:'我的我不同微信但也用微信',pic:'33.png'},
      {name:'我不用手机',introduction:'我的我不同微信但也用微信',pic:'44.png'},
      {name:'我不用饿了么',introduction:'我的我不同微信但也用微信',pic:'55.png'},
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    that.setData({
      url:getApp().globalData.url
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})