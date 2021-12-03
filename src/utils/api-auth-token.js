// const request = require('request');
var SpotifyWebApi = require('spotify-web-api-node');

var client_id = '11acb5b2ef3748abb9330974d99e9fb8';
var client_secret = 'c37bc951d1b04bd7a770deb8819a32f4';

// var authOptions = {
//   url: 'https://accounts.spotify.com/api/token',
//   headers: {
//     'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64'))
//   },
//   form: {
//     grant_type: 'client_credentials'
//   },
//   json: true
// };

var spotifyApi = new SpotifyWebApi({
  clientId: '11acb5b2ef3748abb9330974d99e9fb8',
  clientSecret: 'c37bc951d1b04bd7a770deb8819a32f4',
  
});


spotifyApi.clientCredentialsGrant().then(
  function(data) {
    console.log('The access token expires in ' + data.body['expires_in']);
    console.log('The access token is ' + data.body['access_token']);

    // Save the access token so that it's used in future calls
    spotifyApi.setAccessToken(data.body['access_token']);
  },
  function(err) {
    console.log('Something went wrong when retrieving an access token', err);
  }
);
// request.post(authOptions, function(error, response, body) {
//   if (!error && response.statusCode === 200) {
//     var token = body.access_token;
//     console.log(token)
//   }

// });