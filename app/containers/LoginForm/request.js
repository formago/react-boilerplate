const request = {
  /**
   * Pretends to post to a remote server
   * @param  {string}  endpoint The endpoint of the server that should be contacted
   * @param  {?object} data     The data that should be transferred to the server
   */
  post(endpoint, data) {
    switch (endpoint) {
      case "/login":
        var url =
          "http://ec2-18-194-207-65.eu-central-1.compute.amazonaws.com:8080/rsAppsArm/auth/login/";
        var requestData = {
          login: "user1",
          password: "123123"
        };
        let userInfo;
        return fetch(url, {
          method: "POST",
          headers: {
            "content-type": "application/json;charset=UTF-8"
          },
          body: JSON.stringify(requestData)
        }).then(response => {
          return response.json();
        });
      case "/register":
        return server.register(data.username, data.password);
      case "/logout":
        return server.logout();
      default:
        break;
    }
  }
};

export default request;
