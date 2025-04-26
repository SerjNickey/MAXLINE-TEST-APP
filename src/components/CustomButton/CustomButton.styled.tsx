import styled from "styled-components";
import { media } from "@/styles/breakpoints";

export const StyledButton = styled.button`
  width: 100%;
  height: 46px;
  background: #5ab828;
  font-size: 13px;
  font-weight: 500;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  outline: none !important;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  ${media.xxl} {
    max-width: 380px;
  }

  ${media.xl} {
    max-width: 280px;
  }

  &:disabled {
    background: #4da41e;
    cursor: not-allowed;
  }
`;
