import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const SplitScreen = ({ image, content, button, alignment = 'left' }) => {

    return (
        <Style className={`block split-screen align-${alignment}`}>
            <div className="contained">
                <div className="image">
                    {image?.src && <Image 
                        src={image.src}
                        alt={image.alt}
                        width={500}
                        height={500}
                        objectFit={'contain'}
                    />}
                </div>

                <div className="content">
                    {content && <div className="text" dangerouslySetInnerHTML={{__html: content}} />}

                    {button && <Link href={button.link}>
                        <a className={`button`}>{button.label}</a>
                    </Link>}
                </div>
            </div>
        </Style>
    )
}

const Style = styled.section`

    padding-top: 4rem;
    padding-bottom: 4rem;

    .contained {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
        align-items: center;

        .image {
            span {
                display: block !important;
            }
        }

        .content {
            display: flex;
            flex-direction: column;

            .button {
                margin-top: 2rem;
                align-self: flex-start;
            }

        }

        .tablet &, .mobile & {
            grid-template-columns: 1fr;
        }
    }

    .desktop &.align-right {
        .contained {
            .content {
                order: -1;
            }
        }
    }

`

export { SplitScreen }