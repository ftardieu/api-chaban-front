import React, { Component } from 'react';
import './App.css';
import DateItem from './DateItem' 
import { Link } from 'react-router-dom';




class ItemList extends Component { 


  constructor(props){
    super(props);
    this.state = {

    }
  }


  render() {
     const { id ,date , start , end , totale,reason ,link  } = this.props;
    return (
      <tr>
        <DateItem 
          date={date}
         />
        <td>{start}</td> 
        <td>{end}</td>
        <td>{totale?'Oui':'Non'}</td>
        <td>{reason}</td>
        <td><Link to={'/'+id} className="nav-link">link</Link></td>
      </tr>
     )
  }
}

export default ItemList;
