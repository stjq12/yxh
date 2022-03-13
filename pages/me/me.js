// pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: [],

    row3List: [{
        icon: '绑定.png',
        name: '绑定游戏平台'
      },
      {
        icon: '任务.png',
        name: '我的任务'
      },
      {
        icon: '商城.png',
        name: '积分商城'
      },
      {
        icon: '订单.png',
        name: '历史订单'
      },
      {
        icon: '社区.png',
        name: '我的社区'
      },
      {
        icon: '订单.png',
        name: '创作中心'
      },
      {
        icon: '反馈.png',
        name: '反馈',
        operate:'feedback'
      },
      {
        icon: '任务.png',
        name: '小程序设置'
      },
    ]
  },
  edit() {
    wx.redirectTo({
      url: '/pages/editUserInfo/editUserInfo',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(!wx.getStorageSync('userid')){
      wx.redirectTo({
        url: '/pages/login/login',
      })
    }
    wx.request({
      url: getApp().globalData.url + '/yxhUserInfo',
      data: {
        'userid': wx.getStorageSync('userid')
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'POST',
      success: (res) => {
        this.setData({
          userInfo: res.data[0]
        })
        console.log(this.data.userInfo)
      }
    })
  },
  toOperate(e){
    var operate = e.currentTarget.dataset.operate
    if(operate == 'feedback'){
      wx.navigateTo({
        url: '/pages/feedback/feedback',
      })
    }
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