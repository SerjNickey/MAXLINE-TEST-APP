import type { Meta, StoryObj } from "@storybook/react";
import CustomCheckbox from "./CustomCheckbox";

const meta: Meta<typeof CustomCheckbox> = {
  title: "UI/CustomCheckbox",
  component: CustomCheckbox,
  tags: ["autodocs"],
  argTypes: {
    checked: { control: "boolean" },
    label: { control: "text" },
  },
};
export default meta;
type Story = StoryObj<typeof CustomCheckbox>;

export const Unchecked: Story = {
  args: {
    checked: false,
    label: "Я согласен",
    onChange: () => {},
  },
};

export const Checked: Story = {
  args: {
    checked: true,
    label: "Я согласен",
    onChange: () => {},
  },
};
