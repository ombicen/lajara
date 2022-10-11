import React from "react";
import { Button } from "./Button";

export default {
    title: "1. Elements / Button",
    component: Button,
    argTypes: {
        children: {
            control: {
                type: "text",
                placeholder: "Button text",
            },
        },
    }
}

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Click me',
};
