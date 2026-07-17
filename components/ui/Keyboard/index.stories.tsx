import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import {Keyboard} from "@/components/ui/Keyboard/index";

const meta = {
    title: 'UI/Keyboard',
    component: Keyboard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof Keyboard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};