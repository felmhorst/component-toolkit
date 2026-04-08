
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import {LoadingSpinner} from './LoadingSpinner';

const meta = {
    title: 'UI/LoadingSpinner',
    component: LoadingSpinner,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
    },
    args: {
    },
} satisfies Meta<typeof LoadingSpinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};