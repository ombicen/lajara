import { useRouter } from 'next/router';
import React, { useLayoutEffect, useState, useRef, useEffect } from 'react';
import Wordpress from './Wordpress';

export class Util {

    static getDistance(x1, y1, x2, y2) {
        return Math.sqrt( Math.pow((x1-x2), 2) + Math.pow((y1-y2), 2) )
    }

    static getAngle(x1, y1, x2, y2) {
        let angle = Math.atan2(y2 - y1, x2 - x1) * 180.0 / Math.PI;
        angle += 90;
        if (angle < 0) angle += 360;
        return angle;
    }

}




export function decodeHtml(html) {
    if (typeof document != 'object') return html;
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}

export function htmlToText(html) {
    return html?.replace(/(<([^>]+)>)/g, "")
}


export function getImageSize(image, size = 'large') {

    if (!image) return 'https://via.placeholder.com/300';

    let sizes = image?.sizes;

    if (sizes) {
        // Is ACF image.

        for (let s of [
            '2048x2048',
            'large',
            'medium-large',
            'medium',
            'thumbnail',
        ]) {
            if (sizes[s] && size == s) return sizes[s];
        }

        return image.url;
    } else {
        // Is wordpress image.

        sizes = image?.media_details?.sizes;

        for (let s of [
            '2048x2048',
            '1536x1536',
            'large',
            'medium-large',
            'medium',
            'thumbnail',
        ]) {
            if (sizes?.[s] && size == s) return sizes[s].source_url;
        }

        return image?.source_url;
    }
}





/**
 * Define global settings such as breakpoints etc.
 */
let settings = {
    breakpoints: {
        mobile: {
            width: 500,
            aspectRatio: 0.7
        },
        tablet: {
            width: 1000,
            aspectRatio: 1.0
        },
    },
    scale: {
        mobile: 4,
        tablet: 1.5
    }
}


let runtime = {
    mobile: false,
    tablet: false,
    desktop: false
}

function getBreakpoint(width, height) {
    let asp = width / height;
    runtime.mobile = false;
    runtime.tablet = false;
    runtime.desktop = false;
    if (width < settings.breakpoints.mobile.width || asp < settings.breakpoints.mobile.aspectRatio) {
        runtime.mobile = true;
    } else if (width < settings.breakpoints.tablet.width || asp < settings.breakpoints.tablet.aspectRatio) {
        runtime.tablet = true;
    } else {
        runtime.desktop = true;
    }
    return [ runtime.mobile, runtime.tablet, runtime.desktop ]
}


export function isStandalone() {
    return isClient() && window.matchMedia('(display-mode: standalone)').matches
}

/**
 * Get the window size as a react hook.
 */
export function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize, {passive: true});
        updateSize();
        setTimeout(updateSize, 0)
        return () => window.removeEventListener('resize', updateSize, {passive: true});
    }, []);
    return size;
}


export function isServer() {
    return typeof window === undefined;
}
export function isClient() {
    return typeof window !== undefined;
}

/**
 * Get the window scroll position.
 */
export function useScrollPos() {
    const [scroll, setScroll] = useState(0);
    useEffect(() => {
        function updateScroll() {
            setScroll(window.scrollY);
        }
        window.addEventListener('scroll', updateScroll, {passive: true});
        updateScroll();
        setTimeout(updateScroll, 0)
        return () => window.removeEventListener('scroll', updateScroll, {passive: true});
    }, []);
    return scroll;
}


/**
 * React hook that will define mobile, tablet and desktop booleans to be used
 * in components as a method to change the structure depending on the current
 * device screen size. Uses the breakpoints defined in the settings object.
 * 
 * Return format: [mobile, tablet, desktop]
 */
export function useDevices() {
    const [width, height] = useWindowSize();
    return getBreakpoint(width, height);
}

export function useResponsive(block) {
    const [mobile, tablet, desktop] = useDevices();

    if (block?.responsive.includes('mobile') && mobile) return true;
    if (block?.responsive.includes('tablet') && tablet) return true;
    if (block?.responsive.includes('desktop') && desktop) return true;
    return false;
}


/**
 * Custom React hook that fires a callback when a specified element is swiped on.
 * The hook returns a React reference that can be added to a component to enable the swipe callback.
 * 
 * @param {function} cb - Callback function for when the element is clicked.
 * @param {array} watch - Array of variables to watch.
 */
