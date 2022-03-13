// pages/yxLib/yxLib.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tapIndex: 1,
    gameList:[],
    row3Index: 0,
    row3Title:[
      {id:0,name:'全部'},
      {id:1,name:'PC'},
      {id:2,name:'Steam'},
      {id:3,name:'Switch'},
      {id:4,name:'PS4'},
    ]
  },
  changeTap(e) {
    if(e.currentTarget.dataset.index != this.data.tapIndex){
      this.setData({
        tapIndex: e.currentTarget.dataset.index
      })
    }
  },
  slipTap(e){
    this.setData({
      tapIndex: e.detail.current
    })
  },
  changeRow3(e){
    if(e.currentTarget.dataset.index != this.data.row3Index){
      this.setData({
        row3Index: e.currentTarget.dataset.index
      })
    }
  },
  toGameDetail(){
    wx.navigateTo({
      url: '/pages/gameDetail/gameDetail',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    that.setData({
      url:getApp().globalData.url
    })
    wx.request({
      url: getApp().globalData.url+'/gameList',
      data: {},
      header: {'content-type': 'application/x-www-form-urlencoded'},
      method: 'POST',
      success: (res) => {
        console.log(res.data)
        that.setData({
          gameList:res.data
        })
      },
      fail: (res) => {},
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