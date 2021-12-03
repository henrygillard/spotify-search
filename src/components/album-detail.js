import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export default function AlbumDetail({token}) {
    const [album, setAlbum] = useState();

    var SpotifyWebApi = require('spotify-web-api-node');
    
    
    // credentials are optional
    var spotifyApi = new SpotifyWebApi({
      clientId: '11acb5b2ef3748abb9330974d99e9fb8',
      clientSecret: 'c37bc951d1b04bd7a770deb8819a32f4',
      
    });


    spotifyApi.setAccessToken(token)


const {id} = useParams();

    useEffect(function() {

        async function getalbum() {
            await spotifyApi.getAlbum(id)
            .then(function(data) {
              console.log('Album information', data.body);
              setAlbum(data.body)
            }, function(err) {
              console.error(err);
            });
                
            }
            getalbum();
    }, [id]);


    return (
        <div>
            <Link to="/">Home</Link>
            <h1>{album && album.name}</h1>
            <img src={`${album && album.images[0].url}`}/>
            <div>Label: {album && album.label}</div>
            <div>Release Date: {album && album.release_date}</div>
            <div>UPC: {album && album.external_ids.upc}</div>
            
             <h3>Track Listing</h3>
             {album && album.tracks.items.map((t, idx) => <li>{t.name}</li>)}
        </div>
    )
}