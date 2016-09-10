// // var axios = require('axios');
// //
// // var _baseURL = 'https://openapi.etsy.com/v2/listings/active.js?keywords=" + terms + "&limit=12&includes=Images:1&api_key=";';
// // var _APIKEY = 'gkcbqfnmjco5liki7ugqi2j1';
//
//
// var UserGist = React.createClass({
//  constructor(props) {
//    super(props);
//    this.state = {
//      item: ''
//    };
//  },
//
//   componentDidMount() {
//     this.serverRequest = $.get(this.props.source, function (result) {
//       var lastGist = result[0];
//       this.setState({
//         item: lastGist.owner.login,
//         lastGistUrl: lastGist.html_url
//       });
//     }.bind(this));
//   },
//
//   componentWillUnmount: function() {
//     this.serverRequest.abort();
//   },
//
//   render: function() {
//     return (
//       <div>
//         {this.state.username}s last gist is
//         <a href={this.state.lastGistUrl}>here</a>.
//       </div>
//     );
//   }
// });
//
// ReactDOM.render(
//   <UserGist source="https://api.github.com/users/octocat/gists" />,
//   mountNode
// );
