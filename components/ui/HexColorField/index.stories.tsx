import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import {HexColorField} from './index';

const meta = {
    title: 'UI/Input/HexColorField',
    component: HexColorField,
    parameters: {
        layout: 'centered',
    },
    globals: {
        backgrounds: { value: "surface", grid: false }
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