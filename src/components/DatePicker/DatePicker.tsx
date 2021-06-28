import React from "react";
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from "styled-components";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";

const DatePickerStyled = styled.div`
  display: flex;
  align-items: center;
  height: 45px;
  .DayPickerInput {
    display: block;
  }
  .DayPickerInput-Overlay {
    top: 4px;
  }
  .DayPicker-Day {
    padding: 0.35rem 0.5rem;
  }
  .DayPicker-Day--today {
    color: ${({
  theme
}: any) => theme.colors.primary};
  }
  .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside) {
    background-color: ${({
  theme
}: any) => theme.colors.primary};
    color: #fff;
  }
  .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside):hover {
    background-color: ${({
  theme
}: any) => theme.colors.primary};
  }
`;

const DatePickerComponent = ({
  className
}: any) => {
  const today = new Date();
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <DatePickerStyled>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <DayPickerInput
        dayPickerProps={{ disabledDays: { before: today } }}
        value={today}
        inputProps={{ className: className, readOnly: true, required: true }}
      />
    </DatePickerStyled>
  );
};

export default DatePickerComponent;
