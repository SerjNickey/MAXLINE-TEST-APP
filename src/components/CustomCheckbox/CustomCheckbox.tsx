import {} from "react";
import {
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
} from "./CustomCheckbox.styled";

interface CustomCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  checked,
  onChange,
  label,
}) => (
  <CheckboxContainer>
    <HiddenCheckbox
      checked={checked}
      onChange={(e) => onChange(e.target.checked)}
    />
    <StyledCheckbox checked={checked} />
    {label && <span style={{ marginLeft: 8 }}>{label}</span>}
  </CheckboxContainer>
);

export default CustomCheckbox;
