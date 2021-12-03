const credentials = {
  clientId: '11acb5b2ef3748abb9330974d99e9fb8',
  clientSecret: 'c37bc951d1b04bd7a770deb8819a32f4',
  redirectUri: 'http://www.michaelthelin.se/test-callback'
};
    var SpotifyWebApi = require('spotify-web-api-node');
    
    const token = "BQDS7gy3Y_RRqY4F9TN3QBfhUTVzfGUaVWpWYzmZvzI01cPajYkAPidVhp44aHC8HiN2UrWkCQ3AoTA7qZI"
    // credentials are optional
    var spotifyApi = new SpotifyWebApi({
      clientId: '11acb5b2ef3748abb9330974d99e9fb8',
      clientSecret: 'c37bc951d1b04bd7a770deb8819a32f4',
      
    });
    
    spotifyApi.setAccessToken(token)
    
   



