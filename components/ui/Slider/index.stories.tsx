import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Slider } from './index';

const meta = {
    title: 'UI/Input/Slider',
    component: Slider,
    parameters: {
        layout: 'centered',
    },
    globals: {
        backgrounds: { value: "surface", grid: false }
    },
    tags: ['autodocs'],
    argTypes: {
        orientation: {
            control: 'radio',
            options: ['horizontal', 'vertical'],
        },
    },
    args: {
        min: 0,
        max: 100,
        defaultValue: 50,
    },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};

export const Vertical: Story = {
    args: {
        orientation: 'vertical',
    },
};
