import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Image from 'next/image'

const ProjectHero = ({ title, image, children }) => {

    return (
        <Style>

            {image?.src && <Image 
                width={1920}
                height={1080}
                src={image.src}
                alt={image.alt}
                objectFit={'cover'}
                priority={true}
                loading={'eager'}
            />}


            <div className="contained">
                <h1 dangerouslySetInnerHTML={{__html: title}} />
                <div className="spacer m"></div>
                {children}
            </div>

        </Style>
    )
}

const Style = styled.section`
    background-color: var(--color-light-gray);
    padding-top: 16rem;
    padding-bottom: 8rem;
    min-height: 700px;
    position: relative;
    color: white;

    & > span {
        display: block !important;
        position: absolute !important;
        top: 0 !important;
        left: 0 !important;
        width: 100% !important;
        height: 100% !important;

        filter: brightness(0.5);
    }

    .contained {
        position: relative;
        z-index: 1;
    }

    .mobile & {
        min-height: 80vh;
    }
`

ProjectHero.propTypes = {

}

export { ProjectHero }