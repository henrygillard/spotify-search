import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function AlbumLookup({token, album, albumUPC, setAlbum, setAlbumUPC}) {

    const axios = require("axios");

    

    // var SpotifyWebApi = require('spotify-web-api-node');

    
    // // credentials are optional
    // var spotifyApi = new SpotifyWebApi({
    //   clientId: '11acb5b2ef3748abb9330974d99e9fb8',
    //   clientSecret: 'c37bc951d1b04bd7a770deb8819a32f4',
      
    // });
    
    // spotifyApi.setAccessToken(token)
    
    
    var config = {
        method: 'get',
        url: `https://api.spotify.com/v1/search?q=upc%3A%20${albumUPC}&type=album`,
        headers: { 
          'Authorization': `Bearer ${token}`
        }
      };
    useEffect(function() {

    //     async function getartist() {
    //         await spotifyApi.getArtistAlbums(artistID,
    //         ).then(
    //             function(data) {
    //               console.log('Artist albums', data.body);
    //               setartistsalbums(data.body)
    //             },
    //             function(err) {
    //               console.error(err);
    //             }
    //             );
                
    //         }
    //         getartist();
    // }, []);
      async function getAlbum() {
          axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
            setAlbum(response.data)
          })
          .catch(function (error) {
            console.log(error);
          })
        }
        getAlbum();
    }, []);

    function handleChange(e) {
        e.preventDefault();
        const newUPC = e.target.value
        console.log(newUPC);
        setAlbumUPC(newUPC);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const newUPC = await axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          setAlbum(response.data)
        })
        .catch(function (error) {
          console.log(error);
        })
      
        console.log(newUPC);
        setAlbumUPC(newUPC);
        
        // setAlbumUPC(albumUPC);
    }
    


    return(
        <div>
           <h3>Album Lookup</h3>
           <Link to='/'><h3>Home</h3></Link>
           <div>
               <form onSubmit={handleSubmit}>
               <label>Album UPC: </label>
               <input 
               onChange={handleChange}
               placeholder="e.g 093624324560"
               type="text"
               name="upc"
               value={albumUPC}
               required
               />
               <button type="submit">SUBMIT</button>
               </form>
               
           </div>
           {album && album.albums.items.map((a,idx) => 
           <>
           <img src={a.images[0].url}></img>
           <div>Album Name: {a.name}</div>
           <div>Album ID: {a.id}</div>
           </>
           )}
        </div>
    ) 
}