import { API_HOST } from '../../config/env';

class Http {
  constructor (config) {
    this.getConfig = {
      method: 'get',
      ...config,
    };

    this.postConfig = {
      method: 'post',
      ...config,
    };

    this.putConfig = {
      method: 'put',
      ...config,
    };

    this.deleteConfig = {
      method: 'delete',
      ...config,
    };

    this.patchConfig = {
      method: 'PATCH',
      ...config,
    };

    this.uploadConfig = {
      ...config,
      method: 'post',
      headers: {
        Accept: 'application/json',
      },
    };
  }

  get = uri => (
    fetch(`${API_HOST}${uri}`, this.getConfig)
      .then(response => response.json())
  );

  post = (uri, data) => (
    fetch(`${API_HOST}${uri}`, Object.assign(this.postConfig, {
      body: JSON.stringify(data),
    }))
      .then(response => response.json())
  );

  put = (uri, data) => (
    fetch(`${API_HOST}${uri}`, Object.assign(this.putConfig, {
      body: JSON.stringify(data),
    }))
      .then(response => response.json())
  );

  delete = uri => (
    fetch(`${API_HOST}${uri}`, this.deleteConfig)
      .then(response => response.json())
  );

  patch = (uri, data) => (
    fetch(`${API_HOST}${uri}`, Object.assign(this.patchConfig, {
      body: JSON.stringify(data),
    }))
      .then(response => response.json())
  );
}

const http = new Http({
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Credentials': 'true',
    'Authorization': localStorage.getItem('userToken')
  },
  mode: 'cors',
});

export default http;
