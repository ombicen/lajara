import React from 'react'
import { Hero } from '..'
import { getImageSize, loadImage } from 'util/Utils'
import { ImageBanner } from './ImageBanner'


export default function ImageBannerWordpress({ data }) {
    
    return <ImageBanner 
        html={data.text}
        image={{
            src: data.image ? getImageSize(data.image, '2048x2048') : undefined,
            alt: data.image?.alt
        }}
        textColor={data.text_color}
    />
}
