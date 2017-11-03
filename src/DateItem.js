import React, { Component } from 'react';
import './App.css';

import moment from 'moment';




export class DateItem extends Component { 


  constructor(props){
    super(props);
    this.state = {

    }
  } 

    

  render() {
    let date  = moment(this.props.date, 'DD/MM/YYYY').format('DD/MM/YYYY'); 
    return (
      <td>{date}</td>

     )
  }
}

export default DateItem;
