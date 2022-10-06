import React from 'react'
import styled from 'styled-components'
import Arrow from './Icons/Arrow.svg'


export const Icons = {
    Arrow
}

export default function Icon({className, color, type, ...rest}) {

    return (
        <Style className={`icon ${className}`} style={{'color': color, ...rest?.style || {}}} {...rest}>
            {typeof type == 'function' && type()}
        </Style>
    )
}

const Style = styled.div`

    display: inline-flex;
    font-size: 1em;

    svg {
        width: 1em !important;
        height: 1em !important;
    }

    svg {
        *[fill] { fill: currentColor }
        *[stroke] { stroke: currentColor }
    }
`