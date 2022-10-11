import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

/**
 * Button component used for all buttons except links.
 */
const Button = ({ 
    children,
    color = 'black',
    ...rest
}) => {

    return (
        <Style className={`${rest.className} ${color}`}>
            {children}
        </Style>
    )
}

const Style = styled.button`

`

Button.propTypes = {

    /**
     * The content of the button.
     */
    children: PropTypes.node.isRequired,


    /**
     * The color theme.
     */
    color: PropTypes.oneOf([ 'primary', 'black', 'white', 'outline-white', 'outline-black' ])
}

export { Button };