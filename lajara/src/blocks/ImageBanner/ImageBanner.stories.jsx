import React from 'react'
import { ImageBanner } from './ImageBanner'

export default {
    title: "2. Blocks / ImageBanner",
    component: "ImageBanner",
    parameters: {
        layout: 'fullscreen'
    }
}

const Template = (args, { globals }) => <ImageBanner {...args} />;

export const Default = Template.bind({});
Default.args = {
    image: {
        src: 'https://server03.blackpixel.se/~lajara/wp-content/uploads/2022/10/Rectangle-8.jpg',
        alt: 'alt'
    },
    html: `
        <h2 class="h3">Att köpa nyproduktion.</h2>    
        <p>Att köpa en ny bostad är en härlig känsla. Det är ett stort beslut och förmodligen en av de större affärerna du kommer att göra i ditt liv. Samtidigt är det en rolig och spännande resa som vi följer med dig på, hela vägen. Att få vara delaktig i skapandet av ditt nya hem är ett av de största förtroenden vi kan få.</p>
    `
};