import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import {ToggleButtonGroup} from './ToggleButtonGroup';
import {ToggleButton} from "@/components/ui/ToggleButton/ToggleButton";

const meta = {
    title: 'UI/ToggleButtonGroup',
    component: ToggleButtonGroup,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {
        disabled: false,
        multiple: false,
    },
    render: (args) => (
        <ToggleButtonGroup {...args}>
            <ToggleButton value={"Left"}>
                Left
            </ToggleButton>
            <ToggleButton value={"Center"}>
                Center
            </ToggleButton>
            <ToggleButton value={"Right"}>
                Right
            </ToggleButton>
        </ToggleButtonGroup>
    )
} satisfies Meta<typeof ToggleButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};