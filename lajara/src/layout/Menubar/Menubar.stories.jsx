import React from 'react'
import { Menubar } from './Menubar'

export default {
    title: "3. Layout / Menubar",
    component: "Menubar",
	parameters: {
        layout: 'fullscreen',
    }
}

const Template = (args, { globals }) => <Menubar {...args} />;

export const Default = Template.bind({});
Default.args = {
    menuItems: [
        {
            primary: true,
            label: 'Bostäder',
            link: '/bostäder'
        },
        {
            primary: true,
            label: 'Bolag',
            link: '/'
        },
        {
            primary: true,
            label: 'Marksförvärv',
            link: '/'
        },
        {
            primary: true,
            label: 'Om oss',
            link: '/'
        },
        {
            primary: true,
            label: 'Kontakta oss',
            link: '/'
        },
        {
            primary: false,
            label: 'Länk som är i menyn',
            link: '/'
        },
        {
            primary: false,
            label: 'Sekretess',
            link: '/'
        },
    ]
};