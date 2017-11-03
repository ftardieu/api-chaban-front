import React, { Component } from 'react';
import './App.css';
 // import dateitem from './DateItem'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Horaire from './components/Horaire';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

   
        render() {
          return (
            <Router>
            <div>
              <Link to={'/'} className="brand-logo pad-left"> Application Chaban Delmas </Link>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/contact' component={Contact} />
                <Route path='/about' component={About} />
                <Route path='/:id' component={Horaire} />
              </Switch>
              </div>
              
            </Router>

            );
        }
      }

      export default App;
