Page({
  data: {},
  Tianapi: function () {
    this.onLoad();
  },
  onLoad: function () {
    var that = this
    wx.request({
      url: 'https://api.tianapi.com/txapi/godreply/', //天行数据神回复接口
      data: {
        key: ''  //apikey请在https://www.tianapi.com中获得
      },
      success: function (res) {
        console.log(res.data.code)
        that.setData({
          title: res.data.newslist[0].title, 
          content: res.data.newslist[0].content
        })
      },
      fail: function (err) {
        console.log(err)
      }
    })
  }
})
