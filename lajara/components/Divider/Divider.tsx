import React from 'react'
import styled from 'styled-components'
import {
    Box,
    Container,
    Link,
    Typography
  } from "@mui/material";

export default function Divider({color}) {

    return (
        <Container>
            <Style className = {`divider`} style = {{backgroundColor: color}}></Style>
        </Container>
    )
}

const Style = styled.div`
    height: 1px;
    width: 100%;
    margin: 3rem 0;
`