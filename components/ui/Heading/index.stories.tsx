import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import {Heading} from './index';

const meta = {
    title: 'UI/Heading',
    component: Heading,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        children: {
            control: "text",
        }
    },
    args: {
        children: "Hello, World!"
    },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};