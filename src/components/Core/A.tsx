import React from "react";
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from "styled-components";
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import { color, space, typography, shadow } from "styled-system";

const Paragraph = styled.a`
  font-size: 20px;
  font-weight: 300;
  letter-spacing: -0.66px;
  line-height: 35px;
  ${color};
  ${space};
  ${typography};
  ${shadow};
  &:hover,
  &:active,
  &.active {
    ${color};
    text-decoration: none;
  }
`;

const A = ({ href = "#", ...props }) => {
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  return <Paragraph href={href} color="secondary" {...props} />;
};

export default A;
