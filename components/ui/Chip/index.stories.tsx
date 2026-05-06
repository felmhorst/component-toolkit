import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import {Chip} from './index';

const meta = {
    title: 'UI/Chip',
    component: Chip,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
    },
    args: {
        label: "Chip",
    },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};