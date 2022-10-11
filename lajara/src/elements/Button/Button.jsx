import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

/**
 * Button component used for all buttons except links.
 */
const Button = ({ 
    children,
}) => {

    return (
        <Style>
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
}

export { Button };