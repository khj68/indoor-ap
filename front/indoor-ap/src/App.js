import React from 'react';
import logo from './logo.svg';
import './App.css';
import { RenderAfterNavermapsLoaded, NaverMap } from 'react-naver-maps'

function NaverMapAPI() {
  return (
    <NaverMap
      mapDivId={'map'}
      style={{
        width: '100%',
        height: '85vh'
      }}
      defaultCenter = {{ lat: 37.554722, lng: 126.970833 }}
      defaultZoom={13}
    />
  )
}

function App() {
  return (
    <RenderAfterNavermapsLoaded
      ncpClientId={'8nlf9bvios'}
      error={<p>Maps Load Error</p>}
      loading={<p>Maps Loading...</p>}
    >
      <NaverMapAPI />
    </RenderAfterNavermapsLoaded>
  );
}

export default App;
