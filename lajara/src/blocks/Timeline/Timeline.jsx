import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useWindowSize } from 'src/utils/LayoutHandler'
import Image from 'next/image'

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
                {html && <div className="text" dangerouslySetInnerHTML={{__html: html}} />}
            </div>

            <div className="scrollable" style={{paddingLeft: `${padding}px`}}>

                <div className="container">


                    {items?.map(item => (
                        <div className="item" key={JSON.stringify(item)}>
                            
                            <div className="top">
                                {item.image?.src && <Image 
                                    src={item.image.src}
                                    alt={item.image.alt}
                                    width={200}
                                    height={200}
                                    objectFit={'contain'}
                                />}

                                <div className="line"></div>
                            </div>

                            <div className="content" dangerouslySetInnerHTML={{__html: item.content}} />
                            
                        </div>
                    ))}



                    <div className="spacer wxl"></div>

                </div>

            </div>

            
            
        </Style>
    )
}

const Style = styled.section`
    padding-top: 6rem;
    padding-bottom: 6rem;

    .text {
        max-width: 800px;
    }

    .scrollable {
        overflow-x: auto;
        padding-right: 10rem;
        margin-top: 4rem;

        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
        &::-webkit-scrollbar {
            display: none;
        }
        
        .container {
            display: flex;
            padding-right: 10rem;

            .spacer {
                flex-shrink: 0;
            }

            .item {
                flex-shrink: 0;
                width: 24rem;

                &:nth-last-child(-n+2) {
                    .top {
                        .line {
                            display: none !important;
                        }
                    }
                }

                .top {

                    display: flex;
                    align-items: center;
                    margin-right: 1rem;

                    & > span {
                        width: 8rem !important;
                        height: 8rem !important;
                    }

                    .line {
                        flex-grow: 1;
                        height: 1px;
                        background-color: var(--color-primary);
                    }
                }

                .content {
                    font-size: 14px;
                    margin-top: 2rem;
                    width: 80%;

                    h2, h3 {
                        font-size: 22px;
                        color: var(--color-primary);
                        margin-bottom: 1rem;
                    }
                }
            }
        }
    }
`

Timeline.propTypes = {

}

export { Timeline }