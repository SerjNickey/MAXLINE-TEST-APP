import { useState } from "react";
import {
  InputContainer,
  Label,
  StyledInput,
  ToggleButton,
  ErrorMessage,
} from "./CustomInput.styled";
import eyeOpened from "@/assets/eye_opened.png";
import eyeClosed from "@/assets/eye_closed.png";
import bel from "@/assets/bel.png";

interface InputProps {
  value: string; // always without spaces, e.g. "+375291234567"
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
  type?: "text" | "password" | "tel";
  showToggle?: boolean;
  error?: string;
}

const phoneRegex = /^\+375(25|29|33|44)\d{7}$/;

// Formatting for display: +375 29 1234567
function formatPhone(value: string) {
  if (!value.startsWith("+375")) return value;
  const country = value.slice(0, 4); // +375
  const code = value.slice(4, 6); // 29
  const number = value.slice(6); // 1234567
  let result = country;
  if (code) result += " " + code;
  if (number) result += " " + number;
  return result.trim();
}

// Remove spaces for storage and validation
function unformatPhone(value: string) {
  return value.replace(/\s+/g, "");
}

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder = "Введите значение",
  label,
  type = "text",
  showToggle = false,
  error: externalError,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [touched, setTouched] = useState(false);

  // Handle value change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;

    if (type === "tel") {
      // Remove spaces
      let raw = unformatPhone(inputValue);

      // Prevent deleting +375
      if (!raw.startsWith("+375")) {
        raw = "+375";
      }

      // Only digits after +375, max 9 characters (2 for code + 7 for number)
      if (raw.length > 4) {
        raw =
          "+375" +
          raw
            .slice(4)
            .replace(/[^0-9]/g, "")
            .slice(0, 9);
      }

      onChange(raw);

      if (!touched && raw.length > 0) setTouched(true);
      if (raw.length === 0) setTouched(false);
      return;
    }

    // For other types
    onChange(inputValue);
    if (!touched && inputValue.length > 0) setTouched(true);
    if (inputValue.length === 0) setTouched(false);
  };

  const handleBlur = () => {
    if (!touched && value.length > 0) setTouched(true);
  };

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  const inputType =
    type === "password" ? (showPassword ? "text" : "password") : type;

  let internalError = "";
  if (
    type === "tel" &&
    touched &&
    value.length > 4 && // only if something is entered after +375
    !phoneRegex.test(value)
  ) {
    internalError =
      "Телефон должен быть в формате +375 25 1234567, +375 29 1234567, +375 33 1234567 или +375 44 1234567";
  }
  if (type === "password" && touched && value.length > 0 && value.length < 6) {
    internalError = "Пароль должен содержать минимум 6 символов";
  }

  const error = externalError || internalError;

  // For display, format value with spaces
  const displayValue = type === "tel" ? formatPhone(value) : value;

  return (
    <InputContainer>
      {label && <Label>{label}</Label>}
      {showToggle && type === "tel" && (
        <ToggleButton inputType="tel" type="button">
          <img src={bel} alt={"Номер телефона"} />
        </ToggleButton>
      )}
      <StyledInput
        type={inputType}
        value={displayValue}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={type === "tel" ? "+375" : placeholder}
        hasError={!!internalError}
        maxLength={15} // +375 29 1234567 = 15 characters
      />
      {showToggle && type === "password" && (
        <ToggleButton
          inputType="password"
          type="button"
          onClick={togglePasswordVisibility}
        >
          <img
            src={showPassword ? eyeOpened : eyeClosed}
            alt={showPassword ? "Показать пароль" : "Скрыть пароль"}
          />
        </ToggleButton>
      )}
      <div style={{ color: "#fff" }}>{showPassword}</div>
      {internalError && <ErrorMessage>{error}</ErrorMessage>}
    </InputContainer>
  );
};

export default Input;
