import React from "react";
import Box from "./Box";

const Section = ({ variant = "section", ...rest }) => {
  return variant === "hero" ? (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Box
      pt={["8.4375rem", null, null, "11.25rem"]}
      pb={["3.75rem", null, null, "8.4375rem"]}
      {...rest}
    />
  ) : (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Box py={["3.75rem", null, null, "7.5rem"]} {...rest} />
  );
};

export default Section;
