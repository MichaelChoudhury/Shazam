import React, { useState } from "react";
import axios from "axios";
import "./App.css"
import SearchBox from './components/SearchBox';
function App () {

  const[picture, setPicture] = useState("");
  const [searchValue, setSearchValue] = useState('');

  const options = {
    method: 'GET',
    url: 'https://shazam-core.p.rapidapi.com/v1/search/multi',
    params: {offset: '10', query: `${searchValue}`, search_type: 'SONGS_ARTISTS'},
    headers: {
      'X-RapidAPI-Key': 'KJwZZIJSFimshuivMSVGaiYzkRomp15f2vKjsnK4bKzuUzVLzA',
      'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
  }
};

  const getPicture = () => {
    axios.request(options).then(function (response) {
      setPicture(response.data.tracks.hits[0].track.images.background);
      }).catch(function (error) {
	    console.error(error);
      }

    );
  }
  getPicture();
  console.log(picture);
  return (
    <div className='image-container d-flex justify-content-start m-3'>
      <h1>My Music Collection</h1>
      <p>Live from Shazam!</p> 

      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      <img src= {picture} alt="Type artist/song name" width="600" height="600"></img> 
    </div>
  )
};

export default App;


