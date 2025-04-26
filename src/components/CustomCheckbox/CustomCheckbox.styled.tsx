import styled from "styled-components";

export const CheckboxContainer = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const StyledCheckbox = styled.span<{ checked: boolean }>`
  display: inline-block;
  width: 18px;
  height: 18px;
  background: ${(props) => (props.checked ? "#5AB828" : "#fff")};
  border-radius: 4px;
  transition: all 150ms;
  position: relative;
  box-sizing: border-box;

  &::after {
    content: "";
    display: ${(props) => (props.checked ? "block" : "none")};
    position: absolute;
    left: 6px;
    top: 3px;
    width: 4px;
    height: 8px;
    border: solid #fff;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;
