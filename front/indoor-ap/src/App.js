import React, { useState, useEffect, componentDidMount, useAsync, Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import Ap from './Ap'
import NaverMapAPI from './NaverMapAPI'
import { RenderAfterNavermapsLoaded, NaverMap, Circle } from 'react-naver-maps'

class App extends Component {
  render() {
    return (
      <div>
      <RenderAfterNavermapsLoaded
        ncpClientId={'8nlf9bvios'}
        error={<p>Maps Load Error</p>}
        loading={<p>Maps Loading...</p>}
        >
        <NaverMapAPI />
      </RenderAfterNavermapsLoaded>
      </div>
    );
  }
}

export default App;
