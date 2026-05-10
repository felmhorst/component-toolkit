import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { TextArea } from './index';
import { Field } from '../Field';

const meta = {
    title: 'UI/TextArea',
    component: TextArea,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        autoresize: {
            description: "Automatically increases the height of the input field when typing."
        }
    },
    args: {
        placeholder: "Placeholder",
        autoresize: true,
    },
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};

export const WithField: Story = {
    render: () => (
        <Field label="Bio" hint="Tell us a little about yourself">
            <TextArea placeholder="I'm a developer who..." />
        </Field>
    ),
};

export const WithFieldError: Story = {
    render: () => (
        <Field label="Bio" isRequired error="Bio cannot be empty">
            <TextArea placeholder="I'm a developer who..." />
        </Field>
    ),
};