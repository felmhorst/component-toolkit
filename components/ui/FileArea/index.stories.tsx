import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { FileArea } from './index';

const meta = {
    title: 'UI/FileArea',
    component: FileArea,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof FileArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithAcceptedTypes: Story = {
    args: {
        acceptedTypes: ['image/*', '.pdf'],
    },
};

export const Multiple: Story = {
    args: {
        multiple: true,
    },
};

export const Playground: Story = {
    args: {
        acceptedTypes: [],
        multiple: false,
    },
};
