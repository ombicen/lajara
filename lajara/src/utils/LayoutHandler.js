import { useEffect, useState } from "react";

/**
 * Settings constant for the layout handler.
 * These can be adjusted to customize the breakpoints.
 */
 const settings = {
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
}


/**
 * Custom layout handler that will calculate the current device mode based on breakpoints
 * and updates a class on the body element.
 * 
 * This class also supports a custom react hook that can be used to listen to the current device mode.
 */
export class LayoutHandler {

    static listen() {

        /**
         * Update the font-size by using a custom resize function.
         */
        let resize = function(e) {
            if (!window) return;

            let [mobile, tablet, desktop] = LayoutHandler.getBreakpoint(window.innerWidth, window.innerHeight);
        
            let size = '16px';
            document.getElementsByTagName('html')[0].style.fontSize = size;


            document.body.classList.remove('desktop')
            document.body.classList.remove('tablet')
            document.body.classList.remove('mobile')

            if (mobile) document.body.classList.add('mobile')
            if (tablet) document.body.classList.add('tablet')
            if (desktop) document.body.classList.add('desktop')
        }

        if (typeof window == "undefined") return;
        window.removeEventListener('resize', resize, {passive: true})
        window.addEventListener('resize', resize, {passive: true})
        resize();

    }

    static getBreakpoint(width, height) {
        let asp = width / height;
        let mobile = false;
        let tablet = false;
        let desktop = false;
        if (width < settings.breakpoints.mobile.width || asp < settings.breakpoints.mobile.aspectRatio) {
            mobile = true;
        } else if (width < settings.breakpoints.tablet.width || asp < settings.breakpoints.tablet.aspectRatio) {
            tablet = true;
        } else {
            desktop = true;
        }
        return [ mobile, tablet, desktop ]
    }

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


/**
 * React hook that will define mobile, tablet and desktop booleans to be used
 * in components as a method to change the structure depending on the current
 * device screen size. Uses the breakpoints defined in the settings object.
 * 
 * Return format: [mobile, tablet, desktop]
 */
export function useDevices() {
    const [width, height] = useWindowSize();
    return LayoutHandler.getBreakpoint(width, height);
}