import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { fn } from 'storybook/test';
import {TextArea} from './TextArea';

const meta = {
    title: 'UI/TextArea',
    component: TextArea,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        autoresize: {
            description: "Automatically increases the height of the input field when typing."
        }
    },
    args: {
        placeholder: "Placeholder",
        autoresize: true,
    },
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};