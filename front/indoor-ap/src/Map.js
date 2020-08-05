import React from "react";
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from "react-naver-maps";

export const NaverAPIMap = (props) => {
    const NAVER_API_KEY = process.env.REACT_APP_NAVER_MAP_API_KEY;

    return (
        <RenderAfterNavermapsLoaded 
            ncpClientId = {"OxFovswFBqRfrQfEjbyH0Hud70ypZTzXjErEguRy"}
            error = {<p>Maps Load Error</p>}
            loading = {<p>Maps Loading...</p>}
        >
            <NaverMap
                mapDivId={"map"} // default: react-naver-app
                style={{
                    width: 800,
                    height: 800
                }}
                defaultCenter={{ lat: 37.554722, lng:126.970833 }}
                zoom={props.zoom}
            >
                {props.address !== null ? props.test.map((ele, idx) => {
                    return (
                        <Marker
                            key={idx}
                            position={{lat: ele.lat, lng: ele.lng}}
                            animation={2}
                            onClick = {() => {
                                alert('hello');
                            }}
                        />
                    );
                })
                : null}
            </NaverMap>
        </RenderAfterNavermapsLoaded>
    )
}

export default NaverAPIMap;