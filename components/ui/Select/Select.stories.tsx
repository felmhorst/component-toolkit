import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { fn } from 'storybook/test';
import {Select} from './Select';
import {Option} from "@/components/ui/Select/Option";

const meta = {
    title: 'UI/Select',
    component: Select,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
    render: (args) => (
        <Select {...args}>
            <Option value={"Kangaroo"}>Kangaroo</Option>
            <Option value={"Elephant"}>Elephant</Option>
            <Option value={"Tiger"}>Tiger</Option>
        </Select>
    )
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};