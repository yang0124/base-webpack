const mongoose = require('mongoose');

const User = mongoose.model('user', mongoose.Schema({
  username: String,
  password: String
}));

module.exports = {
  // 注册
  async register({username, password}){
    try {
      const existUser = await User.findOne({username});
      if(existUser){
        return Promise.reject('该用户已存在');
      }
      const user = new User({username, password});
      await user.save();
      return Promise.resolve();
    } catch (error) {
      return Promise.reject();
    }
  },

  // 登录
  async login({username, password}){
    try {
      const user = await User.findOne({username, password});
      if(user){
        return Promise.resolve({userid: user._id, username: user.username});
      }else{
        return Promise.reject('用户名或密码错误');
      }
    } catch (error) {
      return Promise.reject();
    }
  },

  // 检查用户
  async checkUser(userid){
    console.log(userid);
    try {
      const result = await User.findById(userid);
      console.log(result);
      if(result){
        return Promise.resolve({userid: result._id, username: result.username});
      }else{
        return Promise.reject();
      }
    } catch (error) {
      return Promise.reject();
    }
    
  }
}
