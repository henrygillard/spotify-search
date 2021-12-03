import { useState } from 'react';
import { Route, Link, Redirect, Routes } from 'react-router-dom';
import './App.css';
import AlbumDetail from './components/album-detail';
import AlbumLookup from './components/album-lookup';
import Info from './components/albums';
import Home from './pages/Home';

function App() {
  const token = "BQCt26yrDDkFL7T_rheHG8THZd2pHTPP9MSb0fLNJm9uK9I8LkOwp3LW5Qc-pJTU-XFiqDzG4IFar652VZU"
  const [albumUPC, setAlbumUPC] = useState()
    const [album, setAlbum] = useState();

  return (
    <div className="App">
     <h1>Hello World!</h1>
     <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/albums" element={<Info token={token}/>}/>
     <Route path="/album/:id" element={<AlbumDetail token={token}/>}/>
     <Route path="/lookup" element={<AlbumLookup token={token} setAlbum={setAlbum} albumUPC={albumUPC} setAlbumUPC={setAlbumUPC} album={album}/>}/>
     </Routes>
    </div>
  );
}

export default App;
