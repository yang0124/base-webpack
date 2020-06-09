import axios from "axios";
import { notification as Notification } from "ant-design-vue";

class HttpRequest {
  get(url, config) {
    return this.request({ method: "GET", url, ...config });
  }
  post(url, config) {
    return this.request({ method: "POST", url, ...config });
  }

  // 构建请求
  request(config) {
    // 1.创建请求实例
    const instance = axios.create();
    // 2.添加拦截
    this.interceptor(instance);
    // 3.发送请求
    return instance(config);

    // 等价于 axios.request({method: 'POST'})  axios.get()   axios.post()
  }

  // 拦截器
  interceptor(instance) {
    // 拦截请求
    instance.interceptors.request.use(
      config => {
        //jwt 添加token
        config.baseURL = "http://localhost:8080";
        return config;
      },
      error => {
        this.notification(error.code);
        return Promise.reject(error);
      }
    );

    // 拦截响应
    instance.interceptors.response.use(
      response => {
        const {
          data: { code, message }
        } = response;
        console.log(response, code);
        if (code === 0) {
          //成功
          return Promise.resolve(response);
        } else {
          //失败
          this.notification(code, message);
          return Promise.reject();
        }
      },
      error => {
        this.notification(error.code);
        return Promise.reject(error);
      }
    );
  }

  // 错误消息提醒
  notification(message = "发生异常", description = "") {
    Notification.error({
      message: "错误码：" + message,
      description
    });
  }
}

export default HttpRequest;
