import React from "react";
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from "styled-components";
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import { color, space, typography, shadow } from "styled-system";
import { device } from "../../utils";

const SectionTitle = styled.h2`
  font-size: calc(1.35rem + 1.2vw);
  letter-spacing: -1.2px;
  line-height: 1.3;

  @media ${device.xl} {
    font-size: 2.25rem;
  }

  ${color};
  ${space};
  ${typography};
  ${shadow};
`;

const HeroTitle = styled.h1`
  font-size: calc(1.5rem + 3vw);

  letter-spacing: -2px;
  line-height: 1.083;

  @media ${device.xl} {
    font-size: 3.75rem;
  }
  ${color};
  ${space};
  ${typography};
  ${shadow};
`;

const PreTitle = styled.h4`
  font-size: 0.8125rem;
  line-height: 1.63;
  text-transform: uppercase;
  color: ${({
  theme
}: any) => theme.colors.secondary} !important;
  ${color};
  ${space};
  ${typography};
  ${shadow};
`;

const CardTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.66px;
  line-height: 28px;
  ${color};
  ${space};
  ${typography};
  ${shadow};
`;

const Title = ({
  variant,
  ...rest
}: any) => {
  let TitleStyled = SectionTitle;

  switch (variant) {
    case "pre":
      TitleStyled = PreTitle;
      break;
    case "card":
      TitleStyled = CardTitle;
      break;
    case "hero":
      TitleStyled = HeroTitle;
      break;
    default:
      TitleStyled = SectionTitle;
  }

  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  return <TitleStyled color="heading" {...rest} />;
};

export default Title;
