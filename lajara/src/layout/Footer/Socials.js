import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { getImageSize, loadImage } from 'util/Utils'
import Link from 'next/link'

export default function Socials({socials}) {
    
    
    return (
        <Style className = "socials-container">
            {socials?.map((s) => (
                <Link href = {s.link} key = {JSON.stringify(s)}>
                    <a className='social'>
                        <Image 
                            src = {getImageSize(s.image, 'large')}
                            width = {20}
                            height = {20}
                            priority = {false}
                            loader = {loadImage}
                            objectFit = {'contain'}
                        />
                    </a>
                </Link>
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