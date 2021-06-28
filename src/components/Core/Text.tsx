import React from "react";
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from "styled-components";
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import { color, space, typography, shadow } from "styled-system";

const Paragraph = styled.p`
  font-size: 1.0625rem;
  letter-spacing: -0.2px;
  line-height: 1.71;
  ${color};
  ${space};
  ${typography};
  ${shadow};
`;

const ParagraphLarge = styled.p`
  font-size: 1.1875rem;
  letter-spacing: -0.2px;
  line-height: 1.69;
  ${color};
  ${space};
  ${typography};
  ${shadow};
`;

const ParagraphSmall = styled.p`
  font-size: 0.9375rem;
  letter-spacing: -0.1px;
  line-height: 1.73;
  ${color};
  ${space};
  ${typography};
  ${shadow};
`;

const Text = ({
  variant,
  ...props
}: any) => {
  let TextRender;

  switch (variant) {
    case "sm":
      TextRender = ParagraphSmall;
      break;
    case "lg":
      TextRender = ParagraphLarge;
      break;
    default:
      TextRender = Paragraph;
  }

  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  return <TextRender color="text" {...props} />;
};

export default Text;
