import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import {PageLayout} from './PageLayout';

const meta = {
    title: 'Layout/PageLayout',
    component: PageLayout,
    parameters: {
        layout: 'fullscreen',
    },
    args: {
    },
    tags: ['autodocs'],
} satisfies Meta<typeof PageLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};