import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

import logo from './logo.svg'

const Logo = ({  }) => {

    return (
        <Link href={'/'} passHref>
            <Style className='logo'>
                {logo()}
            </Style>
        </Link>
    )
}

const Style = styled.a`

    display: flex;

    width: 152px;

    aspect-ratio: 151 / 51;

    color: black;

    *[fill] { fill: currentColor; }
    *[stroke] { stroke: currentColor; }
`

export { Logo }