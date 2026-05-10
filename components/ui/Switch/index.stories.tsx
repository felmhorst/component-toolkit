import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import {Switch} from './index';

const meta = {
    title: 'UI/Switch',
    component: Switch,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};