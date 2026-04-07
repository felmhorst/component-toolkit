import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { fn } from 'storybook/test';
import {ColorSlider2D} from './ColorSlider2D';

const meta = {
    title: 'UI/ColorSlider2D',
    component: ColorSlider2D,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof ColorSlider2D>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};