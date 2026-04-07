import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { fn } from 'storybook/test';
import {OpacitySlider} from './OpacitySlider';

const meta = {
    title: 'UI/OpacitySlider',
    component: OpacitySlider,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {
        orientation: "vertical",
    },
} satisfies Meta<typeof OpacitySlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};