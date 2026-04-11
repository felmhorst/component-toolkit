import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import {GridBackground} from './GridBackground';

const meta = {
    title: 'Backgrounds/GridBackground',
    component: GridBackground,
    parameters: {
        layout: 'fullscreen',
    },
    args: {
        style: {minHeight: "600px"},
    },
    tags: ['autodocs'],
} satisfies Meta<typeof GridBackground>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};