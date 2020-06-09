const { Router } = require("express");
const { register, login, checkUser } = require("../model/user");
var jwt = require("jsonwebtoken");

const router = new Router();

// 注册
router.post("/register", (req, res) => {
  const { username, password } = req.body;
  console.log("注册", password, username);
  if (username && password) {
    register({ username, password })
      .then(() => {
        res.json({ code: 0, message: "注册成功" });
      })
      .catch((error = "异常错误") => {
        res.json({ code: -2, message: "注册失败," + error });
      });
  } else {
    res.json({
      code: -1,
      message: "用户名或密码不能为空"
    });
  }
});

// 登录
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username && password) {
    login({ username, password })
      .then(data => {
        //登录成功，给客户端token令牌
        const token = jwt.sign(data, "hello world", {
          expiresIn: '1h'
        });
        res.json({ code: 0, message: "登录成功", data: { token } });
      })
      .catch((error = "异常错误") => {
        res.json({ code: -2, message: "登录失败," + error });
      });
  } else {
    res.json({
      code: -1,
      message: "用户名或密码不能为空"
    });
  }
});

// 退出
router.get("/logout", (req, res) => {});

// 验证用户是否登录
router.get("/check_login", (req, res) => {
  let token = req.headers.authorization;
  if (token) {
    token = token.split(" ")[1];
    //对令牌进行解密
    try {
      const payload = jwt.verify(token, "hello world");
      if (payload.username) {
        res.json({ code: 0 });
      } else {
        res.json({ code: -1 });
      }
    } catch (error) {
      res.json({ code: -1 });
    }
  }else{
    res.json({ code: -1 });
  }
});

module.exports = router;
