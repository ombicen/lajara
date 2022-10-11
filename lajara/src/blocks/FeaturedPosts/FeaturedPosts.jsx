import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { limitWords } from 'src/utils/Utils'
import styled from 'styled-components'

const FeaturedPosts = ({ posts }) => {

    return (
        <Style>
            <div className="contained">
                
                {posts?.map((post, index) => (
                    <Link href={post.link} key={JSON.stringify(post)}>
                        <a className={`post`}>

                            {post.image?.src && <Image 
                                src={post.image.src}
                                alt={post.image.alt}
                                width={500}
                                height={500}
                                objectFit={'cover'}
                            />}

                            <div className="content">
                                {post.category && <p className="small category" dangerouslySetInnerHTML={{__html: post.category}} />}
                                {post.title && <div className="h3 title" dangerouslySetInnerHTML={{__html: post.title}} />}
                                {post.excerpt && <div className="excerpt" dangerouslySetInnerHTML={{__html: limitWords(post.excerpt, index == 0 ? 30 : 15)}} />}
                                <button className='outline-white'>Läs mer..</button>
                            </div>

                        </a>
                    </Link>
                ))}

            </div>
        </Style>
    )
}

const Style = styled.section`
    background-color: var(--color-secondary);
    padding-top: 6rem;
    padding-bottom: 6rem;


    .contained {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;

        .post {
            background-color: var(--color-black);
            color: var(--color-white);
            text-decoration: none;
            position: relative;

            & > span {
                position: absolute !important;
                top: 0 !important;
                left: 0 !important;
                width: 100% !important;
                height: 100% !important;
                z-index: 0;
                filter: brightness(0.4);
            }

            .content {
                position: relative;
                z-index: 10;
                padding: 2rem;
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                text-align: right;
                justify-content: center;
                height: 100%;

                .category {
                    text-transform: uppercase;
                }

                .title {
                    margin-bottom: 0.75em;
                }

                button {
                    margin-top: 1rem;
                }
            }

            &:nth-child(1) { 
                grid-row: span 2; 
                
                .content {
                    align-items: flex-start;
                    text-align: left;
                }
            }

        }
    }


    .mobile &, .tablet & {
        .contained {
            grid-template-columns: 1fr;

            .post {
                grid-row: span 1; 
                
                .content {
                    align-items: flex-start;
                    text-align: left;
                }
            }
        }
    }


`

export { FeaturedPosts }