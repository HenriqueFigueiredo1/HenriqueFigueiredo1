import React from "react";
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import { withTheme } from "styled-components";

// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import Select from "react-select";

const defaultOptions = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const getCustomStyles = (theme: any, accentColor: any, bg: any, border: any, indicator: any) => {
  return {
    dropdownIndicator: () => {
      return {
        display: !indicator && "none",
      };
    },
    indicatorSeparator: () => {},
    option: (provided: any, state: any) => {
      return {
        ...provided,
        color: state.isSelected ? theme.colors[accentColor] : theme.colors.dark,
        textAlign: "left",
        backgroundColor: bg,
      };
    },
    control: (provided: any, state: any) => {
      return {
        ...provided,
        border: !border
          ? "none"
          : state.menuIsOpen || state.isFocused
          ? `1px solid ${theme.colors[accentColor]} !important`
          : `1px solid ${theme.colors.border} !important`,
        borderRadius: 10,
        padding: "0.25rem 1rem",
        width: "100%",
        height: "45px",
        outline: "none",
        boxShadow: "none",
        textAlign: "left",
        backgroundColor: bg,
      };
    },
  };
};

const SelectStyled = ({
  theme,
  bg = "#fff",
  border = true,
  accentColor = "success",
  name = "item",
  indicator = true,
  options = defaultOptions,
  ...rest
}: any) => {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Select
      styles={getCustomStyles(theme, accentColor, bg, border, indicator)}
      defaultValue={options[1]}
      name={name}
      options={options}
      instanceId="inId"
      {...rest}
    />
  );
};

export default withTheme(SelectStyled);
