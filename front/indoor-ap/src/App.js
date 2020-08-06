import React, { useState, useEffect, componentDidMount, useAsync, Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import { RenderAfterNavermapsLoaded, NaverMap, Circle } from 'react-naver-maps'

function CircleAPI(props) {
  return (
    <Circle
      center={{ lat: props.lat, lng: props.lng }}
      radius={0.5}
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



class NaverMapAPI extends Component{
  state = {
    SpotList : []
  }

  loadSpot = async () => {
    axios.get('http://localhost:8080/parse')
          .then((res) => {
            this.setState({
              SpotList: res.data
            })
          })
          .catch(e => console.error(e))
  }

  componentDidMount(){
    this.loadSpot();
  }

  render() {
    const {SpotList} = this.state
    console.log(SpotList); 
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
      <div>{SpotList.map(data => <CircleAPI lat={data.lat} lng={data.lng} />)}</div>
      </NaverMap>
    )
  }
}



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
        <CircleAPI />
      </RenderAfterNavermapsLoaded>
      {/* <button onClick={this.stateChange}>btn</button> */}
      
      </div>
    );
  }
}

export default App;
