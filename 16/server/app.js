const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");

mongoose.connect(
  "mongodb://localhost:27020/db",
  { useNewUrlParser: true, useUnifiedTopology: true },
  error => {
    if (error) {
      console.log(error);
      console.log("数据库链接失败");
    } else {
      const server = express();

      server.use(bodyParser.urlencoded({}));
      server.use(express.json());
      server.use("/api/user", require("./routers/userRouter"));
      server.use("/api/goods", require("./routers/goodsRouter"));
      server.use("/api/order", require("./routers/orderRouter"));

      server.get("/", (req, res) => {
        res.sendFile(path.resolve(__dirname, "./www/index.html"));
      });

      // server.use("/css", express.static("./www/css"));
      // server.use("/js", express.static("./www/js"));

      server.use("/static", express.static("./www"));

      // 如果路由为history才需要配置其他未匹配上的路径响应index.html
      // 如果是hash模式，则不需要配置
      // server.use("*", (req, res, next)=>{
      //   res.sendFile(path.resolve(__dirname, "./www/index.html"));
      // });

      server.listen(3000, "localhost", error => {
        console.log("服务器启动成功");
      });
    }
  }
);
