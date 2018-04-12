import request from "utils/request";
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
      "http://ec2-18-194-207-65.eu-central-1.compute.amazonaws.com:8080/rsAppsArm/auth/usermenu?atoken=" +
      token;
    // return request(url);

    const data = [];
    // data.push(
    //   {
    //     menuId: 1,
    //     parentMenuId: 0,
    //     menuName: "home",
    //     url: "/Cabinet/",
    //     icon: "home",
    //     childList: []
    //   },
    //   {
    //     menuId: 2,
    //     parentMenuId: 0,
    //     menuName: "Documents",
    //     url: "/Cabinet/Documents",
    //     icon: "file",
    //     childList: []
    //   },
    //   {
    //     menuId: 3,
    //     parentMenuId: 0,
    //     menuName: "Statements",
    //     url: "/Cabinet/Statements",
    //     icon: "file-text",
    //     childList: []
    //   },
    //   {
    //     menuId: 4,
    //     parentMenuId: 0,
    //     menuName: "Testing",
    //     url: "",
    //     icon: "file",
    //     childList: [
    //       {
    //         menuId: 5,
    //         parentMenuId: 0,
    //         menuName: "Ant D",
    //         url: "/Cabinet/AntDPage",
    //         icon: "file",
    //         childList: []
    //       },
    //       {
    //         menuId: 6,
    //         parentMenuId: 0,
    //         menuName: "Table",
    //         url: "/Cabinet/TablePage",
    //         icon: "file",
    //         childList: []
    //       }
    //     ]
    //   }
    // );

    // return data;

    let userInfo;
    return fetch(url, {
      method: "GET",
      headers: new Headers({
        'Content-Type': 'application/json',
        "atoken": localStorage.token
      }),
    }).then(response => {
      return response.json();
    });
  }
};

export default service;
