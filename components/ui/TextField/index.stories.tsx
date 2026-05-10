import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { TextField } from './index';
import { Field } from '../Field';

const meta = {
    title: 'UI/TextField',
    component: TextField,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
    },
    args: {
        placeholder: "Placeholder"
    },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};

export const WithField: Story = {
    render: () => (
        <Field label="Full name" hint="As it appears on your ID">
            <TextField placeholder="Jane Doe" />
        </Field>
    ),
};

export const WithFieldError: Story = {
    render: () => (
        <Field label="Full name" isRequired error="This field is required">
            <TextField placeholder="Jane Doe" />
        </Field>
    ),
};