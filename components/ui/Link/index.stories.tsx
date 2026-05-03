import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { fn } from 'storybook/test';
import {Link} from './index';
import React from "react";

const meta = {
    title: 'UI/Link',
    component: Link,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
    },
    args: {
        label: "Link",
        href: "#",
        onClick: fn()
    },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};