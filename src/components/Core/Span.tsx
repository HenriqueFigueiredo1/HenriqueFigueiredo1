import React from "react";
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from "styled-components";
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import { color, space, typography, shadow } from "styled-system";

const SpanStyled = styled.span`
  ${color};
  ${space};
  ${typography};
  ${shadow};
`;

const Span = ({ ...props }) => {
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  return <SpanStyled {...props} />;
};

export default Span;
