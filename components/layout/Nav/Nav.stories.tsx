import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import {Nav} from './Nav';

const meta = {
    title: 'Layout/Nav',
    component: Nav,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Nav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};