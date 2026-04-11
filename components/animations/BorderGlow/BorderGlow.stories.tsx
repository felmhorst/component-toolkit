import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import {BorderGlow} from './BorderGlow';
import {Card} from "@/components/ui/Card/Card";

const meta = {
    title: 'Animations/BorderGlow',
    component: BorderGlow,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    render: (args) => (
        <BorderGlow {...args}>
            <Card>
                <h2>Hover me!</h2>
            </Card>
        </BorderGlow>
    )
} satisfies Meta<typeof BorderGlow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};