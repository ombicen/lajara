import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'

const LogoBanner = ({ title, logos }) => {

    return (
        <Style>
            <div className="contained">
                {title && <div className="h3 title" dangerouslySetInnerHTML={{__html: title}} />}
                <div className="logos">
                    {logos?.map(logo => (
                        <Link href={logo.link} key = {JSON.stringify(logo)}>
                            <a target={'_blank'}>
                                <Image 
                                    src={logo.imageSrc}
                                    alt={logo.imageAlt}
                                    width={150}
                                    height={80}
                                    objectFit={'contain'}
                                />
                            </a>
                        </Link>
                    ))}
                </div>
            </div>
        </Style>
    )
}

const Style = styled.section`

    color: var(--color-white);
    background-color: var(--color-black);
    padding-top: 1rem;
    

    .contained {
        display: flex;
        align-items: center;

        .title {
            margin-right: 2rem;
            margin-bottom: 1rem;
        }

        .logos {
            display: flex;
            align-items: center;
            flex-wrap: wrap;

            a {
                display: block !important;
                margin-bottom: 1rem;

                &:not(:last-of-type) {
                    margin-right: 1rem;
                }
                
                span {
                    display: block !important;
                    img{
                        filter: brightness(1000) grayscale(1);
                    }
                }
            }
        }

        .mobile &, .tablet & {
            flex-direction: column;
            align-items: flex-start;
        }
    }

`

export { LogoBanner }