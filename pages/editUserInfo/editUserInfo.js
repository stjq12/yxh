// pages/editUserInfo/editUserInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputList:[
      {title:'昵称',input:'请输入您的用户名'},
      {title:'真实姓名',input:'请输入您的姓名'},
      {title:'个性签名',input:'请输入您的个性签名'},
      {title:'手机号码',input:'请输入您的手机号码'},
    ],
    sexList: [
      '男', '女'
    ],
    sexIndex:0,
  },
  bindPickerChange: function(e) {
    this.setData({
      sexIndex: e.detail.value
    })
  },
  changeHead(){
    wx.chooseImage({
      count: 1,
      sourceType: ['album'],
    })
  },
  noSave :function () {
    wx.switchTab({
      url: '/pages/me/me',
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