export function useSwipe(cb, watch = []) {

    // Create reference for later usage.
    const ref = useRef();

    // This code should only be executed when an element in the watch array is changed.
    useEffect(() => {

        if (!ref) return;
        if (!ref.current) return;

        // This swipe object will store all the data for any particular swipe.
        let swipe = {}

        // First of all, handle the mousedown event, save position and time.
        function mouseDown(e) {
            swipe = {};
            swipe.down = {
                x: e.x,
                y: e.y,
                time: e.timeStamp
            }
            if (e.changedTouches) {
                swipe.down = {
                    x: e.changedTouches[0].clientX,
                    y: e.changedTouches[0].clientY,
                    time: e.timeStamp
                }
            }
        }

        // When the mouse is released. Calculate the swipe.
        function mouseUp(e) {

            // Save 'raw' data.
            swipe.up = {
                x: e.x,
                y: e.y,
                time: e.timeStamp
            }

            // If this is a mobile the raw data looks a bit different.
            if (e.changedTouches) {
                swipe.up = {
                    x: e.changedTouches[0].clientX,
                    y: e.changedTouches[0].clientY,
                    time: e.timeStamp
                }
            }

            // Calculate distance (px).
            swipe.distance = Math.sqrt(Math.pow((swipe.down.x - swipe.up.x), 2) + Math.pow((swipe.down.y - swipe.up.y), 2));
            
            // Calculate the angle (deg).
            swipe.angle = (Math.atan2(swipe.up.y - swipe.down.y, swipe.up.x - swipe.down.x) * 180.0 / Math.PI) + 90;
            if (swipe.angle < 0) swipe.angle += 360;

            // Calculate the duration (ms).
            swipe.duration = swipe.up.time - swipe.down.time;

            // Get the direction as a string for ease of use.
            if (swipe.angle > 45 && swipe.angle <= 135) swipe.direction = 'right';
            else if (swipe.angle > 135 && swipe.angle <= 215) swipe.direction = 'down';
            else if (swipe.angle > 215 && swipe.angle <= 305) swipe.direction = 'left';
            else swipe.direction = 'up';


            // Check if this is a swipe or not.
            // These values can be changed to modify the swipe 'feel'. 
            if (
                (swipe.duration > 100 && swipe.duration < 400) &&
                (swipe.distance > 50)
            ) {
                // Execute callback with the swipe as an argument.
                cb(swipe)
            }
        }

        // Setup listeners with the functions above.
        // ref.current.addEventListener('mousedown', mouseDown);
        // ref.current.addEventListener('mouseup', mouseUp);
        ref?.current?.addEventListener('touchstart', mouseDown, {passive: true});
        ref?.current?.addEventListener('touchend', mouseUp, {passive: true});

        // Cleanup function.
        return () => {
            // ref.current.removeEventListener('mousedown', mouseDown);
            // ref.current.removeEventListener('mouseup', mouseUp);
            ref?.current?.removeEventListener('touchstart', mouseDown, {passive: true});
            ref?.current?.removeEventListener('touchend', mouseUp, {passive: true});
        }
    }, [...watch, ref]);

    // Return the reference which will be used to define on which element this swipe should be applied on.
    return ref;
}

/**
 * Custom loader for 'next/image' components.
 */
export function loadImage({src, width, quality}) {
    
    // Default next.js loader.
    // return `/_next/image?url=${encodeURI(src)}&w=${width}&q=75`

    // Show placeholders everywhere.
    // return `https://via.placeholder.com/${width}`

    // Simulate slow image CDN.
    // return `https://www.deelay.me/1000/${encodeURI(src)}`

    if (process.env.NEXT_PUBLIC_IMAGE_KIT == 'true' && src.includes(Wordpress.getBaseURL()))
        return `https://ik.imagekit.io/blackpixel/provinum/${src.replace(Wordpress.getBaseURL() + '/wp-content/uploads', '')}`

    return `${src}?w=${width}`;
}

export function placeholderImage() {
    return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88R8AArUB2TtNwp8AAAAASUVORK5CYII=';
}

export function useQueryParams() {

    const router = useRouter();

    const fetchQueryVariables = () => {
        const browserQuery = {}
        router.asPath
            .split('?')[1]?.split('&')
            .map(param => param.split('='))
            .forEach(param => browserQuery[param[0]] = decodeURIComponent(param[1]));
        return browserQuery
    }

    const [query, setQuery] = useState(fetchQueryVariables());

    // Update local query params on browser change.
    useEffect(() => setQuery(fetchQueryVariables()), [router])

    useEffect(() => {
        // Check if something has changed.
        if (JSON.stringify(query) == JSON.stringify(fetchQueryVariables())) return;
        let params = Object.entries(query)
            .filter(([k, v]) => v != undefined);

        // console.log('query')
        // console.log(params)
        // console.log(`${router.asPath.split('?')[0]}${params.length != 0 ? '?' : ''}${
        //     params
        //         .map(([k, v]) => `${k}=${encodeURIComponent(v)}`)
        //         .join('&')
        //     }`)

        router.push(`${router.asPath.split('?')[0]}${params.length != 0 ? '?' : ''}${
            params
                .map(([k, v]) => `${k}=${encodeURIComponent(v)}`)
                .join('&')
            }`, undefined, {shallow: true})

    }, [query])

    return [query, setQuery]
}

