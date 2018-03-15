import React, {Component} from 'react';
import 'semantic-ui-css/semantic.min.css';
import NavBar from './../component/NavBar/NavBar';
import AddForm from './../component/Form/Form';
import {Route, Switch} from 'react-router-dom';
import './layout.css';

class Layout extends Component {


  render() {

    return (
      <div>
        <Route  path='/' component={NavBar}/>
        <Switch>
          
          <Route path='/add'  component = {AddForm}/>
        </Switch>
      </div>

    )
  }
}

export default Layout;