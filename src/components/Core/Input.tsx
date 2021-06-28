import React from "react";
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from "styled-components";
import {
  color,
  space,
  typography,
  shadow,
  layout,
  border,
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'styl... Remove this comment to see the full error message
} from "styled-system";

const InputSolid = styled.input`
  font-size: 18px;
  font-weight: 300;
  letter-spacing: -0.56px;
  display: block;
  padding: 1.275rem 1.75rem;
  background-clip: padding-box;
  border: ${({
  theme
}: any) => `1px solid ${theme.colors.border}`};
  border-radius: 10px;
  ${color};
  ${space};
  ${typography};
  ${shadow};
  ${layout};
  ${border};
  &:focus,
  &:active,
  &.active {
    border-color: ${({
  theme,
  focusColor
}: any) => theme.colors[focusColor]};
    outline: 0;
    box-shadow: none;
  }
`;

const InputAnimation = styled.div`
  position: relative;
  ${color};
  ${space};
  ${typography};
  ${shadow};
  ${layout};
  ${border};
  input {
    width: 100%;
    padding: 1.275rem 1rem;
    border: ${({
  theme
}: any) => `1px solid ${theme.colors.border}`};
    background-color: ${({
  theme
}: any) => theme.colors.light};
    color: ${({
  theme
}: any) => theme.colors.dark};
    font-size: 21px;
    font-weight: 300;
    line-height: 1.5;
    letter-spacing: -0.56px;
    border-radius: 10px;
    background-clip: padding-box;
    transition: all 0.3s ease-out;
    &:focus {
      border: ${({
  theme
}: any) => `1px solid ${theme.colors.secondary}`};
      outline: none;
    }
  }
  input:focus ~ label {
    top: 0px;
    left: 15px;
  }

  label {
    background-color: ${({
  theme
}: any) => theme.colors.light};
    font-size: 18px;
    font-weight: 300;
    color: ${({
  theme
}: any) => theme.colors.darkShade};
    top: 50%;
    padding: 0 10px;
    left: 15px;
    border-radius: 5px;
    margin-bottom: 0;
    transform: translateY(-50%);
    position: absolute;
    transition: 0.4s;
    pointer-events: none;
  }
`;

const Input = ({
  variant = "solid",
  type = "text",
  focusColor = "secondary",
  placeholder,
  css,
  ...rest
}: any) => {
  return variant === "animation" ? (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <InputAnimation css={css} {...rest}>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <input width="100%" type={type} color="text" bg="light" />
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <label>{placeholder}</label>
    </InputAnimation>
  ) : (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <InputSolid
      width="100%"
      type={type}
      color="text"
      bg="light"
      placeholder={placeholder}
      focusColor={focusColor}
      css={css}
      {...rest}
    />
  );
};

export default Input;
