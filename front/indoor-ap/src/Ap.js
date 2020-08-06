import React, { useState, useEffect, componentDidMount, useAsync, Component } from 'react';
import axios from 'axios';
import { RenderAfterNavermapsLoaded, NaverMap, Circle } from 'react-naver-maps'

class Ap extends Component {
    state = {
      ApList : []
    }
  
    loadAp = async () => {
      axios.get('http://localhost:8080/ap')
            .then((res) => {
              this.setState({
                ApList: res.data
              })
            })
            .catch(e => console.error(e))
    }
  
    componentDidMount(){
      this.loadAp();
    }
  
    render() {
      const {ApList} = this.state
      console.log(ApList); 
      return (
        <div>
        
        </div>
      );
    }
  }
  
  export default Ap;