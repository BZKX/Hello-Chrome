import qs from 'qs';
import axios from 'axios';
// axios.defaults.withCredentials =false;

// axios.create({
//     baseURL:'http://192.168.11.106:7040'
// });
//
// console.log(axios);
// let headers= {
//     'Access-Control-Allow-Origin': '*',
//     'Content-Type': 'application/json',
// };

axios.defaults.timeout = 0;


window.axios = axios;

export default {
  get: (url, params, config = {}) => {
    console.log(3, url);
    return window.axios({
      method: 'get',
      url,
      params: {
        ...params,
      },
      headers: config.headers || {},
    }).then(res => {
      console.log('http-res==>', res);
      return res;
    }).catch(err => {
      return err;
    });
  },
  getImg: (url, params, config = {}) => {
    return window.axios({
      method: 'get',
      url,
      params: {
        ...params,
      },
      responseType: 'arraybuffer',
      // responseType: "blob",//改变接收的值类型
      headers: config.headers || {},
    }).then(res => {
      if (res.headers['content-type'] == 'application/json;charset=UTF-8') {
        return { err: true, errcode: 1, errmsg: '获取图片错误' };
      } else {
        return res;
      }
    }).catch(err => {
      return err;
    });
  },
  getFile: (url, params, config = {}) => {
    return window.axios({
      method: 'get',
      url,
      params: {
        ...params,
      },
      responseType: 'arraybuffer',
      // responseType: "blob",//改变接收的值类型
      headers: config.headers || {},
    }).then(res => {
      return res;
    }).catch(err => {
      return err;
    });
  },
  postGetImg: (url, data, config = {}) => {
    let param = new FormData();
    for (let key in data) {
      param.append(key, data[key]);
    }
    return window.axios({
      method: 'post',
      url,
      data: param,
      headers: config.headers || {},
      responseType: 'arraybuffer',
    }).then(res => {
      return res;
    }).catch(err => {
      return err;
    });
  },
  postFile: (url, data, config = {}) => {
    return window.axios({
      method: 'post',
      url,
      headers: config.headers || {},
      data: data,
    }).then(res => {
      return res;
    }).catch(err => {
      return Promise.reject(err);
    });
  },
  post: (url, data, config = {}) => {
    return window.axios({
      method: 'post',
      url,
      data: qs.stringify({
        ...data,
      }),
      headers: config.headers || {},
    }).then(res => {
      return res;
    }).catch(err => {
      return Promise.reject(err);
    });
  },
  //提交JSON格式--data为JSON
  postJSON: (url, data, config = {}) => {
    return window.axios({
      method: 'post',
      url,
      data: JSON.stringify(data),
      headers: config.headers || {},
    }).then(res => {
      return res;
    }).catch(err => {
      return Promise.reject(err);
    });
  },
  // form-data 格式
  postForm: (url, data, config = {}) => {
    let param = new FormData();
    for (let key in data) {
      param.append(key, data[key]);
    }
    return window.axios({
      method: 'post',
      url,
      data: param,
      headers: config.headers || {},
    }).then(res => {
      return res;
    }).catch(err => {
      return err;
    });
  },
  // form-data img 格式
  postImg: (url, config = {}) => {
    return window.axios({
      method: 'post',
      url,
      headers: config.headers || {},
    }).then(res => {
      return res;
    }).catch(err => {
      return err;
    });
  },

  put: (url, data, config = {}) => {
    return window.axios({
      method: 'put',
      url,
      data: qs.stringify({
        ...data,
      }),
      headers: config.headers || {},
    }).then(res => {
      return res;
    }).catch(err => {
      return err;
    });
  },
  putPost: (url, data, config = {}) => {
    let param = new FormData();
    for (let key in data) {
      param.append(key, data[key]);
    }
    return window.axios({
      method: 'put',
      url,
      data: param,
      headers: config.headers || {},
    }).then(res => {
      return res;
    }).catch(err => {
      return err;
    });
  },
  delForm: (url, data, config = {}) => {
    let param = new FormData();
    for (let key in data) {
      param.append(key, data[key]);
    }
    return window.axios({
      method: 'delete',
      url,
      data: param,
      headers: config.headers || {},
    }).then(res => {
      return res;
    }).catch(err => {
      return err;
    });
  },
  del: (url, data, config = {}) => {
    return window.axios({
      method: 'delete',
      url,
      data: qs.stringify({
        ...data,
      }),
      headers: config.headers || {},
    }).then(res => {
      return res;
    }).catch(err => {
      return err;
    });
  },
  delByArr: (url, arr, config = {}) => {
    return window.axios({
      method: 'delete',
      url,
      data: arr,
      headers: config.headers || {},
    }).then(res => {
      return res;
    }).catch(err => {
      return err;
    });
  },
  delJSON: (url, data, config = {}) => {
    return window.axios({
      method: 'delete',
      url,
      data: data,
      headers: config.headers || {},
    }).then(res => {
      return res;
    }).catch(err => {
      return err;
    });
  },
};
