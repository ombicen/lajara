import React from 'react'
import styled from 'styled-components'
import Icon, {Icons} from './Icon'
export default function Input({...rest}) {

    return (
        <Style className = "input-container" {...rest}>
            <input type = "text" className='newsletter-input' />
            <Icon type = {Icons.Arrow} color = {'white'}/>
        </Style>
    )
}

const Style = styled.div`

    
        display: flex;
        align-items: center;
    

    .icon {
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: black;
        cursor: pointer;

        svg {
            width: 28px;
            height: 28px;
        }
    }
    input {
        width: 100%;
        min-height: 40px;
        outline: none;
        border: none;
        font-size: 16px;
        border-radius: 0;
        padding: 10px;
    }
`