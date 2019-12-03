import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./components/Main/Main";
import Turnstile from "./components/Turnstile/Turnstile";
import Barrier from "./components/Barrier/Barrier";
import axios from 'axios';
import './App.scss';

//let link = "https://embedded.carddex.konstructor.online/api/dw"
const link = "http://172.16.3.81:9999/api/dw";
//let index = 0;
class App extends Component {
  constructor() {
    super()
    this.state = {
      main: [],
      barrier: [],
      turnstile: [],
      loadData: false,
      error: null
    }
  }
  
  componentDidMount() {
      axios.post(`${link}/main`)
          //.then(res => res.json())
          .then(data => {
             this.setState({
                  main: data.data,
                  loadData: false,
                  error: null
              })
          })
          .catch(error => {
              this.setState({
                loadData: false,
                  error: error
              })
          });
    
   
      axios.post(`${link}/turnstile/`)
          .then(data => {
              this.setState({
                barrier: data.data,
                loadData: false,
                error: null
              })
          })
    
  }
  render() {
    const { main, barrier, turnstile } = this.state;
    return (
      <Router>
        <div className="wrapper-configurator">
          <Switch>
            <Route exact path="/main" render={() => <Main main={main}/>} />
            <Route exact path="/turnstile/:model?"  render={() => <Turnstile turnstile={turnstile} />} />
            <Route exact path="/barrier/:model?" render={() => <Barrier barrier={barrier} />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
