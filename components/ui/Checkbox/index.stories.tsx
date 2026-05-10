import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Checkbox } from './index';
import { Field } from '../Field';

const meta = {
    title: 'UI/Checkbox',
    component: Checkbox,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};

export const WithField: Story = {
    render: () => (
        <Field label="Accept terms" hint="You must accept the terms to continue">
            <Checkbox />
        </Field>
    ),
};

export const WithFieldError: Story = {
    render: () => (
        <Field label="Accept terms" isRequired error="You must accept the terms">
            <Checkbox />
        </Field>
    ),
};