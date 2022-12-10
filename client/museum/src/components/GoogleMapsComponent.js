import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'

const GoogleMapsComponent = ({ coordinates }) => {

    const containerStyle = {
        width: "60%",
        height: "250px"
    }

    const center = {
        lat: coordinates.latitude,
        lng: coordinates.longitude
    }

    const { isloaded } = useJsApiLoader({
        googleMapsApiKey: process.env.GOOGLE_MAPS_API
    })

    const options = {
        disableDefaultUI: true,
    }

  return (
    <div className='mapComponent'>
        <div className='google-map'>
            {isloaded? <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={11}
                options={options}>
            </GoogleMap>
            : null}
        </div>
    </div>
  )
}

export default GoogleMapsComponent