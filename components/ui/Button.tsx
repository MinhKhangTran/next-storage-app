import { ButtonProps } from "@/interfaces/Button";
import styled, { css } from "styled-components";

export const Button = styled.button<ButtonProps>`
  /* margin-top: 2rem; */
  padding: 0.75rem 1.5rem;
  ${({ outline }) => {
    return outline
      ? css`
          border: 2px solid var(--primary-500);
          background: var(--primary-50);
          color: var(--primary-500);

          &:hoverenabled {
            background: var(--primary-500);
            color: var(--primary-50);
            box-shadow: var(--shadow-1);
          }
        `
      : css`
          border: none;
          background: var(--primary-500);
          color: white;
          &:hover:enabled {
            background: var(--primary-600);
            color: var(--primary-50);
            box-shadow: var(--shadow-1);
          }
        `;
  }}

  border-radius: 0.375rem;
  width: ${({ large }) => (large ? "100%" : "auto")};

  font-size: 1.1rem;
  cursor: pointer;
  transition: var(--transition);
  &:disabled {
    background: var(--primary-600);
    cursor: not-allowed;
  }
  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
  }
`;
