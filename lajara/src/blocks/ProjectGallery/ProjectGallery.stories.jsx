import React from 'react'
import { ProjectGallery } from './ProjectGallery'

export default {
    title: "2. Blocks / ProjectGallery",
    component: "ProjectGallery",
    parameters: {
        layout: 'fullscreen'
    }
}

const Template = (args, { globals }) => <ProjectGallery {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: 'Våra bostadsprojekt',
    categories: [
        {
            id: 1,
            name: 'Alla'
        },
        {
            id: 2,
            name: 'Till salu'
        },
        {
            id: 3,
            name: 'Kommande'
        },
        {
            id: 4,
            name: 'Slutsålda'
        },
    ],
    projects: [
        {
            id: 1,
            link: '/',
            status: 'comming-soon',
            type: 'Radhus',
            name: 'Kista City',
            city: 'Stockholm',
            image: {
                src: 'https://server03.blackpixel.se/~lajara/wp-content/uploads/2022/10/Rectangle-8.jpg',
                alt: 'alt',
            },
            excerpt: '11 centralt belägna radhus i uppsala, intresseanmälan är öppen.'
        },
        {
            id: 2,
            link: '/',
            status: 'sold',
            type: 'Radhus',
            name: 'Kista City',
            city: 'Stockholm',
            image: {
                src: 'https://server03.blackpixel.se/~lajara/wp-content/uploads/2022/10/Rectangle-8.jpg',
                alt: 'alt',
            },
            excerpt: '11 centralt belägna radhus i uppsala, intresseanmälan är öppen.'
        },
        {
            id: 3,
            link: '/',
            status: 'on-sale',
            type: 'Villa',
            name: 'Kista City',
            city: 'Stockholm',
            image: {
                src: 'https://server03.blackpixel.se/~lajara/wp-content/uploads/2022/10/Rectangle-8.jpg',
                alt: 'alt',
            },
            excerpt: '11 centralt belägna radhus i uppsala, intresseanmälan är öppen.'
        },
        {
            id: 4,
            link: '/',
            status: 'comming-soon',
            type: 'Radhus',
            name: 'Kista City',
            city: 'Stockholm',
            image: {
                src: 'https://server03.blackpixel.se/~lajara/wp-content/uploads/2022/10/Rectangle-8.jpg',
                alt: 'alt',
            },
            excerpt: '11 centralt belägna radhus i uppsala, intresseanmälan är öppen.'
        },
    ],
    showAll: {
        label: 'Visa alla',
        link: '/projekt'
    }
};