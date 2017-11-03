import React, { Component } from 'react';
import './App.css';
import ItemList from './ItemList' 


class List extends Component { 


  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    return (
       <tbody>

        {this.props.mylist
          .map((ml) => {

            return (
              <ItemList
                key={ml.date}
                id={ml.id}
                date={ml.date}
                start={ml.start}
                end={ml.end}
                totale={ml.totale}
                reason={ml.reason}
                link={ml.link}
              />
            )
          })
        }
        </tbody>
     )
  }

}

export default List;
