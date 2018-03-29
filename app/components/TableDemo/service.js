
/* eslint-disable */
let service = {

  getGrid() {
    const data = [];

    for (let i = 1; i <= 10; i++) {
      data.push({
        key: i,
        name: 'John Brown',
        age: `${i}2`,
        address: `New York No. ${i} Lake Park`,
        description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
      });
    }

    var url = "http://ec2-18-194-207-65.eu-central-1.compute.amazonaws.com:8080/rsAppsArm/auth/login/";
    var requestData = {
      login: "user1",
      password: "123123",
    };

    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json;charset=UTF-8'
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => {        
        return response.json();
      }).then(user => {
        console.log(user);
      });


    // console.log(response);

    // return data;
  },

};

export default service;
