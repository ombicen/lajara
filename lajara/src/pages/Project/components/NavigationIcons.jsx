import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const NavigationIcons = ({  }) => {

    return (
        <Style>
            <li><Link href="#summary"><a>Översikt</a></Link></li>
            <li><Link href="#bostader"><a>Bostäder</a></Link></li>
            <li><Link href="#map"><a>Karta</a></Link></li>
            <li><Link href="#process"><a>Köpprocess</a></Link></li>
        </Style>
    )
}

const Style = styled.ul`

    padding: 0;
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    li {
        list-style: none;
        display: flex;
        align-items: center;
        margin-right: 1.5rem;

        a {
            color: white;
            text-decoration: none;
        }

        &:hover {
            text-decoration: underline;
        }

        &:before {
            content: '';
            display: inline-block;
            height: 1.2em;
            width: 1.2em;
            margin-right: 0.5rem;
            background-image: url("/assets/images/info-icon.png");
            background-size: contain;
        }

    }

`

export { NavigationIcons }