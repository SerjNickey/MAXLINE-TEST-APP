import type { Meta, StoryObj } from "@storybook/react";
import CustomButton from "./CustomButton";

const meta: Meta<typeof CustomButton> = {
  title: "UI/CustomButton",
  component: CustomButton,
  tags: ["autodocs"],
  argTypes: {
    children: { control: "text" },
    disabled: { control: "boolean" },
  },
};
export default meta;
type Story = StoryObj<typeof CustomButton>;

export const Default: Story = {
  args: {
    children: "Кнопка",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    children: "Кнопка",
    disabled: true,
  },
};
