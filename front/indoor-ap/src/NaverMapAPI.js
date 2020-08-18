import React, { useState, useEffect, componentDidMount, useAsync, Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import Ap from './Ap'
import { RenderAfterNavermapsLoaded, NaverMap, Circle } from 'react-naver-maps'

function CircleAPI(props) {
    return (
      <Circle
        center={{ lat: props.lat, lng: props.lng }}
        radius={props.radius}
        fillOpacity={0.5}
        fillColor={props.fillColor}
        strokeColor={props.strokeColor}
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
        {/* <div>{SpotList.map(data => <CircleAPI lat={data.lat} lng={data.lng} />)}</div> */}
        <CircleAPI lat='37.5136218' lng='127.058321' fillColor='#FF0000' strokeColor='red' radius={0.5}/>
        <CircleAPI lat='37.5136218' lng='127.058321' fillColor='#008000' strokeColor='green' radius={17.6}/>

        <CircleAPI lat='37.5136201' lng='127.058311' fillColor='#FF0000' strokeColor='red' radius={0.5}/>
        <CircleAPI lat='37.5136201' lng='127.058311' fillColor='#008000' strokeColor='green' radius={23.04}/>

        <CircleAPI lat='37.5136285' lng='127.058361' fillColor='#FF0000' strokeColor='red' radius={0.5}/>
        <CircleAPI lat='37.5136285' lng='127.058361' fillColor='#008000' strokeColor='green' radius={30.25}/>
        
        <CircleAPI lat='37.5136223' lng='127.0583243' fillColor='#000000' strokeColor='blue' radius={0.5}/>
        </NaverMap>
      )
    }
}

export default NaverMapAPI;