import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import './App.css';
import Wrapper from './Hoc/Wrapper'
import NavBar from './Components/NavBar/NavBar'
import SingleProduct from './Containers/SingleProduct'
import AdminPage from './Containers/AdminPage/AdminPage'
import Login from './Containers/Login'
import 'font-awesome/css/font-awesome.min.css';
class App extends Component {

  render() {
    return (
      <Wrapper>
        <NavBar />
        <Router>
          <Switch>
            <Route path="/sp">
              <SingleProduct/>
            </Route >
            <Route path="/login">
              <Login />
            </Route >
            <Route path="/AdminPage">
              <AdminPage />
            </Route >
          </Switch>
        </Router>
       
      </Wrapper>
    )
  }
}

export default App;
