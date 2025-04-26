import type { Meta, StoryObj } from "@storybook/react";
import CustomInput from "./CustomInput";

const meta: Meta<typeof CustomInput> = {
  title: "UI/CustomInput",
  component: CustomInput,
  tags: ["autodocs"],
  argTypes: {
    value: { control: "text" },
    label: { control: "text" },
    placeholder: { control: "text" },
    type: { control: "radio", options: ["text", "password", "tel"] },
    error: { control: "text" },
    showToggle: { control: "boolean" },
  },
};
export default meta;
type Story = StoryObj<typeof CustomInput>;

export const Text: Story = {
  args: {
    value: "",
    label: "Text input",
    placeholder: "Enter text",
    type: "text",
    showToggle: false,
    error: "",
    onChange: () => {},
  },
};

export const Password: Story = {
  args: {
    value: "",
    label: "Password",
    placeholder: "Enter password",
    type: "password",
    showToggle: true,
    error: "",
    onChange: () => {},
  },
};

export const TelWithError: Story = {
  args: {
    value: "+375291234567",
    label: "Phone",
    placeholder: "+375 XX XXXXXXX",
    type: "tel",
    showToggle: false,
    error: "Некорректный номер",
    onChange: () => {},
  },
};
