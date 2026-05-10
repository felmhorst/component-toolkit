import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { PasswordField } from './index';
import { Field } from '../Field';

const meta = {
    title: 'UI/PasswordField',
    component: PasswordField,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {
        placeholder: "Placeholder"
    },
} satisfies Meta<typeof PasswordField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};

export const WithField: Story = {
    render: () => (
        <Field label="Password" hint="At least 8 characters">
            <PasswordField placeholder="••••••••" />
        </Field>
    ),
};

export const WithFieldError: Story = {
    render: () => (
        <Field label="Password" isRequired error="Password must be at least 8 characters">
            <PasswordField placeholder="••••••••" />
        </Field>
    ),
};