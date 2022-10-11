import React from 'react'
import styled from 'styled-components'

export default function Divider({color}) {

    return (
        <Style className = {`divider`} style = {{backgroundColor: color}}></Style>
    )
}

const Style = styled.div`
    height: 1px;
    width: 100%;
    margin: 3rem 0;
`