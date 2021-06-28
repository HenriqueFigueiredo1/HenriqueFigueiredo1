import React from "react";
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'loda... Remove this comment to see the full error message
import { uniqueId } from "lodash";
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from "styled-components";
import {
  space,
  border,
  typography,
  shadow,
  flexbox,
  layout,
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'styl... Remove this comment to see the full error message
} from "styled-system";

const CheckStyled = styled.label`
  display: inline-flex;
  cursor: pointer;

  input:checked ~ .check::before {
    content: "\f14a";
    font-family: "Font Awesome 5 free";
    font-weight: 900;
    color: ${({
  theme
}: any) => theme.colors.secondary};
  }

  ${border};
  ${space};
  ${typography};
  ${shadow};
  ${flexbox};
  ${layout};
`;

const Check = styled.span`
  position: relative;
  line-height: 1;
  top: -2px;
  margin-right: 8px;
  min-height: 20px;
  min-width: 20px;
  &::before {
    content: "\f0c8";
    font-family: "Font Awesome 5 free";
    font-size: 19px;
    color: #e2e4e8;
  }
`;

const Text = styled.p`
  color: ${({
  theme
}: any) => theme.colors.text};
  font-size: 16px;
  font-weight: 300;
  line-height: 1;
  margin-bottom: 0;
`;

const Checkbox = ({
  children = "Keep me signed in",
  onClick = () => {},
  ...rest
}) => {
  const uID = uniqueId("check_");

  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <CheckStyled {...rest} htmlFor={uID}>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <input className="d-none" type="checkbox" id={uID} />
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Check className="check"></Check>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Text>{children}</Text>
    </CheckStyled>
  );
};

export default Checkbox;
