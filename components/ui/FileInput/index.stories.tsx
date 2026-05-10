import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { FileInput } from './index';
import { Field } from '@/components/ui/Field';

const meta = {
    title: 'UI/FileInput',
    component: FileInput,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof FileInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithLabel: Story = {
    args: { label: 'Upload avatar' },
};

export const WithAcceptedTypes: Story = {
    args: {
        label: 'Upload image',
        acceptedTypes: ['image/png', 'image/jpeg', '.gif'],
    },
};

export const Multiple: Story = {
    args: {
        label: 'Choose files',
        multiple: true,
    },
};

export const Disabled: Story = {
    args: {
        label: 'Choose file',
        disabled: true,
    },
};

export const WithField: Story = {
    render: (args) => (
        <Field label="Profile picture" hint="PNG or JPG, max 2MB">
            <FileInput {...args} acceptedTypes={['image/png', 'image/jpeg']} />
        </Field>
    ),
};
