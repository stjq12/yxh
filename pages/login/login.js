// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },
  formSubmit: function (e) {
    var that = this;
    var log = e.detail.value.log;
    var pwd = e.detail.value.pwd;

    wx.request({
      url: getApp().globalData.url + '/yxhLogin',
      data: {
        'userid': log,
        'pwd': pwd
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'POST',
      success: (res) => {
        if (res.data.code == 200) {
          wx.showToast({
            title: '登录成功',
            icon: 'success',
            duration: 2000,
          })
          wx.setStorageSync('userid', log),
            wx.switchTab({
              url: '/pages/me/me',
            })
        } else {
          wx.showToast({
            title: '账号密码错误',
            icon: 'none',
            duration: 2000
          })
        }
      }
    })
  },
  toRegist(){
    wx.redirectTo({
      url: '/pages/regist/regist',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   

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