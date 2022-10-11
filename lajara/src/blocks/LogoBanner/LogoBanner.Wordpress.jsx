import React from 'react'
import { LogoBanner } from '..'
import { getImageSize, loadImage } from 'util/Utils'


export default function LogoBannerWordpress({ data }) {
    
    return <LogoBanner 
        title = {data.title}
        logos = {data.logos.map((l) => {
            return {
                link : l.link,
                imageSrc : getImageSize(l.logo, 'large'),
                imageAlt : l.logo.alt && l.logo.alt
            }
        })}
    />
}
