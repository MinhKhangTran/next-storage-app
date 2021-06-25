import { ButtonProps } from "@/interfaces/Button";
import styled, { css } from "styled-components";

export const Button = styled.button<ButtonProps>`
  margin-top: 2rem;
  padding: 1rem 2rem;
  ${({ outline }) => {
    return outline
      ? css`
          border: 2px solid var(--primary-500);
          background: var(--primary-50);
          color: var(--primary-500);

          &:hover {
            background: var(--primary-500);
            color: var(--primary-50);
            box-shadow: var(--shadow-1);
          }
        `
      : css`
          border: none;
          background: var(--primary-500);
          color: white;
          &:hover {
            background: var(--primary-600);
            color: var(--primary-50);
            box-shadow: var(--shadow-1);
          }
        `;
  }}

  border-radius: 0.375rem;
  width: ${({ large }) => (large ? "100%" : "auto")};

  font-size: 1.25rem;
  cursor: pointer;
  transition: var(--transtion);
`;
