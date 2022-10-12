import loaderGif from './loader.gif'
import Router from 'next/router';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styled from 'styled-components'

function Loading() {

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const handleStart = (url) => (url !== Router.asPath) && setLoading(true);
        const handleComplete = (url) => (url === Router.asPath) && setLoading(false);

        Router.events.on('routeChangeStart', handleStart)
        Router.events.on('routeChangeComplete', handleComplete)
        Router.events.on('routeChangeError', handleComplete)

        return () => {
            Router.events.off('routeChangeStart', handleStart)
            Router.events.off('routeChangeComplete', handleComplete)
            Router.events.off('routeChangeError', handleComplete)
        }
    })

    return loading && (<Style>{<Image width="250px" height="240px" src={loaderGif} alt="Loader" layout="fixed" />}</Style>);
}
const Style = styled.div`
display:flex;
position:fixed;
background:white;
z-index:999;
top:0;
left:0;
align-items:center;
justify-content:center;
height:100vh;
width:100vw;
`
export default Loading;