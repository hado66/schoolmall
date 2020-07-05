import axios from "axios"

export default function request(config) {
  const instance = new axios.create({
    baseURL: "http://152.136.185.210:8000/api/n3",
    timeout: 5000
  });

  //请求拦截器
  instance.interceptors.request.use(config => {
    return config;
  }, error => {

  })

  //响应拦截器
  instance.interceptors.response.use(res => {
    return res.data
  }, error => {
    console.log(error)
  })

  return instance(config) //返回为Promise

}
