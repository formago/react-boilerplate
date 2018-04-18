/* eslint-disable */
const keys = require('../../../config/endpoints');
import { httpGet, httpPost } from 'utils/httpRequest';
import parameters from './parameters';


let localStorage;
if (global.process && process.env.NODE_ENV === "test") {
  localStorage = require("localStorage");
} else {
  localStorage = global.window.localStorage;
}

let service = {

  getGrid() {

    let baseURL = keys.baseURL;
    let listURL = keys.clients.list;
    let accessToken = localStorage.token;

    console.log(parameters);
    
    // let url = `${baseURL}${listURL}?atoken=${accessToken}`;

    let url = `http://localhost:3004/clients`;

    let myHeaders = {
      'Content-Type': 'application/json',
      "atoken": localStorage.token
    };

    return fetch(url, {
      method: "GET",
      headers: myHeaders,
      // mode: 'no-cors'
    }).then(function (response) {
      if (response.ok) {
        return response;
      }
      throw Error(response.statusText);
    }).then(function (response) {
      return response.json();
    }).catch(function (error) {
      console.log('Request failed:', error.message);
    });

  },

};

export default service;
