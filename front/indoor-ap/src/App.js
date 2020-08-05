import React from 'react';
import logo from './logo.svg';
import './App.css';
import { RenderAfterNavermapsLoaded, NaverMap, Circle } from 'react-naver-maps'

function CircleAPI(props) {
  return (
    <Circle
      center={{ lat: props.lat, lng: props.lng }}
      radius={1}
      fillOpacity={0.5}
      fillColor={'#FF0000'}
      strokeColor={'red'}
      clickable={true}
      onClick={() => {
        alert('clicked')
      }}
    />
  )
}

function NaverMapAPI() {
  return (
    <NaverMap
      mapDivId={'map'}
      style={{
        width: '100%',
        height: '85vh'
      }}
      defaultCenter = {{ lat: 37.511345, lng: 127.059788 }}
      defaultZoom={19}
    >
    <CircleAPI lat='37.511345' lng='127.059788' />
    </NaverMap>
  )
}

function App() {
  return (
    <div>
    <RenderAfterNavermapsLoaded
      ncpClientId={'8nlf9bvios'}
      error={<p>Maps Load Error</p>}
      loading={<p>Maps Loading...</p>}
    >
      <NaverMapAPI />
      <CircleAPI />

    </RenderAfterNavermapsLoaded>
    </div>
  );
}

export default App;
