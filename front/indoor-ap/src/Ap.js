import React, { useState, useEffect, componentDidMount, useAsync, Component } from 'react';
import axios from 'axios';
import { RenderAfterNavermapsLoaded, NaverMap, Circle } from 'react-naver-maps'

class ApAPI extends Component {
    state = {
      ApList : []
    }
  
    loadAp = async () => {
      axios.get('http://localhost:8080/ap')
            .then((res) => {
                console.log(res)
              this.setState({
                ApList: res.data
              })
            })
            .catch(e => console.error(e))
    }
  
    componentDidMount(){
      this.loadAp();
    }

    click = () => {
        return (
            <div>hi</div>
        )
    }
  
    render() {
      const {ApList} = this.state
      console.log('apap')
      console.log(ApList); 
      return (
        <div>
            <div>{ApList.map(data => <p>{data.ssid} {data.bssid} {data.rssi}</p>)}</div>
            <form>
                <input type="checkbox" name="checkname" value="checkvalue"/*name="isChecked" value="yes" onClick={this.click}*/ />
            </form>
        </div>
      );
    }
  }
  
  export default ApAPI;