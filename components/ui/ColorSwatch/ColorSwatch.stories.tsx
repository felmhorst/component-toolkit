import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { fn } from 'storybook/test';
import {ColorSwatch} from './ColorSwatch';

const meta = {
    title: 'UI/ColorSwatch',
    component: ColorSwatch,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        color: {
            control: "text",
        }
    },
    args: {color: "#ff0000"},
} satisfies Meta<typeof ColorSwatch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};