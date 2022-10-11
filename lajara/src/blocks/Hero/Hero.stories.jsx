import React from 'react'
import { Hero } from './Hero'

export default {
    title: "2. Blocks / Hero",
    component: "Hero",
	parameters: {
        layout: 'fullscreen',
    }
}

const Template = (args, { globals }) => <Hero {...args} />;

export const Default = Template.bind({});
Default.args = {
    image: {
        src: 'https://via.placeholder.com/1920x1080',
        alt: 'Alt text'
    },
    content: `
        <p class="small">LAJARA GROUP</p>
        <h1 class="h2">Hållbara hem att leva i</h1>
        <div class="spacer m"></div>
        <p>Lajara är ett personligt fastighetsbolag som äger, förvaltar och utvecklar fastigheter långsiktigt, hållbart och med stort engagemang. Vi är inriktade på kommersiella lokaler, samhällsfastigheter och bostäder i Storstockholm och Uppsalaregionen.</p>
    `,
    buttons: [
        {
            type: 'primary',
            label: 'Hitta bostad',
            link: '#'
        },
        {
            type: 'white',
            label: 'Mer om Lajara',
            link: '#'
        },
    ]
};