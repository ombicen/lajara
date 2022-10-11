import React from 'react'
import { SplitScreen } from './SplitScreen'

export default {
    title: "2. Blocks / SplitScreen",
    component: "SplitScreen",
	parameters: {
        layout: 'fullscreen',
    }
}

const Template = (args, { globals }) => <SplitScreen {...args} />;

export const Default = Template.bind({});
Default.args = {
    image: {
        src: 'https://server03.blackpixel.se/~lajara/wp-content/uploads/2022/10/image-2.jpg',
        alt: 'Alt text here'
    },
    content: `
        <h2>Vårt hållbarhetsarbete</h2>
        <p>Vårt bidrag till ett mer hållbart samhälle utgår från vår långsiktighet. Att vara en fastighetsägare med evighetsperspektiv på ägandet ger oss möjlighet och incitament att arbeta med och påverka många dimensioner av hållbarhetsfrågan – såsom energianvändning, materialval, avfallshantering, transporter och arbetsmiljö för både kunder, medarbetare och leverantörer.</p>
    `,
    button: {
        label: 'Om våra bostäder',
        link: '/'
    },
    alignment: 'left'
};