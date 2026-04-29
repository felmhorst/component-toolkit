import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import {Cursor} from './Cursor';
import {Card} from "@/components/ui/Card/Card";
import {Button} from "@/components/ui/Button/Button";

const meta = {
    title: 'Animations/Cursor',
    component: Cursor,
    parameters: {
        layout: 'centered',
    },
    args: {},
    tags: ['autodocs'],
    render: (args) => (
        <>
            <Cursor/>
            <Button label={"Button"}/>
        </>
    )
} satisfies Meta<typeof Cursor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};