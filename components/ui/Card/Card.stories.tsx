import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import {Card} from './Card';

const meta = {
    title: 'UI/Card',
    component: Card,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    render: () => (
        <Card>
            <h2>Content goes here</h2>
        </Card>
    )
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};