import React from 'react'
import { Hero } from '..'
import { getImageSize, loadImage } from 'util/Utils'
import { Timeline } from './Timeline'


export default function TimelineWordpress({ data }) {
    
    return <Timeline 
        html={data.text}
        items={data.items.map(item => {
            return {
                content: item.content,
                image: {
                    src: item.icon ? getImageSize(item.icon, 'medium') : null,
                    alt: item.icon?.alt
                }
            }
        })}
    />
}
