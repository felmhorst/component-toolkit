import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { useState } from 'react';
import { Dialog } from './index';
import { Button } from '@/components/ui/Button';

const meta = {
    title: 'UI/Dialog',
    component: Dialog,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => {
        const [isOpen, setIsOpen] = useState(false);
        return (
            <>
                <Button label="Open Dialog" onClick={() => setIsOpen(true)} />
                <Dialog
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    title="Confirm Action"
                    footer={
                        <>
                            <Button label="Cancel" theme="secondary" onClick={() => setIsOpen(false)} />
                            <Button label="Confirm" onClick={() => setIsOpen(false)} />
                        </>
                    }>
                    <p>Are you sure you want to proceed? This action cannot be undone.</p>
                </Dialog>
            </>
        );
    },
};

export const NoTitle: Story = {
    render: () => {
        const [isOpen, setIsOpen] = useState(false);
        return (
            <>
                <Button label="Open Dialog" onClick={() => setIsOpen(true)} />
                <Dialog
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    aria-label="Confirmation dialog"
                    footer={
                        <Button label="Close" onClick={() => setIsOpen(false)} />
                    }>
                    <p>A dialog without a title. The X button is still present in the top right.</p>
                </Dialog>
            </>
        );
    },
};

export const LongContent: Story = {
    render: () => {
        const [isOpen, setIsOpen] = useState(false);
        return (
            <>
                <Button label="Open Dialog" onClick={() => setIsOpen(true)} />
                <Dialog
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    title="Terms and Conditions"
                    footer={
                        <>
                            <Button label="Decline" theme="secondary" color="danger" onClick={() => setIsOpen(false)} />
                            <Button label="Accept" color="success" onClick={() => setIsOpen(false)} />
                        </>
                    }>
                    {Array.from({ length: 20 }, (_, i) => (
                        <p key={i} style={{ marginBottom: '8px' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    ))}
                </Dialog>
            </>
        );
    },
};
