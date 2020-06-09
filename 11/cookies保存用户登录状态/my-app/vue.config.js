module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3000"
        // 拦截器
        // bypass: function(req, res) {
        //   if (req.headers.accept.indexOf("html") !== -1) {
        //     console.log("Skipping proxy for browser request.");
        //     return "/index.html";
        //   } else {
        //     console.log(req.url);
        //     if (req.url === "/api/goods") {
        //       res.json(require("./mock/goods"));
        //     }
        //     res.json({ code: 1, message: "没有权限" });
        //   }
        // }
      }
    }
  }
};
