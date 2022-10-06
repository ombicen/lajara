import React from 'react'
import styled from 'styled-components'
import Image from '../../node_modules/next/image'
import { getImageSize, loadImage } from '../../util/Utils'

export default function Logo({logo}) {

    return (
        <Style className = "logo">
            <Image 
                src = {getImageSize(logo, 'large')}
                loader = {loadImage}
                priority = {false}
                objectFit = {'contain'}
                width = {150}
                height = {50}
                alt = {logo?.alt}
            />
        </Style>
    )
}

const Style = styled.div`

`