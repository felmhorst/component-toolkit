import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import {KeyboardCharacterLayout, KeyboardPhysicalLayout} from "@/utility/keyboard/keys.types";
import {AutoDetectKeyboard} from "@/components/ui/Keyboard/AutoDetectKeyboard";

const meta = {
    title: 'UI/Keyboard/KeyboardInterface',
    component: AutoDetectKeyboard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
    },
    args: {
        characterLayout: KeyboardCharacterLayout.Qwerty,
        physicalLayout: KeyboardPhysicalLayout.Ansi,
        showFunctionKeys: false,
        showNavigationKeys: false,
        showNumpad: false,
        visualizeEvents: true,
    },
} satisfies Meta<typeof AutoDetectKeyboard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};