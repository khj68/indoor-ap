import React, { useState, useEffect, componentDidMount, useAsync, Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
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
    <CircleAPI lat='37.511395' lng='127.059788' />
    <CircleAPI lat='37.511445' lng='127.059788' />
    <CircleAPI lat='37.511495' lng='127.059788' />
    <CircleAPI lat='37.511545' lng='127.059788' />
    <CircleAPI lat='37.511595' lng='127.059788' />
    <CircleAPI lat='37.511645' lng='127.059788' />
    <CircleAPI lat='37.511695' lng='127.059788' />
    </NaverMap>
  )
}



class App extends Component {
  state = {
    data: null
  }

  stateChange = () => {
    let response = axios.get('http://localhost:8080/parse')
                        .then(res => {
                          console.log(res.data)
                          return res.data
                        })
    this.setState({
      data: response
    })
  }
  render() {
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
    {/* <h1>{logList.length}</h1> */}
      {/* <h1>{users.map(user => <div>{user}</div>)}h2</h1> */}
      <button onClick={this.stateChange}>btn</button>
      <h1>데이터 : {this.state.data}</h1>
      </div>
    );
  }
}

export default App;
