import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Newsletter from './Newsletter'
import Divider from './Divider'
import { loadImage } from 'util/Utils'
import Image from 'next/image'
import Socials from './Socials'


export default function Footer({ data, logo }) {
    console.log(data);
    let menus = data.footer.menus


    return (
        <Style className="footer">
            <div className='contained'>
                <div className="nav">
                    {menus && menus.map((m) => (
                        <>
                            <div className='footer-column' key={JSON.stringify(m)}>
                                {m.menu.title &&
                                    <div className='h5' dangerouslySetInnerHTML={{ __html: m.menu.title }} />
                                }

                                <ul className='links'>
                                    {m.menu.links.map((l) => {
                                        if (l.link !== '') {
                                            return (
                                                <Link key={JSON.stringify(l)} href={l.link}>
                                                    <a className='footer-item'>{l.text}</a>
                                                </Link>
                                            )
                                        } else {
                                            return (
                                                <p key={JSON.stringify(l)} className='footer-item'>{l.text}</p>
                                            )
                                        }
                                    })}
                                </ul>
                            </div>
                        </>
                    ))}
                    <Newsletter data={data} />
                </div>
                <Divider color={'#1F1F1F'} />
                <div className='low-footer'>
                    <div className='logo'>
                        <Image
                            src={logo && logo}
                            width={150}
                            height={50}
                            priority={false}
                            loader={loadImage}
                            objectFit={'contain'}
                        />
                    </div>
                    <div className='low-footer-navigation'>
                        <div className='container'>
                            {data?.terms_and_conditions?.map((l) => {
                                return (
                                    <Link key={JSON.stringify(l)} href={l.link}>
                                        <a className='term'>
                                            {l.label}
                                        </a>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                    <Socials socials={data.socials} />
                </div>
            </div>
        </Style>
    )
}

const Style = styled.div`


--padding: 5rem 0;

background-color: var(--color-black);
padding:  var(--padding);

.nav {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 4rem;


    .mobile & {
        grid-template-columns: 1fr;
    }


    .footer-column {

        .h5 {
            color: white;
            font-weight: 700;
            margin-bottom: 1.5rem;
        }

        a {
            display: block;
            text-decoration: none;
        }


        ul {
            padding-left: 0;

             & > *:not(:last-child) {
                margin-bottom: 0.5rem;
             }


            * {
                color: white;
            }
        }
    }


    .newsletter {
        background-color: #1F1F1F;
        padding: 2rem;
        grid-column: span 2;


        .mobile & {
            grid-column: span 1; 
        }


        .h5, .text {
            color: var(--color-white);
        }


        .box {
            & > *:not(:last-child) {
                margin-bottom: 10px;
            }
        }


        .input-container {
            display: flex;
            align-items: center;

            input {
                width: 100%;
                outline: none;
                min-height: 50px;
            }

            .icon {
                cursor: pointer;
                color: white;
                width: 50px;
                height: 50px;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: var(--color-black);

                svg {
                    width: 20px;
                    height: 20px;
                }
            }
        }


        .text {

            * {
                font-size: 13px;
            }
        }
    }
}


.low-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .mobile & {
        flex-direction: column;

        & > *:not(:last-child) {
            margin-bottom: 1.7rem;
        }
    }

    .low-footer-navigation {
        a {
            color: var(--color-white);
            text-decoration: none;

            &:hover {
                text-decoration: none;
            }


            &:not(:last-child) {
                margin-right: 20px;
            }
        }
    }
}
`