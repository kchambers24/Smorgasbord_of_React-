import React, {Component} from 'react';
import axios from 'axios'
import jsonp from 'jsonp'
// import HomeContainer from '../Containers/HomeContainer'
import api_key from '../config/API_Key'


class Home extends Component {
  constructor(props){
  super(props);
   this.state = {

   etsyProducts: []
  }
}



  terms () {
    let terms = this.refs.search.value
    axios.get('https://openapi.etsy.com/v2/listings/active.js?keywords=' +
              terms + '&limit=12&includes=Images:1&api_key=' + api_key)
    .then(function (response) {
      console.log(response);
    })
    console.log("button is working")
    console.log(this.refs.search.value)

    jsonp('https://openapi.etsy.com/v2/listings/active.js?keywords=' +
              terms + '&limit=12&includes=Images:1&api_key=' + api_key, null, function (err, data) {
    if (err) {
      console.error(err.message);
    } else {
      console.log(data);
    }
  });

  }

  render() {
    return (
      <div>
        <div>Home</div>
          <div className="mainContainer">
        <div className="navigation">
                    <form className="etsy-search">
                        <input className="etsy-terms" ref="search" />
                        <button onClick={this.terms.bind(this)}>Search!</button>
                    </form>
            </div>
            <ul className="etsyResults">

           </ul>
            </div>
      </div>

    );
  }
}

export default Home;
