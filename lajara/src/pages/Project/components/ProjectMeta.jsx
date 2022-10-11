import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ProjectMeta = ({ meta }) => {

    return (
        <Style className={`contained`}>
            <div className="content">
                {meta?.filter(m => m?.value != undefined && m?.value != '').map((m, index) => (
                    <Fragment key={JSON.stringify(m)}>
                        <div className="meta">
                            <b>{m.label}:</b> {m.value}
                        </div>

                        {((index + 1) % 4 == 0 && index != meta.length - 1) && <div className="div" style={{display: 'none'}} />}

                    </Fragment>
                ))}
            </div>
        </Style>
    )
}

const Style = styled.section`

    position: relative;
    width: 100%;
    height: 0;
    

    .content {
        width: 100%;
        transform: translateY(-50%);
        background-color: black;
        color: white;
        padding: 3rem;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
    }

    .desktop & {
        .meta {
            position: relative;
        }

        .div {
            display: block !important;
            grid-column: 1 / span 4;
            height: 1px;
            background: rgba(255, 255, 255, 0.4);
        }
    }


    .tablet & {
        height: unset;
        background-color: var(--color-secondary);
        margin-bottom: -8rem;
        .content {
            transform: translateY(-50%);
            grid-template-columns: repeat(2, 1fr);
            padding: 2rem;
        }
    }


    .mobile & {
        height: unset;
        margin-bottom: -5rem;
        transform: translateY(0rem);
        .content {
            transform: translateY(-5rem);
            grid-template-columns: repeat(1, 1fr);
            padding: 2rem;
            position: relative;
            z-index: 1;

            &:before {
                content: '';
                position: absolute;
                top: 5rem;
                left: -1rem;
                width: 100vw;
                height: calc(101% - 5rem);
                background-color: var(--color-secondary);
                z-index: -1;
            }

            &:after {
                content: '';
                position: absolute;
                top: 2rem;
                left: 0rem;
                width: 100%;
                height: calc(100% - 2rem);
                background-color: black;
                z-index: -1;
            }
        }
    }

`

export { ProjectMeta }