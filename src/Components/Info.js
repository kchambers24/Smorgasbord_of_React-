import React, {Component} from 'react';
import Rebase from 're-base'
import {Link} from 'react-router';
import api_key from '../config/API_Key'
import jsonp from 'jsonp'

const base = Rebase.createClass({
  apiKey: "AIzaSyBO3yV6c6dwm6Zsrlxa9wW431Spe5P1Icg",
  authDomain: "etsy-demo-16f2c.firebaseapp.com",
  databaseURL: "https://etsy-demo-16f2c.firebaseio.com",
  storageBucket: "etsy-demo-16f2c.appspot.com",
});

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listing: {},
      list: []
    }
    this.getProducts()
   this.addToShoppingCart = this.addToShoppingCart.bind(this)
  }

getProducts () {
  let self = this
  const listing_id = this.props.params.id
  jsonp('https://openapi.etsy.com/v2/listings/active.js?keywords=' + listing_id + '&limit=12&includes=Images:1&api_key=' + api_key, null, function (err, data) {
    if (err) {
      console.error(err.message);
    } else {
      console.log("data is", data);
      self.setState({
        listings: data.results[0],
      })
      console.log("state is", self.state)
    }
  });
}

componentDidMount() {
  this.rebaseRef = base.syncState('list', {
    context: this,
    state: 'list',
    asArray: true,
    then(){
      this.setState({loading:false})
    }
  })
}

addToShoppingCart (event) {
  event.preventDefault();
  let list = this.state.list
  let item = this.state.listing.title
  this.setState({
    list: [...list, item]
  })
  console.log("items are", list)
}


  render() {
    return (
      <div className="infoContainer">
        <div className="infoHeader">
          <h2>Product Information</h2>
        </div>
        <div className="infoBody">
          <p>{this.state.listing.title}</p>
          <p>{this.state.listing.price}</p>
          <p>{this.state.listing.description}</p>
          <button className="shoppingBtn" onClick={this.addToShoppingCart}>Add to Shopping Cart></button>
          <Link to="/wishlist"><button className="shoppingBtn">View my Shopping Cart</button></Link>
        </div>
      </div>

    );
  }
}

export default Info;
