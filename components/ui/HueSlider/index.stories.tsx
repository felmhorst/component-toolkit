import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import {HueSlider} from './index';

const meta = {
    title: 'UI/HueSlider',
    component: HueSlider,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof HueSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};