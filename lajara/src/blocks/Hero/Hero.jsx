import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

const Hero = ({ image, content, buttons }) => {

    return (
        <Style>
            {image?.src && <Image 
                width={1920}
                height={1080}
                src={image.src}
                alt={image.alt}
                objectFit={'cover'}
                priority={true}
            />}

            <div className="contained extra-small">
                {content && <div className="content" dangerouslySetInnerHTML={{__html: content}} />}

                {buttons && <div className="buttons">
                    {buttons.map(b => (
                        <Link href={b.link} key={JSON.stringify(b)}>
                            <a className={`button ${b.type}`}>{b.label}</a>
                        </Link>
                    ))}
                </div>}
            </div>
        </Style>
    )
}

const Style = styled.section`
    background-color: var(--color-light-gray);
    padding-top: 6rem;
    padding-bottom: 6rem;
    min-height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
        z-index: 1;
    }

    .content {
        text-align: center;
    }

    .buttons {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        margin-top: 2rem;

        .button {
            &:not(:last-of-type) {
                margin-right: 1em;
            }
        }

        .mobile & {
            flex-direction: column;

            .button {
                &:not(:last-of-type) {
                    margin-right: 0;
                    margin-bottom: 1em;
                }
            }
        }
    }

    .mobile & {
        min-height: 80vh;
    }
`

export { Hero }