import React, { useState, useContext } from "react";
import ReactPlayer from "react-player";
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from "styled-components";
import { Modal } from "react-bootstrap";
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../context/GlobalContext' was resolved ... Remove this comment to see the full error message
import GlobalContext from "../../context/GlobalContext";
import { device } from "../../utils";
const ModalStyled = styled(Modal) `
  &.modal {
    z-index: 10050;
  }
  .modal-dialog {
    width: 100vw;
    height: 100vh;
    max-width: initial;
    max-height: initial;
    margin: 0;
  }
  .modal-content {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 0;
    padding-top: 15px;
    background: rgba(0, 0, 0, 0.75);
    @media ${device.lg} {
      padding-top: 30px;
    }
  }
`;
const DivStyled = styled.div `
  margin: 0 auto;
  width: 90%;
  height: 400px;
  @media ${device.md} {
    width: 70%;
    height: 650px;
  }
  opacity: 0;
  visibility: hidden;
  transition: all 2s ease-out;
  &.loaded {
    opacity: 1;
    visibility: visible;
  }
`;
const CloseWrapper = styled.div `
  cursor: pointer;
  top: 0;
  right: 1rem;
  position: absolute;
  height: 1.5rem;
  width: 1.5rem;
  align-items: center;
  display: inline-flex;
  justify-content: center;
  z-index: 10;
  color: #fff;
  @media ${device.md} {
    right: 2rem;
  }
`;
// @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
const CloseButton = (props: any) => <CloseWrapper {...props}>
  {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
  <svg role="img" viewBox="0 0 24 24" css={`
      fill: currentcolor;
      vertical-align: middle;
      height: 1rem;
      width: 1rem;
    `}>
    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <path d="M9.82 12L0 2.18 2.18 0 12 9.82 21.82 0 24 2.18 14.18 12 24 21.82 21.82 24 12 14.18 2.18 24 0 21.82z" fill="currentColor"></path>
  </svg>
</CloseWrapper>;
const ModalVideo = (props: any) => {
    const [loading, setLoading] = useState(true);
    const gContext = useContext(GlobalContext);
    const handleClose = () => {
        setLoading(true);
        (gContext as any).toggleVideoModal();
    };
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    return (<ModalStyled {...props} size="lg" centered show={(gContext as any).videoModalVisible}>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Modal.Body className="text-center position-relative">
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <CloseButton onClick={handleClose}/>

        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <div className={`h-100 d-flex align-items-center w-100`}>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <DivStyled className={`${loading ? "loading" : "loaded"}`}>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <ReactPlayer url={`https://www.youtube.com/watch?v=zlInYm2JrFw`} width="100%" height="100%" controls onReady={() => {
            setLoading(false);
        }}/>
          </DivStyled>
        </div>
      </Modal.Body>
    </ModalStyled>);
};
export default ModalVideo;
