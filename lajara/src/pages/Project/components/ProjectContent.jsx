import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Image from 'next/image'
import Fancybox from "./FancyBox";

const ProjectContent = ({ html, gallery }) => {


    return (
        <Style>
            <div className="contained">
                <div className="text" dangerouslySetInnerHTML={{ __html: html }} />

                <div className="images">
                    <Fancybox options={{ autoplay: true }}>
                        {gallery?.map((image, index) => (
                            <>
                                {index < 4 ? (
                                    <div className={"image"} data-fancybox="gallery" data-src={image.src} key={JSON.stringify(image)} >
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            width={500}
                                            height={500}
                                            objectFit={'cover'}
                                            layout={'fill'}
                                        />

                                        {(index == 3 && gallery.length > 4) && <div className="view-more">
                                            <span className="number">{gallery.length - 4}</span>
                                            <div>fler</div>
                                            <div className="arrow"></div>
                                        </div>}
                                    </div>

                                ) : (<div className={"image hidden"} data-fancybox="gallery" data-src={image.src} key={JSON.stringify(image)}>
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        width={500}
                                        height={500}
                                        objectFit={'cover'}
                                        layout={'fill'}
                                        loading={'eager'}
                                    /></div>)}
                            </>

                        ))}

                    </Fancybox>
                </div>
            </div >



        </Style >
    )
}

const Style = styled.section`
    background-color: var(--color-secondary);
    padding-top: 10rem;
    padding-bottom: 10rem;

    .text {
       
    }

    .images {
        display: grid;
        grid-template-columns: 2fr 1fr 1fr;
        gap: 1rem;

        margin-top: 4rem;

        aspect-ratio: 10 / 4;


        .image {
            display: block;
            position: relative;
            min-width: 0;
            min-height: 0;
            &.hidden{
                display:none;
            }
            & > span {
                display: block !important;
                width: 100% !important;
                height: 100% !important;
            }

            &:nth-child(1) {
                grid-column: 1 / 2;
                grid-row: 1 / span 2;
            }

            &:nth-child(2) {
                grid-column: 2 / 4;
                grid-row: 1 / span 1;
            }

            .view-more {
                cursor: pointer;
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 1;
                background: rgba(0, 0, 0, 0.8);
                color: white;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                font-weight: 100;
                font-size: 20px;

                .number {
                    font-size: 1.8em;
                }

                div:not(.arrow) {
                    text-transform: uppercase;
                    letter-spacing: .3em;
                }

                .arrow {
                    margin-top: 1em;
                    width: 4em;
                    height: 1px;
                    background: white;
                    position: relative;

                    &:after {
                        content: '';
                        display: block;
                        position: absolute;
                        right: -.3px;
                        top: 50%;
                        width: 0.5em;
                        height: 0.5em;
                        transform: translateY(-50%) rotate(-45deg);
                        border-right: solid 1px white;
                        border-bottom: solid 1px white;
                    }
                }
            }

        }
    }


    .mobile &, .tablet & {
        padding-top: 4rem;
        padding-bottom: 4rem;

        .images {
            gap: .5rem;
            aspect-ratio: 10 / 8;

            .image {
                display: block;
                &.hidden{
                    display:none;
                }
                &:nth-child(1) {
                    grid-column: 1 / span 3;
                    grid-row: 1 / span 2;
                }

                &:nth-child(2) {
                    grid-column: unset;
                    grid-row: unset;
                }

                .view-more {
                    font-size: 12px;
                }
            }
        }
    }
`

ProjectContent.propTypes = {

}

export { ProjectContent }