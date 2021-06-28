import React from "react";
import Link from "next/link";

// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '../../assets/image/logo-main-b... Remove this comment to see the full error message
import imgL1Logo from "../../assets/image/logo-main-black.png";
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '../../assets/image/logo-main-w... Remove this comment to see the full error message
import imgL1LogoWhite from "../../assets/image/logo-main-white.png";

const Logo = ({
  white,
  height,
  className = "",
  ...rest
}: any) => {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Link href="/">
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <a className={`d-block ${className}`} {...rest}>
        {white ? (
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <img src={imgL1LogoWhite} alt="" />
        ) : (
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <img src={imgL1Logo} alt="" />
        )}
      </a>
    </Link>
  );
};

export default Logo;
