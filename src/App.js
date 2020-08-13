import React, {useEffect, useState} from 'react';
import './App.css';
import { getTokenFromUrl } from './Components/spotify/spotify.js';
import SpotifyWebApi from 'spotify-web-api-js';

import Login from './Components/Login/Login';
import Player from './Components/Player/Player';
import { useDataLayerValue } from './DataLayer.js';


const spotify = new SpotifyWebApi()

function App() {
  //dispatch is used to update the context
  const [{user, token}, dispatch] = useDataLayerValue();

  useEffect(() => {
    const {access_token} = getTokenFromUrl();
    window.location.hash = "";
    if (access_token){
      window.localStorage.setItem('token', access_token);
      dispatch({
        type: 'SET_TOKEN',
        token: window.localStorage.getItem('token'),
      });
      spotify.setAccessToken(window.localStorage.getItem('token'));

      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists,
        })
      });

      spotify.getPlaylist('6BEasSOrFkth5Kkcd1Z9Tt').then((response) => {
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly : response,
        })
      })
    }
  }, [token]);

  return (
    <div className="app">
      {
        token ? (
          <Player />
        ) : 
        (
          <Login />
        )
      }
    </div>
  );
}

export default App;
