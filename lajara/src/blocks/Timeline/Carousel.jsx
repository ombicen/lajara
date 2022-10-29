import React, { useRef, useEffect } from "react";
import { Carousel as NativeCarousel } from "@fancyapps/ui";
import "@fancyapps/ui/dist/carousel.css";

function Carousel(props) {
    const wrapper = useRef(null);

    useEffect(() => {
        const opts = props.options || {};
        const instance = new NativeCarousel(wrapper.current, opts);

        return () => {
            instance.destroy();
        };
    });

    return (
        <div className={`carousel ${props.class || ""}`} ref={wrapper}>
            {props.children}
        </div>
    );
}

export default Carousel;