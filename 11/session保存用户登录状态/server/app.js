const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Cookies = require('cookies');
var session = require('express-session');
var MongoDBStore = require('connect-mongodb-session')(session);


var store = new MongoDBStore({
  uri: 'mongodb://localhost:27020/db',
  collection: 'mySessions'
});
// Catch errors
store.on('error', function(error) {
  console.log(error);
});





mongoose.connect(
  "mongodb://localhost:27020/db",
  { useNewUrlParser: true, useUnifiedTopology: true },
  error => {
    if (error) {
      console.log(error);
      console.log("数据库链接失败");
    } else {
      const server = express();
    

      server.use(require('express-session')({
        secret: 'This is a secret',
        cookie: {
          maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
        },
        store: store,
        resave: true,
        saveUninitialized: true
      }));
 
      
      server.use(bodyParser.urlencoded({}));
      server.use(express.json());
      server.use("/api/user", require("./routers/userRouter"));
      server.use("/api/goods", require("./routers/goodsRouter"));
      server.use("/api/order", require("./routers/orderRouter"));

      server.listen(3000, "localhost", error => {
        console.log("服务器启动成功");
      });
    }
  }
);
