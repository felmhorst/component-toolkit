import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import {TextField} from './index';

const meta = {
    title: 'UI/TextField',
    component: TextField,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
    },
    args: {
        placeholder: "Placeholder"
    },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};