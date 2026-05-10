import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Select } from './index';
import { Option } from "@/components/ui/Select/Option";
import { Field } from '../Field';

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

export const WithField: Story = {
    render: () => (
        <Field label="Favourite animal" hint="Choose your favourite">
            <Select>
                <Option value="Kangaroo">Kangaroo</Option>
                <Option value="Elephant">Elephant</Option>
                <Option value="Tiger">Tiger</Option>
            </Select>
        </Field>
    ),
};

export const WithFieldError: Story = {
    render: () => (
        <Field label="Favourite animal" isRequired error="Please select an animal">
            <Select>
                <Option value="Kangaroo">Kangaroo</Option>
                <Option value="Elephant">Elephant</Option>
                <Option value="Tiger">Tiger</Option>
            </Select>
        </Field>
    ),
};