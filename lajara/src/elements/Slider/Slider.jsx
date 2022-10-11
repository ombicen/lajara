import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import rangeSlider from 'range-slider-input';

const Slider = ({ options, ...rest }) => {

    const ref = useRef()

    useEffect(() => {
        if (ref.current) {
            rangeSlider(ref.current, options)
        }
    }, [ref])

    return (
        <Style ref={ref} {...rest} />
    )
}

const Style = styled.div`
    .range-slider__range {
        background-color: black;
    }

    .range-slider__thumb {
        background-color: white;
        border: solid 4px black;
    }
`

Slider.propTypes = {

}

export { Slider }