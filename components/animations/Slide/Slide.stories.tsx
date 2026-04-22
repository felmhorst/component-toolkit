import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Slide } from "./Slide";
import {Card} from "@/components/ui/Card/Card";

const meta = {
  title: "Animations/Slide",
  component: Slide,
  parameters: {
    layout: "centered",
  },
  args: {
    children: (
        <Card>
          <h1>test</h1>
        </Card>),
  },
  argTypes: {
    direction: {
      options: ["left", "right", "up", "down"],
      control: { type: "select" },
      description: "The direction of the slide animation.",
    }
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Slide>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
