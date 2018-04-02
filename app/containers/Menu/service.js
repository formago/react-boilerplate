import request from 'utils/request';
let localStorage;

// If we're testing, use a local storage polyfill
if (global.process && process.env.NODE_ENV === "test") {
  localStorage = require("localStorage");
} else {
  // If not, use the browser one
  localStorage = global.window.localStorage;
}


const service = {

  getMenu() {
    var token = localStorage.token;
    var url =
      'http://ec2-18-194-207-65.eu-central-1.compute.amazonaws.com:8080/rsAppsArm/auth/usermenu?atoken=' + token;   
    return fetch(url).then(responce=>responce.json());

    // let userInfo;
    // return fetch(url, {
    //   method: "GET",
    //   headers: new Headers({
    //     'Content-Type': 'application/json',
    //     "atoken": localStorage.token
    //   }),
    // }).then(response => {
    //   return response.json();
    // });

    // const data = [];
    // data.push(
    //   {
    //     menuId: 1,
    //     parentMenuId: 0,
    //     menuName: 'home',
    //     url: '/Cabinet/',
    //     icon: 'home',
    //     childList: [],
    //   },
    //   {
    //     menuId: 2,
    //     parentMenuId: 0,
    //     menuName: 'Documents',
    //     url: '/Cabinet/Documents',
    //     icon: 'file',
    //     childList: [],
    //   },
    //   {
    //     menuId: 3,
    //     parentMenuId: 0,
    //     menuName: 'Statements',
    //     url: '/Cabinet/Statements',
    //     icon: 'file-text',
    //     childList: [],
    //   },
    //   {
    //     menuId: 4,
    //     parentMenuId: 0,
    //     menuName: 'Testing',
    //     url: '',
    //     icon: 'file',
    //     childList: [
    //       {
    //         menuId: 5,
    //         parentMenuId: 0,
    //         menuName: 'Ant D',
    //         url: '/Cabinet/AntDPage',
    //         icon: 'file',
    //         childList: [],
    //       },
    //       {
    //         menuId: 6,
    //         parentMenuId: 0,
    //         menuName: 'Table',
    //         url: '/Cabinet/TablePage',
    //         icon: 'file',
    //         childList: [],
    //       },
    //     ],
    //   },
    // );

    // use for API (dont delete)
    // fetch('/rsAppsArm/auth/usermenu', {
    //   method: 'POST',
    //   data: {
    //     name: self.refs.name,
    //     job: self.refs.job,
    //   },
    // })
    // .then((response) => response.json());

    // return data;
  },

};

export default service;
