import React, { useState } from "react";
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

const SwitchStyled = styled.div`
  display: inline-block;
  cursor: pointer;
  width: 72px;
  height: 33px;
  border-radius: 17px;
  transition: all 0.3s ease-out;
  background: ${({
  active,
  theme,
  bg
}: any) =>
    active ? theme.colors[bg] : `#eae9f2`};
  position: relative;
  margin: 0 15px;
  white-space: nowrap;
  ${border};
  ${space};
  ${typography};
  ${shadow};
  ${flexbox};
  ${layout};
`;

const Round = styled.span`
  width: 21px;
  height: 21px;
  background-color: #ffffff;
  position: absolute;
  transition: all 0.3s ease-out;
  left: ${({
  active
}: any) => (active ? `calc(100% - 33px)` : `0`)};
  margin-left: 6px;
  top: 0;
  margin-top: 6px;
  transition: 0.4s;
  border-radius: 500px;
  pointer-events: none;
`;

const Switch = ({ bg = "secondary", onClick = () => {}, ...rest }) => {
  const [active, setActive] = useState(false);

  const handleSwitch = () => {
    setActive(!active);
    onClick();
  };

  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <SwitchStyled
      bg={bg}
      {...rest}
      onClick={handleSwitch}
      active={active ? 1 : 0}
    >
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Round active={active ? 1 : 0} />
    </SwitchStyled>
  );
};

export default Switch;
