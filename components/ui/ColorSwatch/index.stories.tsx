import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import {ColorSwatch} from './index';

const meta = {
    title: 'UI/Input/ColorSwatch',
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