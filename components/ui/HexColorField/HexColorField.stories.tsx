import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { fn } from 'storybook/test';
import {HexColorField} from './HexColorField';

const meta = {
    title: 'UI/HexColorField',
    component: HexColorField,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {
        placeholder: "#FFFFFF"
    },
} satisfies Meta<typeof HexColorField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};