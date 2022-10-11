import React from 'react'
import { SplitScreen, SplitScren } from '..'
import { getImageSize, loadImage } from 'util/Utils'


export default function SplitScreenWordpress({ data }) {
    
    return <SplitScreen 
        image = {
            {
                src : getImageSize(data.image, 'large'),
                alt : data.image.alt && data.image.alt
            }
        }
        content = {data.text}
        button = {{label : data.button.label, link : data.button.link}}
        alignment = {data.aligned}
    />
}
