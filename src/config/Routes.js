import React from 'react';
import {Router, Route, hashHistory, IndexRoute} from 'react-router'
import App from '../App'
import Login from '../Components/Login'
import Home from '../Components/Home'
import Info from '../Components/Info'
import WishList from '../Components/WishList'

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Login}/>
      <Route path='/home' component={Home}/>
      <Route path='/info' component={Info}/>
      <Route path='/wishlist' component={WishList}/>
    </Route>
  </Router>
)

export default routes
