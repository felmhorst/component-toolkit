import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { SlideText } from "./SlideText";
import {Card} from "@/components/ui/Card/Card";
import {withReplay} from "@/.storybook/decorators/withReplay";

const meta = {
    title: "Animations/SlideText",
    component: SlideText,
    parameters: {
        layout: "centered",
    },
    args: {
        text: "Hello, World!\nDolor sit amet",
        split: "char",
    },
    argTypes: {
        direction: {
            options: ["left", "right", "up", "down"],
            control: { type: "select" },
            description: "The direction of the slide animation.",
        },
        text: {
            control: "text",
            description: "The text to be animated.",
        },
        split: {
            options: ["char", "word", "line"],
            control: { type: "select" },
            description: "Where to split the text.",
        },
    },
    decorators: [withReplay],
    tags: ["autodocs"],
} satisfies Meta<typeof SlideText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};
