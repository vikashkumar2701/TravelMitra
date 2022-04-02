import GoogleMapReact from "google-map-react";
import { useState } from "react";
import { useEffect } from "react/cjs/react.production.min";
const Atm = ()=>{

    const [currentPosition, setcp] = useState([]);
    const location = {
        address: '1600 Amphitheatre Parkway, Mountain View, california.',
        lat: 37.42216,
        lng: -122.08427,
      };
    useEffect(()=>{

      
    },[])
    
    return(
<div className="flex flex-col items-center justify-center h-screen">
<GoogleMapReact
  defaultCenter={location}
  defaultZoom={15}>
  </GoogleMapReact>
    </div>        
    )


}

export default Atm;