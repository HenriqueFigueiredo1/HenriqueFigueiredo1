import React from "react";
import ReactCountdown from "react-countdown";

import { Box, Text, Title } from "../Core";

const CardTime = ({
  label,
  time
}: any) => (
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <Box
    borderRadius={10}
    mx="5px"
    px="10px"
    py="20px"
    pb="12px"
    bg="secondary"
    className="w-100 h-100 d-flex flex-column align-items-center justify-content-center"
  >
    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <Title variant="card" fontSize={["26px", null, "38px"]} color="light">
      {time}
    </Title>
    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <Text
      fontSize={["14px", null, "16px"]}
      variant="small"
      color="lightShade"
      css={`
        white-space: nowrap;
      `}
    >
      {label}
    </Text>
  </Box>
);

const renderer = ({
  days,
  hours,
  minutes,
  seconds
}: any) => (
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <Box maxWidth="340px" mx="auto" className="d-flex justify-content-center">
    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <CardTime label="Days" time={days} />
    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <CardTime label="Hour" time={hours} />
    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <CardTime label="Minutes" time={minutes} />
    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <CardTime label="Seconds" time={seconds} />
  </Box>
);

const CountDown = ({
  date
}: any) => (
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <ReactCountdown date={date} renderer={renderer} />
);

export default CountDown;
