import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import {KeyboardEditor} from "@/components/ui/Keyboard/KeyboardEditor";

const meta = {
    title: 'UI/Keyboard/KeyboardEditor',
    component: KeyboardEditor,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
    },
    args: {
    },
} satisfies Meta<typeof KeyboardEditor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};