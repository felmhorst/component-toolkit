import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import {Keyboard} from "@/components/ui/Keyboard/index";
import {KeyboardCharacterLayout, KeyboardPhysicalLayout} from "@/utility/keyboard/keys";

const meta = {
    title: 'UI/Keyboard',
    component: Keyboard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        showNumpad: {
            control: 'boolean',
        },
        showFunctionKeys: {
            control: 'boolean',
        },
        showNavigationKeys: {
            control: 'boolean',
        },
        characterLayout: {
            control: 'select',
            options: [
                KeyboardCharacterLayout.Qwerty,
                KeyboardCharacterLayout.Qwertz,
                KeyboardCharacterLayout.Azerty
            ],
            defaultValue: KeyboardCharacterLayout.Qwerty,
        },
        physicalLayout: {
            control: 'select',
            options: [
                KeyboardPhysicalLayout.Ansi,
                KeyboardPhysicalLayout.Iso,
            ],
            defaultValue: KeyboardPhysicalLayout.Ansi,
        }
    },
    args: {
        characterLayout: KeyboardCharacterLayout.Qwerty,
        physicalLayout: KeyboardPhysicalLayout.Ansi,
        showFunctionKeys: false,
        showNavigationKeys: false,
        showNumpad: false,
        visualizeEvents: true,
    }
} satisfies Meta<typeof Keyboard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AnsiQwerty: Story = {
    args: {
        characterLayout: KeyboardCharacterLayout.Qwerty,
        physicalLayout: KeyboardPhysicalLayout.Ansi,
    },
};

export const IsoQwertz: Story = {
    args: {
        characterLayout: KeyboardCharacterLayout.Qwertz,
        physicalLayout: KeyboardPhysicalLayout.Iso,
    },
};

export const IsoAzerty: Story = {
    args: {
        characterLayout: KeyboardCharacterLayout.Azerty,
        physicalLayout: KeyboardPhysicalLayout.Iso,
    },
};