import React from 'react'
import styled from 'styled-components'
import {
    Box,
    Container,
    Link,
    Typography
  } from "@mui/material";

import Input from '../../elements/Input';



export default function Newsletter({data}) {


    return (
        <Style className = "newsletter">
            <Container className = "wrapper">
                <Typography className="title" variant="body2">{data.label}</Typography>
                <Input />
                <div className = "text" dangerouslySetInnerHTML={{__html: data.text}} />
            </Container>
        </Style>
    )
}

const Style = styled.div`
    background-color: #1F1F1F;
    grid-column: span 2;
    padding: 1.5rem;

    .title {
        color: white;
        font-weight: 700;
        font-size: 17px;
    }


    .text {
        font-size: 12px;
        color: white;
        opacity: 0.7;
    }

    .wrapper {
        & > *:not(:last-child) {
            margin-bottom: 1rem;
        }
    }
`