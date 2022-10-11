import React from 'react'
import styled from 'styled-components'

export default function Fonts() {

    return (
        <Style>
            <h1>Headline 1</h1>
            <h2>Headline 2</h2>
            <h3>Headline 3</h3>
            <h4>Headline 4</h4>
            <h5>Headline 5</h5>
            <h6>Headline 6</h6>
            <p className="subtitle">Subtitle</p>
            <p>Body</p>
            <p className="body-2">Body 2</p>
            <p className="lead">Lead</p>
        </Style>
    )
}

const Style = styled.div`

`