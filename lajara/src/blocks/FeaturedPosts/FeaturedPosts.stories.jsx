import React from 'react'
import { FeaturedPosts } from './FeaturedPosts'

export default {
    title: "2. Blocks / FeaturedPosts",
    component: "FeaturedPosts",
    parameters: {
        layout: 'fullscreen'
    }
}

const Template = (args, { globals }) => <FeaturedPosts {...args} />;

export const Default = Template.bind({});
Default.args = {
    posts: [
        {
            category: 'Lajara Group',
            link: '/post/123',
            title: 'Hållbara hem att leva i',
            excerpt: 'Lajara är ett personligt fastighetsbolag som äger, förvaltar och utvecklar fastigheter långsiktigt, hållbart och med stort engagemang. Vi är inriktade på kommersiella lokaler, samhällsfastigheter och bostäder i Storstockholm och Uppsalaregionen.',
            image: {
                src: 'https://server03.blackpixel.se/~lajara/wp-content/uploads/2022/10/Rectangle-8.jpg',
                alt: 'Alt text'
            }
        },
        {
            category: 'Lajara Group',
            link: '/post/23',
            title: 'Hållbara hem att leva i',
            excerpt: 'Lajara är ett personligt fastighetsbolag som äger, förvaltar och utvecklar fastigheter långsiktigt, hållbart och med stort engagemang. Vi är inriktade på kommersiella lokaler, samhällsfastigheter och bostäder i Storstockholm och Uppsalaregionen.',
            image: {
                src: 'https://server03.blackpixel.se/~lajara/wp-content/uploads/2022/10/Rectangle-8.jpg',
                alt: 'Alt text'
            }
        },
        {
            category: 'Lajara Group',
            link: '/post/3',
            title: 'Hållbara hem att leva i',
            excerpt: 'Lajara är ett personligt fastighetsbolag som äger, förvaltar och utvecklar fastigheter långsiktigt, hållbart och med stort engagemang. Vi är inriktade på kommersiella lokaler, samhällsfastigheter och bostäder i Storstockholm och Uppsalaregionen.',
            image: {
                src: 'https://server03.blackpixel.se/~lajara/wp-content/uploads/2022/10/Rectangle-8.jpg',
                alt: 'Alt text'
            }
        },
    ]
};