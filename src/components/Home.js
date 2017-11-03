import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import List from './../List' 

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            mylist: [],
            myCurrentList : [],
            to : null,  
            from : null
        };
    }

    componentDidMount() {

        axios.get('http://localhost:3000', {

        }).then(res => {
            console.log(res.data.map(obj => obj));
            const mylist = res.data.map(obj => obj);

            this.setState({ mylist });
            this.setState({ 'myCurrentList' : mylist });
        }).catch(err => {
            console.log(err);
          });
    }

    searchDate(row){
      let d = this.event.target.value;
      let id = this.event.target.id;

      let rowDate = moment(row['date'], 'DD/MM/YYYY');

      let dateSearch = moment(d,'DD/MM/YYYY');

      if(d.length === 10 && dateSearch.isValid() && !Number.isNaN(Date.parse(d))) {
          if(id === 'from') {
              if(rowDate.isValid() && rowDate.diff(dateSearch, 'days') >= 0) {
                  this.setState({
                      'from' : dateSearch
                  });

                  if((this.state.to && this.state.to.diff(rowDate,'days') >= 0) || !this.state.to) {
                      return row;
                  }
              }
          } else if (id === 'to') {
              if(rowDate.isValid() && dateSearch.diff(rowDate, 'days') >= 0) {
                  this.setState({
                      'to' : dateSearch
                  });

                  if((this.state.from && rowDate.diff(this.state.from,'days') >= 0) || !this.state.from) {
                      return row;
                  }
              }
          }
      } else {
          if(id === 'from') {
              this.setState({
                  'from' : null
              });
              if (this.state.to && this.state.to.diff(rowDate,'days') >= 0 || !this.state.to) {
                  return row;
              }
          } else if(id === 'to') {
              this.setState({
                  'to' : null
              });
              if (this.state.from && rowDate.diff(this.state.from,'days') >= 0 || !this.state.from) {
                  return row;
              }
          }
      }
    }

      handleSearch = (event) => {
          let mylist = this.state.mylist;
          this.event = event;
          mylist = mylist.filter(this.searchDate,this);
          this.setState({ 'myCurrentList' : mylist });
      }

        render() {
          return (

            <div>
              <input type="text" maxLength="10" placeholder="From: eg 05/02/2017" id='from' onChange={this.handleSearch} />
              <input type="text" maxLength="10" placeholder="To : eg 05/02/2017" id='to' onChange={this.handleSearch} />
              <table className='table table-bordered'>
                <thead>
                <tr>
                  <th>Date</th>
                  <th>Heure Début</th>
                  <th>Heure Fin</th>
                  <th>Totale</th>
                  <th>Reason</th>
                  <th>Link</th>
                </tr>
                </thead>

                <List mylist={this.state.myCurrentList}
                ref={(component) => {


                }}/>
              </table>
            </div>
            );
        }
      }

export default Home;
