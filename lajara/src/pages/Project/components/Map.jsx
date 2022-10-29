import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { GoogleMap, LoadScript, Marker, Rectangle } from '@react-google-maps/api';
import { useDevices } from 'src/utils/LayoutHandler';


const Map = ({ location, mapstyle }) => {
    const mapStyles = mapstyle ? mapstyle : MAP_STYLES;
    const [mobile, tablet, desktop] = useDevices()

    const [map, setMap] = useState()

    useEffect(() => {
        if (!map || !location) return;

        map.setZoom(14)
        map.setCenter({
            lat: location.lat,
            lng: location.lng,
        })

    }, [map, location])

    if (!location) return <></>

    return (
        <Style id="map">
            <LoadScript
                googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
            >
                <GoogleMap
                    mapContainerStyle={{
                        width: '100%',
                        height: (mobile || tablet) ? '60vh' : '100%'
                    }}
                    onLoad={map => {
                        setMap(map);
                    }}
                    options={{
                        streetViewControl: false,
                        fullscreenControl: true,
                        mapTypeControl: false,
                        styles: mapStyles
                    }}
                >
                    <Marker
                        position={{
                            lat: location.lat,
                            lng: location.lng,
                        }}
                    />
                    <Marker
                        position={{
                            lat: location.lat,
                            lng: location.lng
                        }}
                    />
                </GoogleMap>
            </LoadScript>
        </Style>
    )
}

const Style = styled.section`

`

Map.propTypes = {

}

export { Map }



export const MAP_STYLES = [
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#d3d3d3"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#575757"
            }
        ]
    },
    {
        "featureType": "transit",
        "stylers": [
            {
                "color": "#808080"
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#b3b3b3"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#ffffff"
            },
            {
                "weight": 1.8
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#d7d7d7"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#ebebeb"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#a7a7a7"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#efefef"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#696969"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#737373"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#d6d6d6"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {},
    {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#dadada"
            }
        ]
    }
]