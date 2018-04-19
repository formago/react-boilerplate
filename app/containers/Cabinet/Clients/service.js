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

    // baseURL = "http://localhost:3001";
    // listURL = "/clients";

    let url = `${baseURL}${listURL}?atoken=${accessToken}`;  

    let withUrlParameters = true;
    if (!withUrlParameters) {
      url = url.split("?")[0];
    }

    let myHeaders = {
      // "Content-type": "application/json",
      "atoken": localStorage.token
    };

    let parameters = [{
      key: "atoken",
      value: localStorage.token
    },
    {
      key: "Content-Type",
      value: "application/json"
    }];

    return  fetch(url, {
      method: "POST",    
      headers: myHeaders,
      body: null,
      // mode: "no-cors"      
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

    // return httpPost(url, parameters).then(function (response) {
    //   console.log(response)
    //   if (response.ok) {
    //     return response;
    //   }
    //   throw Error(response.statusText);
    // }).then(function (response) {
    //   return response.json();
    // }).catch(function (error) {
    //   console.log('Request failed:', error.message);
    // });

  },

};

export default service;
