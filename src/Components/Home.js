import React, {Component} from 'react';
// import axios from 'axios'
import jsonp from 'jsonp'
import {hashHistory, Link} from 'react-router';
// import HomeContainer from '../Containers/HomeContainer'
import api_key from '../config/API_Key'


class Home extends Component {
  constructor () {
    super ();
    this.state = {
      listings: []
    }
    this.returnListings = this.returnListings.bind(this)
  }

    returnListings () {
      let self = this
      let terms = this.refs.search.value
        jsonp('https://openapi.etsy.com/v2/listings/active.js?keywords=' + terms + '&limit=12&includes=Images:1&api_key=' + api_key, null, function (err, data) {
          if (err) {
            console.error(err.message);
          } else {
            console.log("data is", data);
            self.setState({
              listings: data.results
            })
            console.log("state is", self.state)
          }
        });
        console.log("button is working")
        console.log(this.refs.search.value)
    }

    render() {

    return (
      <div className="Home">
        <input placeholder="search here" ref="search"/>
        <button onClick={this.returnListings}>Search it!</button>

        <ul>
        {this.state.listings.map((product) => {
          return (
          <li key={product.listing_id}>
            <Link to='/info'>
            <p>{product.title}</p>
            <p><img src={product.Images[0].url_170x135}/></p>
            <p>{product.price}</p>
            </Link>

          </li>
        )
        })
      }
    </ul>
      </div>
    );
  }
}

export default Home;
