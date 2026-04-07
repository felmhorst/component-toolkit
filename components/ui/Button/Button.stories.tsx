import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { fn } from 'storybook/test';
import {Button, ButtonColor, ButtonTheme} from './Button';
import React from "react";

const meta = {
    title: 'UI/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
    },
    args: {
        label: "Button",
        color: "primary",
        theme: "primary",
        onClick: fn()
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};

export const AllThemes: Story = {
    args: {},
    render: (args) => (
       <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px"}}>
           {["primary", "danger", "warning", "success"].map((color) => (
               <React.Fragment key={color}>
                   {["primary", "secondary"].map((theme) => (
                        <Button
                           key={`button-${theme}-${color}`}
                           {...args}
                           theme={theme as ButtonTheme}
                           color={color as ButtonColor}/>
                   ))}
               </React.Fragment>

           ))}
       </div>
    )
}