// pages/regist/regist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  formSubmit: function (e) {
    var that = this;
    var userName = e.detail.value.userName;
    var pwd = e.detail.value.pwd;

    wx.request({
      url: getApp().globalData.url+'/yxhRegist',
      data: {
        'userName': userName,
        'pwd': pwd,
        'openid': wx.getStorageSync('openid')
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'POST',
      success: (res) => {
        if (res.data.code == 200) {
          wx.request({
            url: getApp().globalData.url+'/yxhRegistUserid',
            data: {
              'openid': wx.getStorageSync('openid')
            },
            header: {
              'content-type': 'application/x-www-form-urlencoded'
            },
            method: 'POST',
            success: (res) => {
              if (res) {                
                wx.setStorageSync('userid', res.data[0].userid)
                wx.showModal({
                  title: '提示',
                  content: '注册成功，您的账号是'+res.data[0].userid,
                  showCancel: false,
                  success (res) {
                    wx.redirectTo({
                      url: '/pages/login/login',
                    })
                  }
                })
              } else {
                wx.showToast({
                  title: '该微信号已被注册',
                  icon: 'none',
                  duration: 2000
                })
              }
            }
          })
        } else {
          wx.showToast({
            title: '该微信号已被注册',
            icon: 'none',
            duration: 2000
          })
        }
      }
    })
  },
  toLogin(){
    wx.redirectTo({
      url: '/pages/login/login',
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