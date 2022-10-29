import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { useWindowSize } from 'src/utils/LayoutHandler'

import Carousel from './Carousel'
import Item from './Item'
const Timeline = ({ html, items }) => {


    const ref = useRef()
    const [w, h] = useWindowSize()
    const [padding, setPadding] = useState(0)

    useEffect(() => {
        if (!ref.current) return;

        let leftPadding = Number(getComputedStyle(ref.current).paddingLeft.replace('px', ''));
        let leftPosition = ref.current.getBoundingClientRect().left;

        setPadding(leftPadding + leftPosition)
    }, [ref, w, h])



    return (
        <Style id="process">
            <div ref={ref} className="contained">
                {html && <div className="text" dangerouslySetInnerHTML={{ __html: html }} />}
            </div>



            <div className="container">

                <Carousel options={{ infinite: false, fill: false, center: false, Dots: false, Navigation: false, slidesPerPage: 1 }} >
                    {items?.map(item => (
                        <Item data={item} key={JSON.stringify(item)} />
                    ))}
                </Carousel>



                <div className="spacer wxl"></div>
            </div>






        </Style>
    )
}

const Style = styled.section`
    padding-top: 6rem;
    padding-bottom: 6rem;
    width:100%;
    overflow:hidden;
    .text {
        max-width: 800px;
    }    
        .container {
            display: flex;
            width: calc(100% - (var(--padding-side)*2));
            margin-top:60px;
            .carousel__viewport{
                padding-left:calc(((100vw - var(--contained-width-standard)) / 2) - 30px);
            }
            .spacer {
                flex-shrink: 0;
            }

           
        }
    
`

Timeline.propTypes = {

}

export { Timeline }