const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");





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

      server.listen(3000, "localhost", error => {
        console.log("服务器启动成功");
      });
    }
  }
);
