// pages/gameDetail/gameDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    url:'',
    row3Index:0,
    row3Title:[
      {id:0,name:'游戏'},
      {id:1,name:'社区'},
      {id:2,name:'百科'},
      {id:3,name:'头条'},
      {id:4,name:'攻略'},
      {id:5,name:'组队'},
    ],
  },
  changeRow3(e){
    if(e.currentTarget.dataset.index != this.data.row3Index){
      this.setData({
        row3Index: e.currentTarget.dataset.index
      })
    }
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