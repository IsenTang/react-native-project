import axios from 'axios';
import qs from 'qs';
import jsonp from 'jsonp';
import lodash from 'lodash';
import pathToRegexp from 'path-to-regexp';


const CORS = [];
const fetch = (options) => {
  let {
    data,
    url,
  } = options;
  const {
    method,
    fetchType,
  } = options;

  if (lodash.isEmpty(data)) { data = {}; }

  const cloneData = lodash.cloneDeep(data);

  try {
    let domin = '';
    if (url.match(/[a-zA-z]+:\/\/[^/]*/)) {
      const { 0: val } = url.match(/[a-zA-z]+:\/\/[^/]*/);
      domin = val;
      url = url.slice(domin.length);
    }
    const match = pathToRegexp.parse(url);
    url = pathToRegexp.compile(url)(data);

    match.forEach((item) => {
      if (item instanceof Object && item.name in cloneData) {
        delete cloneData[item.name];
      }
    });
    url = domin + url;
  } catch (e) {
    console.log(e);
  }

  if (fetchType === 'JSONP') {
    return new Promise((resolve, reject) => {
      jsonp(url, {
        param: `${qs.stringify(data)}&callback`,
        name: `jsonp_${new Date().getTime()}`,
        timeout: 4000,
      }, (error, result) => {
        if (error) {
          reject(error);
        }
        resolve({ statusText: 'OK', status: 200, data: result });
      });
    });
  }

  switch (method.toLowerCase()) {
    case 'get':
      return axios.get(url, {
        params: cloneData,
      });
    case 'delete':
      return axios.delete(url, {
        data: cloneData,
      });
    case 'post':
      return axios.post(url, cloneData);
    case 'put':
      return axios.put(url, cloneData);
    case 'patch':
      return axios.patch(url, cloneData);
    default:
      return axios(options);
  }
};

export default function request(options) {
  if (options.url && options.url.indexOf('//') > -1) {
    const origin = `${options.url.split('//')[0]}//${options.url.split('//')[1].split('/')[0]}`;
    if (window.location.origin !== origin) {
      if (CORS && CORS.indexOf(origin) > -1) {
        options.fetchType = 'CORS';
      } else {
        options.fetchType = 'JSONP';
      }
    }
  }

  return fetch(options).then((response) => {
    const { statusText, status } = response;
    let { data } = response;
    if (data instanceof Array) {
      data = {
        list: data,
      };
    }
    return {
      success: true,
      message: statusText,
      statusCode: status,
      ...data,
    };
  }).catch((error) => {
    const { response } = error;
    let msg;
    let statusCode;
    if (response && response instanceof Object) {
      const { data, statusText } = response;
      statusCode = response.status;
      msg = data.message || statusText;
    } else {
      statusCode = 600;
      msg = error.message || 'Network Error';
    }
    return { success: false, statusCode, message: msg };
  });
}
