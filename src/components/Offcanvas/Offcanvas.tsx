import React from "react";
import { Container } from "react-bootstrap";
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from "styled-components";
import Logo from "../Logo";

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  height: 100%;
  z-index: 99999;
  background: rgba(0, 0, 0, 0.5);
  opacity: 1;
  visibility: visible;
  transition: all 0.3s ease-out;
  &.hidden {
    opacity: 0;
    visibility: hidden;
  }
`;

const Drawer = styled.div`
  position: fixed;
  width: 17rem;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  z-index: 999999;
  background: #fff;
  overflow-y: auto;
  transform: translateX(0);
  transition: all 0.3s ease-out;
  &.hidden {
    transform: translateX(100%);
  }
  .dropdown-menu {
    position: static !important;
    will-change: initial !important;
    transform: initial !important;
    float: none !important;
  }
`;

const LogoContainer = styled.div`
  font-weight: 600;
  font-size: 1.25rem;
`;

const Offcanvas = ({
  show,
  onHideOffcanvas,
  children,
  ...rest
}: any) => {
  if (typeof document !== "undefined") {
    if (show) {
      // @ts-expect-error ts-migrate(2531) FIXME: Object is possibly 'null'.
      document.querySelector("html").classList.add("has-offcanvas");
      document.body.classList.add("has-offcanvas");
    } else {
      // @ts-expect-error ts-migrate(2531) FIXME: Object is possibly 'null'.
      document.querySelector("html").classList.remove("has-offcanvas");
      document.body.classList.remove("has-offcanvas");
    }
  }

  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div {...rest}>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Overlay className={show ? "" : "hidden"} onClick={onHideOffcanvas} />
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Drawer className={show ? "" : "hidden"}>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Container>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <div className="p-3">
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <LogoContainer className="my-3">
              {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <Logo onClick={onHideOffcanvas} />
            </LogoContainer>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <div className="pt-4">{children}</div>
          </div>
        </Container>
      </Drawer>
    </div>
  );
};

export default Offcanvas;
