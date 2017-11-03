import React, { Component } from 'react';
import { Button } from 'react-materialize'
import axios from 'axios';
import moment from 'moment';

class Horaire extends Component {

  constructor(props) {
    super(props);

    this.state = {
      mylist : [],
      showProgressBar : true,
      id : parseInt(props.match.params.id),
        previous : Number,
        next : Number
      }

    }

    componentDidMount() {
      this.setPageNavigation();
      this.loadData();
    }

    setPageNavigation() {
      this.setPreviousPage();
      this.setNextPage();
    }

    setPreviousPage() {
      if(this.state.id === 1) {
        this.setState({previous: 1})
      } else {
        this.setState({previous: this.state.id - 1})
      }
    }

    setNextPage() {
      if(this.state.id === 4) {
        this.setState({next: 4})
      } else {
        this.setState({next: this.state.id + 1})
      }
    }

    loadData () {

      this.isLoading = true;
      axios.get('http://localhost:3000/'+this.state.id)
      .then(res => {
        let mylist = res.data.item;
        this.setState({ mylist })
      }).catch(err => {
        console.log(err);
      });
    }

    render() {

      let date  = moment(this.state.mylist.date, 'DD/MM/YYYY').format('DD/MM/YYYY'); 
      return (
        <div>
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

            <tbody>
              <tr>
                <td>{date}</td>
                <td>{this.state.mylist.start}</td>
                <td>{this.state.mylist.end}</td>
                <td>{this.state.mylist.totale ? 'Oui' : 'Non'}</td>
                <td>{this.state.mylist.reason}</td>
                <td><Button waves='light' node='a' href={this.state.mylist.link}>Site</Button></td>
              </tr>
            </tbody>
          </table>

          <Button waves='light' node='a' href={'/'+this.state.previous}>Previous</Button>
          <Button waves='light' node='a' href={'/'+this.state.next}>Next</Button>
        </div>
        );
    }
  }

  export default Horaire;
