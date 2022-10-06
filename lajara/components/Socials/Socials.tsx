import React from 'react'
import styled from 'styled-components'
import Image from '../../node_modules/next/image'
import { getImageSize, loadImage } from '../../util/Utils'


export default function Socials({socials}) {

    console.log(socials)
    return (
        <Style className = "socials-container">
            {socials?.map((s) => (
                <div className='social'>
                    <Image 
                        src = {getImageSize(s.image, 'large')}
                        width = {20}
                        height = {20}
                        priority = {false}
                        loader = {loadImage}
                        objectFit = {'contain'}
                    />
                </div>
            ))}
        </Style>
    )
}

const Style = styled.div`
    
        display: flex;

        & > *:not(:last-child) {
            margin-right: 30px;
        }
    
    .social {
        border: 1px solid #1F1F1F;
        border-radius: 50%;
        padding: 0.5rem;
        display: flex;
    }
`