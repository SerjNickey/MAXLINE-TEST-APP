import {} from "react";
import { StyledButton } from "./CustomButton.styled";

interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({ children, ...props }) => (
  <StyledButton {...props}>{children}</StyledButton>
);

export default CustomButton;
