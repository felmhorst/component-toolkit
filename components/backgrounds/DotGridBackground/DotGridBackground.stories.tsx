import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import {DotGridBackground} from './DotGridBackground';

const meta = {
    title: 'Backgrounds/DotGridBackground',
    component: DotGridBackground,
    parameters: {
        layout: 'fullscreen',
    },
    args: {
        style: {minHeight: "600px"},
    },
    tags: ['autodocs'],
} satisfies Meta<typeof DotGridBackground>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};