/* eslint-disable */

import React from 'react';
import { Table, Icon, Switch, Radio, Form, Divider } from 'antd';

import PropTypes from 'prop-types';
import { compose } from 'redux';
import { Link } from 'react-router-dom';

import injectSaga from 'utils/injectSaga';

import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import { connect } from 'react-redux';
import { getGridItems } from './actions';
import reducer from './reducer';
import saga from './saga';
import { makeSource } from './selectors';

import TableComponent from '../../../components/TableComponent';


const columns = [
  {
    title: 'ID',
    dataIndex: 'clientId',
    key: 'clientId',
    // width: 40,
    // render: (text) => <a href="#">{text}</a>,
  },
  {
    title: 'Name',
    dataIndex: 'clientName',
    key: 'clientName', 
  },
  {
    title: 'UNP',
    dataIndex: 'unp',
    key: 'unp',
  },
  {
    title: 'Type',
    dataIndex: 'identType',
    key: 'identType',
  },
  {
    title: 'Value',
    dataIndex: 'identValue',
    key: 'identValue',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Date Open',
    dataIndex: 'dateOpen',
    key: 'dateOpen',
  },
  {
    title: 'Date Close',
    dataIndex: 'dateClose',
    key: 'dateClose',
  }
  // {
  //   title: 'Action',
  //   key: 'action',
  //   width: 360,
  //   render: (text, record) => (
  //     <span>
  //       <a href="#">Action 一 {record.name}</a>
  //       <Divider type="vertical" />
  //       <a href="#">Delete</a>
  //       <Divider type="vertical" />
  //       <a href="#" className="ant-dropdown-link">
  //         More actions <Icon type="down" />
  //       </a>
  //     </span>
  //   ),
  // },
];


const items = [{
  "clientId": 2,
  "clientName": "BBG",
  "unp": "12345555",
  "identType": 1,
  "identValue": "12345555",
  "status": 1,
  "dateOpen": 1489276800000,
  "dateClose": 1746057600000
},
     {
  "clientId": 3,
  "clientName": "DELL Computers",
  "unp": "12345888",
  "identType": 1,
  "identValue": "12345888",
  "status": 2,
  "dateOpen": -783820800000,
  "dateClose": 2372803200000
},
     {
  "clientId": 5,
  "clientName": "BelSolution",
  "unp": "12345555",
  "identType": 1,
  "identValue": "12345555",
  "status": 1,
  "dateOpen": 1518825600000,
  "dateClose": 1618185600000
},
     {
  "clientId": 6,
  "clientName": "Microsoft",
  "unp": "12345888",
  "identType": 1,
  "identValue": "12345888",
  "status": 1,
  "dateOpen": 1520812800000,
  "dateClose": 29888438400000
},
     {
  "clientId": 7,
  "clientName": "BelSoft",
  "unp": "123455554",
  "identType": 1,
  "identValue": "12345555",
  "status": 1,
  "dateOpen": -4822761600000,
  "dateClose": -1668643200000
},
     {
  "clientId": 8,
  "clientName": "Catepiller",
  "unp": "12345888",
  "identType": 1,
  "identValue": "12345888",
  "status": 1,
  "dateOpen": 955756800000,
  "dateClose": 1552521600000
},
     {
  "clientId": 9,
  "clientName": "Apple",
  "unp": "12345222",
  "identType": 1,
  "identValue": "12345222",
  "status": 1,
  "dateOpen": 1489276800000,
  "dateClose": 1861920000000
},
     {
  "clientId": 10,
  "clientName": "Amazon",
  "unp": "12345222",
  "identType": 1,
  "identValue": "12345222",
  "status": 1,
  "dateOpen": 1704931200000,
  "dateClose": 2165356800000
},
     {
  "clientId": 11,
  "clientName": "Samsung",
  "unp": "12345222",
  "identType": 1,
  "identValue": "12345222",
  "status": 1,
  "dateOpen": -1645747200000,
  "dateClose": 7982150400000
},
     {
  "clientId": 13,
  "clientName": "Siemence",
  "unp": "12345222",
  "identType": 1,
  "identValue": "12345222",
  "status": 1,
  "dateOpen": 1205539200000,
  "dateClose": 1846972800000
},
     {
  "clientId": 14,
  "clientName": "Motorola",
  "unp": "12345222",
  "identType": 1,
  "identValue": "12345222",
  "status": 1,
  "dateOpen": 1491868800000,
  "dateClose": 1649721600000
},
     {
  "clientId": 15,
  "clientName": "Sony",
  "unp": "12345222",
  "identType": 1,
  "identValue": "12345222",
  "status": 1,
  "dateOpen": 1204502400000,
  "dateClose": -1645660800000
},
     {
  "clientId": 16,
  "clientName": "Panasonic",
  "unp": "12345222",
  "identType": 1,
  "identValue": "12345222",
  "status": 1,
  "dateOpen": 1250294400000,
  "dateClose": 1649721600000
},
     {
  "clientId": 17,
  "clientName": "Тракторный завод",
  "unp": "121212121212",
  "identType": 1,
  "identValue": "1212121212121",
  "status": 1,
  "dateOpen": 1262304000000,
  "dateClose": 1746057600000
},
     {
  "clientId": 18,
  "clientName": "Стройрынок \"Малиновка\"",
  "unp": "1111111111111",
  "identType": 1,
  "identValue": "1111111111111",
  "status": 1,
  "dateOpen": null,
  "dateClose": null
},
     {
  "clientId": 19,
  "clientName": "Технониколь",
  "unp": "1122334455",
  "identType": 1,
  "identValue": "1212121212121",
  "status": 2,
  "dateOpen": 1250294400000,
  "dateClose": -1645660800000
}];




export default class Clients extends React.Component {  
  // eslint-disable-line react/prefer-stateless-function


  render() {
    return (
      <div>
        <Link to="/">Go to Home Page</Link>
        <TableComponent columns={columns} gridSource={items}/>
      </div>
    );
  }
}
