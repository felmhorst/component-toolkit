import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Slide } from "./Slide";

const meta = {
  title: "Animations/Slide",
  component: Slide,
  parameters: {
    layout: "centered",
  },
  args: {
    children: <h1>test</h1>,
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Slide>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
