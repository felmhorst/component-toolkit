import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Field } from './index';
import { TextField } from '../TextField';

const meta = {
    title: 'UI/Field',
    component: Field,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        label: 'Full name',
        children: <TextField placeholder="Jane Doe" />,
    },
} satisfies Meta<typeof Field>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};

export const WithHint: Story = {
    args: {
        hint: 'As it appears on your ID',
    },
};

export const WithError: Story = {
    args: {
        error: 'This field is required',
    },
};

export const Required: Story = {
    args: {
        isRequired: true,
        hint: 'This field cannot be empty',
    },
};

export const RequiredWithError: Story = {
    args: {
        isRequired: true,
        error: 'Please enter your name',
    },
};
