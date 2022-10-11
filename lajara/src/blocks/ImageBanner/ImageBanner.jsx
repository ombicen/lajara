import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Image from 'next/image'

const ImageBanner = ({ image, html, textColor = 'white' }) => {

    return (
        <Style className={`color-${textColor}`}>
            
            {image?.src && <Image 
                width={1920}
                height={500}
                src={image.src}
                alt={image.alt}
                objectFit={'cover'}
            />}

            <div className="contained extra-small">
                <div className="text" dangerouslySetInnerHTML={{__html: html}} />
            </div>


        </Style>
    )
}

const Style = styled.section`

    min-height: 20rem;
    padding-top: 5rem;
    padding-bottom: 5rem;
    position: relative;

    &.color-white {
        color: white;
    }

    &.color-black {
        color: black;
    }

    & > span {
        position: absolute !important;
        top: 0 !important;
        left: 0 !important;
        width: 100% !important;
        height: 100% !important;
    }

    .text {
        position: relative;
        z-index: 1;
        text-align: center;
    }

`

ImageBanner.propTypes = {

}

export { ImageBanner }