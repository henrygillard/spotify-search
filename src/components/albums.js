import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as ApiCall from "../utils/api-call";

export default function Info({token}) {
    const [artistsalbums, setartistsalbums] = useState();
    const [artistID, setArtistID] = useState('7FBcuc1gsnv6Y1nwFtNRCb')

    var SpotifyWebApi = require('spotify-web-api-node');

    
    // credentials are optional
    var spotifyApi = new SpotifyWebApi({
      clientId: '11acb5b2ef3748abb9330974d99e9fb8',
      clientSecret: 'c37bc951d1b04bd7a770deb8819a32f4',
      
    });
    
    spotifyApi.setAccessToken(token)
    
    // Get Elvis' artistsalbumss
    useEffect(function() {

        async function getartist() {
            await spotifyApi.getArtistAlbums(artistID,
            ).then(
                function(data) {
                  console.log('Artist albums', data.body);
                  setartistsalbums(data.body)
                },
                function(err) {
                  console.error(err);
                }
                );
                
            }
            getartist();
    }, []);


    return(
        <div>
           <h3>List of artist Albums</h3>
            <ul>
  
                {artistsalbums && artistsalbums.items.map((a, idx) => 
                
                <>
                <Link to={`/album/${a.id}`}>{a.name}</Link>
                <img style={{width: "5rem"}}src={a.images[0].url} /> 
                </>
                )}
                </ul>
                
                

        </div>
    ) 
}