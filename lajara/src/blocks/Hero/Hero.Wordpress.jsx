import React from 'react'
import { Hero } from '..'
import { getImageSize, loadImage } from 'util/Utils'


export default function HeroWordpress({ data }) {
    
    return <Hero 
        image = {{src : getImageSize(data.image, 'large'), alt : data.image.alt && data.image.alt}}
        content = {data.text}
        buttons = {data.buttons && data.buttons.map(b => {
            return {
                type : b.style,
                label : b.label,
                link : b.link
            }
        })}
    />
}
