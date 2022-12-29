import "leaflet-routing-machine"
import "leaflet-routing-machine/dist/leaflet-routing-machine.css"
import { useEffect } from 'react';
import { useMap } from "react-leaflet";
import L from "leaflet"

const LeafLet = () => {

const map=useMap();

    useEffect(()=>{
        L.Routing.control({
            waypoints: [
              L.latLng(32.087187, 34.804011),
              L.latLng(32.0, 34.804011)
            ]
          }).addTo(map);
    },[])
    return null;
}


 
export default LeafLet;