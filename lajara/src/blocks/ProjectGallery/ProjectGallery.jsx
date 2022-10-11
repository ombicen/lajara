import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import { limitWords } from 'src/utils/Utils'
import { useQueryParams } from 'util/Utils'


const ProjectGallery = ({ 
    title, 
    projects, 
    categories, 
    showAll
}) => {


    const [query, setQuery] = useQueryParams()
    

    const [category, setCategory] = useState(undefined)

    return (
        <Style>
            <div className="contained">
                <div className="top">
                    {title && <h2 className=" h3title">{title}</h2>}
                    
                    {categories && <div className="categories">

                            <div 
                                key={'Alla'} 
                                className={`category ${! query.status  && 'current'}`}
                                onClick={() => {
                                    setCategory(undefined)
                                    setQuery({})
                                }}
                            >
                            {'Visa Alla'}</div>
                        {categories.map(cat => (
                            <div 
                                key={cat.id} 
                                className={`category ${cat.id == category ? 'current' : ''}`}
                                onClick={() => {
                                    setCategory(cat.id)
                                    setQuery({status : cat.id})
                                }}
                            >
                            {cat.name}</div>
                        ))}
                    </div>}

                </div>


                <div className="projects">

                    {projects?.length == 0 &&
                        <h1 className='empty'>Inga projekt hittades</h1>
                    }

                    {projects?.map(project => {


                        return (
                            <Link href={project.link} key={project.id}>
                                <a className="project">
                                    {project.image?.src && <Image 
                                        src={project.image.src}
                                        alt={project.image.alt}
                                        width={700}
                                        height={500}
                                    />}

                                    <div className={`status ${project.status}`}>{{
                                        'comming-soon': 'Lanseras snart',
                                        'sold': 'Slutsålda',
                                        'on-sale': 'Försäljning pågår'
                                    }[project.status]}</div>

                                    <div className="type">{project.type}</div>

                                    <div className="floating-title h3" dangerouslySetInnerHTML={{__html: project.name}} />

                                    <div className="content">
                                        <div className="city">{project.city}</div>
                                        <div className="title h3" dangerouslySetInnerHTML={{__html: project.name}} />
                                        {project.excerpt && <div className="excerpt p small" dangerouslySetInnerHTML={{__html: limitWords(project.excerpt, 25)}}/> }
                                    </div>
                                </a>
                            </Link>                            
                        )
                    })}


                </div>

                {showAll?.label && showAll?.link && <>
                
                    <Link href={showAll.link}>
                        <a className="show-all">{showAll.label}</a>
                    </Link>
                
                </>}
            </div>
        </Style>
    )
}

const Style = styled.section`
    padding-top: 5rem;
    padding-bottom: 5rem;


    .empty {
        text-align: center;
        width: 100%;
        grid-column: span 2;
    }

    .contained {
        display: flex;
        flex-direction: column;

        .top {
            display: flex;
            align-items: center;
            justify-content: space-between;

            .categories {
                display: flex;
                align-items: center;

                .category {
                    cursor: pointer;
                    margin-left: 1rem;

                    &.current {
                        text-decoration: underline;
                    }
                }
            }
        }

        .projects {
            margin-top: 3rem;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;

            .project {
                text-decoration: none;
                color: black;
                position: relative;

                & > span {
                    filter: brightness(0.8);
                }

                .status {
                    position: absolute;
                    top: 0;
                    left: 0;
                    background-color: #FFF0DA;
                    color: #F39200;
                    padding: .5rem 2em .5em 1em;
                    min-width: 10rem;
                    border-bottom-right-radius: 10em;
                    
                    &.comming-soon {
                        background-color: #DAFFE0;
                        color: #2E8F3D;
                    }

                    &.sold {
                        background-color: #ffe0e0;
                        color: #FF6767;
                    }

                }

                .type {
                    position: absolute;
                    top: 2.5rem;
                    left: 0;
                    background-color: white;
                    padding: .5rem 2em .5em 1em;
                    border-bottom-right-radius: 10em;
                }

                .floating-title {
                    position: absolute;
                    right: 2rem;
                    bottom: 11rem;
                    color: white;
                }

                .content {
                    padding: 1rem 2rem;

                    .title {
                        font-family: 'Poppins', sans-serif;
                        font-weight: normal;
                    }

                    .excerpt {
                        max-width: 22.5rem;
                    }
                }
            }
        }

        .show-all {
            margin: auto;
            margin-top: 3rem;
            font-size: 20px;
            align-self: center;
            display: inline-block;
            color: black;
            text-transform: uppercase;
            text-decoration: none;
            position: relative;

            &:after {
                content: '';
                position: absolute;
                bottom: -.5rem;
                left: 50%;
                transform: translateX(-50%);
                width: 2rem;
                height: 2px;
                background-color: var(--color-primary);
            }
        }
    }

    .mobile & {
        .top {
            flex-direction: column;
            align-items: flex-start;

            .categories {
                margin-top: 1rem;
                flex-wrap: wrap;

                .category {
                    &:first-of-type {
                        margin-left: 0;
                    }
                }
            }
        }

        .projects {
            grid-template-columns: 1fr;
        }
    }
`

ProjectGallery.propTypes = {

}

export { ProjectGallery }