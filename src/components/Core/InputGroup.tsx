import React from "react";
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from "styled-components";
import { rgba } from "polished";

// @ts-expect-error ts-migrate(6142) FIXME: Module './Input' was resolved to '/home/henrique/p... Remove this comment to see the full error message
import Input from "./Input";

const InputGroupStyled = styled.div`
  position: relative;
`;

const Icon = styled.div`
  position: absolute;
  margin-top: -2px;
  top: 50%;
  left: 27px;
  font-size: 19px;
  color: ${({
  theme
}: any) => rgba(theme.colors.dark, 0.4)};
  transform: translateY(-50%);
`;

const InputGroup = ({
  type = "text",
  focusColor = "secondary",
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  icon = <span className="far fa-envelope" />,
  ...rest
}) => {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <InputGroupStyled>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Input
        width="100%"
        type={type}
        color="text"
        bg="light"
        focusColor={focusColor}
        pl="4.125rem"
        {...rest}
      />
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Icon className="d-flex align-items-center">{icon}</Icon>
    </InputGroupStyled>
  );
};

export default InputGroup;
