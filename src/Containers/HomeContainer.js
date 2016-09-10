import React, {Component} from 'react';

class HomeContainer extends Component {
  render() {
    return (
      <div>
      <div>HomeContainer</div>
        <div className="mainContainer">
      <div className="navigation">
          <ul>
              <li className="etsy">Etsy</li>
              <li className="navBar">
                  <form className="etsy-search">
                      <input className="etsy-terms" size="40" />
                      <button onClick={this.terms.bind(this)}>Search!</button>
                  </form>
              </li>
            </ul>
          </div>
          </div>
          </div>

    );
  }
}

export default HomeContainer;
