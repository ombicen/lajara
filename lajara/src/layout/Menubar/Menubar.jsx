import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Logo } from 'src/elements'
import Link from 'next/link'
import { useDevices } from 'src/utils/LayoutHandler'

const Menubar = ({ menuItems = [] }) => {

    const [mobile, tablet] = useDevices()

    const primaryItems = menuItems?.filter(m => m.primary == true)
    const sidebarItems = menuItems?.filter(m => (mobile || tablet) ? true : m.primary == false)

    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <Style className={`menubar ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
            <div className="contained">
                <Logo />
                <div className="links primary">
                    {primaryItems?.map((item) => (
                        <Link href={item.link} key={JSON.stringify(item)}>
                            <a>{item.label}</a>
                        </Link>
                    ))}
                </div>
                <div className="menubutton" onClick={() => setSidebarOpen(!sidebarOpen)}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>

            <div className="overlay" onClick={() => setSidebarOpen(false)}></div>

            <div className="sidebar">

                <div className="close" onClick={() => setSidebarOpen(false)}>
                    <div></div>
                    <div></div>
                </div>

                <div className="links">
                    {sidebarItems?.map((item) => (
                        <Link href={item.link} key={JSON.stringify(item)}>
                            <a>{item.label}</a>
                        </Link>
                    ))}
                </div>

            </div>
        </Style>
    )
}

const Style = styled.section`

    color: white;
    padding: 1em 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 50;

    .contained {
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        align-items: center;

        .logo {
            color: currentColor;

            .mobile &, .tablet & {
                width: 125px;
            }
        }

        .links {
            a {
                color: currentColor;
                text-decoration: none;

                &:not(:last-of-type) {
                    margin-right: 1em;
                }
            }

            .mobile &, .tablet & {
                display: none;
            }
        }

        .menubutton {

            font-size: 2.5em;

            justify-self: end;
            width: 1em;
            height: 1em;

            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: flex-end;

            div {
                width: 100%;
                height: 2px;
                background-color: currentColor;

                &:nth-child(2) {
                    width: 75%;
                }

                &:nth-child(3) {
                    width: 50%;
                }
            }


        }

        .mobile &, .tablet & {
            grid-template-columns: 1fr 1fr;
        }
    }

    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: black;
        z-index: 50;
        opacity: 0;
        transition: opacity 500ms;
        pointer-events: none;
    }

    .sidebar {
        background-color: white;
        position: fixed;
        width: 25rem;
        max-width: 100vw;
        height: 100vh;
        top: 0;
        right: 0rem;
        z-index: 60;
        transition: transform 500ms;
        transform: translateX(100%);
        display: flex;
        flex-direction: column;
        padding: 1rem;

        .close {
            cursor: pointer;
            font-size: 2.5rem;
            width: 1em;
            height: 1em;
            position: relative;
            align-self: flex-end;

            div {
                width: 100%;
                height: 2px;
                background-color: black;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%) rotate(45deg);

                &:nth-child(2) {
                    transform: translate(-50%, -50%) rotate(-45deg);
                }
            }
        }

        .links {
            display: flex;
            flex-direction: column;
            padding-top: 1rem;

            a {
                color: black;
                text-decoration: none;
                border-bottom: 1px #909090 solid;
                width: 100%;
                padding: 1em;
            }
        }
    }

    &.sidebar-open {
        .overlay {
            opacity: 0.7;
            pointer-events: all;
        }

        .sidebar {
            transform: translateX(0%);
        }
    }
`

Menubar.propTypes = {

}

export { Menubar }