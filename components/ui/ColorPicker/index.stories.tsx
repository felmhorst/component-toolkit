import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import {ColorPicker} from './index';

const meta = {
    title: 'UI/ColorPicker',
    component: ColorPicker,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof ColorPicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};