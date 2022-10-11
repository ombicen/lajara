import React from 'react'
import { Timeline } from './Timeline'

export default {
    title: "2. Blocks / Timeline",
    component: "Timeline",
    parameters: {
        layout: 'fullscreen'
    }
}

const Template = (args, { globals }) => <Timeline {...args} />;

export const Default = Template.bind({});
Default.args = {
    html: `
        <h2 class="h3">Köpprocess</h2>
        <p>Att köpa en ny bostad är en härlig känsla. Det är ett stort beslut och förmodligen en av de större affärerna du kommer att göra i ditt liv. Samtidigt är det en rolig och spännande resa som vi följer med dig på, hela vägen. Att få vara delaktig i skapandet av ditt nya hem är ett av de största förtroenden vi kan få.</p>
    `,
    items: [
        {
            image: {
                src: 'https://server03.blackpixel.se/~lajara/wp-content/uploads/2022/10/image-10.jpg',
                alt: 'alt'
            },
            content: `
                <h3>Bokningsavtal</h3>
                När du har hittat din blivande bostad så tecknas inledningsvis ett bokningsavtal. Bokningsavtalet innebär att en specifik lägenhet blir bokad för din räkning, en bokningsavgift om 30 000 kr erläggs och fungerar som en delbetalning av köpeskillingen. Bokningsavtalet är inte bindande. Byggherren är heller inte bunden att upplåta eller färdigställa bostaden och förändring i utformning och prissättning kan förekomma.
            `
        },
        {
            image: {
                src: 'https://server03.blackpixel.se/~lajara/wp-content/uploads/2022/10/image-10.jpg',
                alt: 'alt'
            },
            content: `
                <h3>Bokningsavtal</h3>
                När du har hittat din blivande bostad så tecknas inledningsvis ett bokningsavtal. Bokningsavtalet innebär att en specifik lägenhet blir bokad för din räkning, en bokningsavgift om 30 000 kr erläggs och fungerar som en delbetalning av köpeskillingen. Bokningsavtalet är inte bindande. Byggherren är heller inte bunden att upplåta eller färdigställa bostaden och förändring i utformning och prissättning kan förekomma.
            `
        },
        {
            image: {
                src: 'https://server03.blackpixel.se/~lajara/wp-content/uploads/2022/10/image-10.jpg',
                alt: 'alt'
            },
            content: `
                <h3>Bokningsavtal</h3>
                När du har hittat din blivande bostad så tecknas inledningsvis ett bokningsavtal. Bokningsavtalet innebär att en specifik lägenhet blir bokad för din räkning, en bokningsavgift om 30 000 kr erläggs och fungerar som en delbetalning av köpeskillingen. Bokningsavtalet är inte bindande. Byggherren är heller inte bunden att upplåta eller färdigställa bostaden och förändring i utformning och prissättning kan förekomma.
            `
        },
        {
            image: {
                src: 'https://server03.blackpixel.se/~lajara/wp-content/uploads/2022/10/image-10.jpg',
                alt: 'alt'
            },
            content: `
                <h3>Bokningsavtal</h3>
                När du har hittat din blivande bostad så tecknas inledningsvis ett bokningsavtal. Bokningsavtalet innebär att en specifik lägenhet blir bokad för din räkning, en bokningsavgift om 30 000 kr erläggs och fungerar som en delbetalning av köpeskillingen. Bokningsavtalet är inte bindande. Byggherren är heller inte bunden att upplåta eller färdigställa bostaden och förändring i utformning och prissättning kan förekomma.
            `
        },
        {
            image: {
                src: 'https://server03.blackpixel.se/~lajara/wp-content/uploads/2022/10/image-10.jpg',
                alt: 'alt'
            },
            content: `
                <h3>Bokningsavtal</h3>
                När du har hittat din blivande bostad så tecknas inledningsvis ett bokningsavtal. Bokningsavtalet innebär att en specifik lägenhet blir bokad för din räkning, en bokningsavgift om 30 000 kr erläggs och fungerar som en delbetalning av köpeskillingen. Bokningsavtalet är inte bindande. Byggherren är heller inte bunden att upplåta eller färdigställa bostaden och förändring i utformning och prissättning kan förekomma.
            `
        },
    ]
};