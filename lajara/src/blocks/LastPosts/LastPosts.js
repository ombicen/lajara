import React from 'react'
import styled from 'styled-components'
import BlockRenderer from 'theme/BlockRenderer'
import Link from 'next/link'
import Image from 'next/image'
import { limitWords } from 'src/utils/Utils'


export default function LastPosts({data}) {

    return (
        <Style>
            <div className='contained'>
                {data.title && <div className="h2 title" dangerouslySetInnerHTML={{__html: data.title}} />}
                <div className='last-posts'>
                    {data?.data_posts?.map((p, index) => {
                        return (
                            <Link key = {index} href = {`/aktuellt/${p.slug}`}>
                                <a className='card'>
                                    {p?._embedded['wp:featuredmedia'] && <Image 
                                        src = {p?._embedded['wp:featuredmedia']?.[0].source_url}
                                        alt = {p?._embedded['wp:featuredmedia']?.[0].alt_text}
                                        width={500}
                                        height={350}
                                        objectFit={'cover'}
                                    />}
                                    <p className="small category" dangerouslySetInnerHTML={{__html: p?._embedded['wp:term']?.[0]?.[0]?.name}} />
                                    {p.title.rendered && <div className="h3 title" dangerouslySetInnerHTML={{__html: p.title.rendered}} />}
                                    {p.excerpt.rendered && <div className="excerpt" dangerouslySetInnerHTML={{__html: limitWords(p.excerpt.rendered, index == 0 ? 30 : 15)}} />}
                                </a>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </Style>
    )
}

const Style = styled.div`

    --padding: 4rem 0;
    padding: var(--padding);


    .h2 {
        text-align: center;
        margin-bottom: 4rem;
    }

    .last-posts {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 3.5rem;

        .card {
            text-decoration: none;
            color: var(--color-black);

            .category {
                margin-top: 10px;
                color: #7A7A7A;
                font-weight: 500;
                text-transform: uppercase;
            }

            .h3 {
                font-family: var(--font-primary);
                font-weight: 500;
                margin-bottom: 20px;
            }
        }
    }


    .mobile & {
        .last-posts {
            grid-template-columns: 1fr;
        }
    }
`