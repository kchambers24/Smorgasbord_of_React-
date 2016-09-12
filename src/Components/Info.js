import React, {Component} from 'react';
import Rebase from 're-base'
import {Link} from 'react-router';
import api_key from '../config/API_Key'
import jsonp from 'jsonp'

const base = Rebase.createClass({
  apiKey: "AIzaSyBO3yV6c6dwm6Zsrlxa9wW431Spe5P1Icg",
  authDomain: "etsy-demo-16f2c.firebaseapp.com",
  databaseURL: "https://etsy-demo-16f2c.firebaseio.com",
  storageBucket: "etsy-demo-16f2c.appspot.com"
});

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listing: {},
      list: []
    }
    this.getProducts()
    //  this.addToShoppingCart = this.addToShoppingCart.bind(this)
  }

  getProducts() {
    let self = this
    const listing_id = this.props.params.listing_id
    console.log("=", this.props)
    jsonp("https://openapi.etsy.com/v2/listings/" + listing_id + ".js?&api_key=" + api_key, null, function(err, data) {
      if (err) {
        console.error(err.message);
      } else {
        console.log("info data is", data);
        self.setState({listing: data.results[0]})

      }
    });
  }

  // componentDidMount() {
  //   this.rebaseRef = base.syncState('list', {
  //     context: this,
  //     state: 'list',
  //     asArray: true,
  //     then(){
  //       this.setState({loading:false})
  //     }
  //   })
  // }
  // componentWillUnmount(){
  //   base.removeBinding(this.rebaseRef);
  // }

  // addToShoppingCart (event) {
  //   event.preventDefault();
  //   let list = this.state.list
  //   let item = this.state.listing.title
  //   this.setState({
  // // ... spread operator, putting an item into the array
  //     list: [...list, item]
  //   })
  //   console.log("items are", list)
  // }

  render() {
    return (
      <div className="infoContainer">
        <div className="infoHeader">
          <p className="productInfo">Product Information</p>
        </div>
        <div className="infoBody">
          <p><strong>{this.state.listing.title}</strong></p>
          <p>{this.state.listing.description}</p>
          <p><strong>${this.state.listing.price}</strong></p>
          <button className="shoppingBtn">Add to Wishlist</button>
          <Link to="/wishlist">
          <button className="shoppingBtn">View Wishlist</button>
          </Link>
          <br/>
          <br/>
        </div>
      </div>
    );
  }
}



export default Info;
