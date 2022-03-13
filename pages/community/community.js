// pages/community/community.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    url:'',
    tapIndex: 1,
    communityMesList:[],
    row3Index: 0,
    row3Title:[
      {id:0,name:'推荐'},
      {id:1,name:'全部'},
      {id:2,name:'PC游戏'},
      {id:3,name:'盒友'},
      {id:4,name:'手游'},
    ],
    row3List:[
      {photo:'1.png'},{photo:'2.png'},{photo:'3.png'},{photo:'4.png'},{photo:'5.png'},
      {photo:'6.png'},{photo:'7.png'},{photo:'8.png'},{photo:'9.png'}
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
  toDetail(){
    wx.navigateTo({
      url: '/pages/comDetail/comDetail',
    })
  },
  onLoad: function (options) {
    var that = this
    that.setData({
      url:getApp().globalData.url
    })
    wx.request({
      url: getApp().globalData.url+'/communityMesList',
      data: {},
      header: {'content-type': 'application/x-www-form-urlencoded'},
      method: 'POST',
      success: (res) => {
        that.setData({
          communityMesList:res.data
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