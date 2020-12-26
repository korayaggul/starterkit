  
import axios from 'axios';
import { observable } from 'mobx';

const BASE_URL = 'https://jsonplaceholder.typicode.com';
const BASE_LANGUAGE = '';
const BASE_API_URL = `${BASE_URL}${BASE_LANGUAGE || ''}`;

export default class AppStore {
  constructor(store) {
    this.store = store;
  }

  request = (method = 'GET', path = null, body = null, headers = null) => {
    let defaultHeaders = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };

    if (headers) {
      defaultHeaders = Object.assign(defaultHeaders, headers);
    }

    const url = BASE_API_URL + (path || '');

    const configuration = {
      method,
      url,
      data: body,
      headers: defaultHeaders,
    };

    return new Promise(async (resolve, reject) => {
      await axios(configuration)
        .then(async (response) => {
          resolve(response);
        })
        .catch((error) => {
          console.log('appStore ERROR: ', error);

          reject(error);
        });
    });
  };
}