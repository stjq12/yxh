App({
  onLaunch: function () {
    //信息初始化
    var that = this
    var user = wx.getStorageSync('user') || {};
    var userInfo = wx.getStorageSync('userInfo') || {};
    if ((!user.openid || (user.expires_in || Date.now()) < (Date.now() + 600)) && (!userInfo.nickName)) {
      wx.login({
        success: function (res) {
          if (res.code) {
            wx.getUserInfo({
              success: function (res) {
                var obj_userInfo = {};
                obj_userInfo.avatarUrl = res.userInfo.avatarUrl;
                obj_userInfo.nickName = res.userInfo.nickName;
                console.log(obj_userInfo);
                wx.setStorageSync('userInfo', obj_userInfo);
              }
            });
            var gbData = that.globalData; //这里存储了appid、secret、token串  
            var url = 'https://api.weixin.qq.com/sns/jscode2session?appid=' + gbData.appid + '&secret=' + gbData.secret + '&js_code=' + res.code + '&grant_type=authorization_code';
            wx.request({
              url: url,
              data: {},
              method: 'GET',
              // header: {}, // 设置请求的 header  
              success: function (res) {
                var obj = {};
                obj.openid = res.data.openid;
                obj.expires_in = Date.now() + res.data.expires_in;
                obj.session_key = res.data.session_key;
                // console.log(obj);
                wx.setStorageSync('session_key', res.data.session_key);
                wx.setStorageSync('openid', res.data.openid);
              }
            });
          } else {
            console.log('获取用户登录态失败！' + res.errMsg)
          }
        }
      });
    }
  },
  onShow: function () {

  },
  getSystemInfo: function () {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.globalData.systemInfo = res;
      }
    });
  },

  globalData: {
    userInfo: null,
    systemInfo: null, //客户端设备信息
    // appid: 'wxbb673066c91f6ed4',
    // secret: '7abf23869a0023a0de5b192ea68b4e4b',

    appid: 'wxa0a1b9b011cddaa2',
    secret: 'cb53b486acbf55505c9be5cc2dd53e05',
    url: 'http://localhost:8080/WEBPRO_18'
    // url: 'http://172.20.10.13:8080/WEBPRO_18'
  }
})