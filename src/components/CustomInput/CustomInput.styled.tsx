import styled from "styled-components";
import { media } from "@/styles/breakpoints";

export const InputContainer = styled.div`
  position: relative;
  height: 88px;

  ${media.xxl} {
    width: 380px;
  }

  ${media.xl} {
    width: 280px;
  }
`;

export const Label = styled.label`
  display: block;
  color: #bbc6f2;
  font-size: 13px;
  margin-bottom: 4px;
`;

export const StyledInput = styled.input<{
  hasError: boolean;
  type: string;
}>`
  height: 38px;
  padding-left: ${(props) => (props.type === "tel" ? "54px" : "14px")};
  padding-right: ${(props) => (props.type !== "tel" ? "42px" : "0")};
  border: 1px solid ${(props) => (props.hasError ? "#dc3545" : "#ccc")};
  border-radius: 4px;
  font-size: 13px;
  background-color: #f1f3f6;
  color: #000;

  ${media.xxl} {
    width: 320px;
  }

  ${media.xl} {
    width: 220px;
  }

  &::placeholder {
    color: #777b8b;
  }

  &:focus {
    outline: none;
    border-color: ${(props) => (props.hasError ? "#dc3545" : "#5AB828")};
  }
`;

export const ToggleButton = styled.button<{ inputType: string }>`
  position: absolute;
  left: ${(props) => (props.inputType === "tel" ? "3px" : "auto")};
  right: ${(props) => (props.inputType === "password" ? "3px" : "auto")};
  top: 25px;
  background: none;
  border: none;
  cursor: pointer;
  color: #666;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none !important;

  img {
    width: 38px;
    height: 38px;
  }
`;

export const ErrorMessage = styled.div`
  color: #f91717;
  font-size: 13px;
  margin-top: 4px;
`;
