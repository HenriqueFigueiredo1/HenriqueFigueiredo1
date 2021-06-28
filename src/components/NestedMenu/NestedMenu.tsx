import React, { useState, useContext } from "react";
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from "styled-components";
import { ListGroup, Collapse } from "react-bootstrap";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";
import Link from "next/link";
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../context/GlobalContext' was resolved ... Remove this comment to see the full error message
import GlobalContext from "../../context/GlobalContext";
const NestedMenuContainer = styled.div `
  a,
  .label {
    color: ${({ dark, theme }: any) => dark ? theme.colors.light : theme.colors.heading}!important;
    font-size: 15px;
    font-weight: 500;
    transition: all 0.3s ease-out;
    &:hover,
    &:active {
      color: ${({ theme }: any) => theme.colors.primary};
      text-decoration: none;
    }
  }

  .list-group-item {
    & + .collapse:not(.show) {
      .list-group-item {
        border: none !important;
        border-width: 0 !important;
      }
    }
    & + .collapse.show {
      .list-group-item {
        &:first-child {
          border-top: none !important;
        }
      }
    }
  }
  .collapse + .list-group-item {
    border-top-width: 0;
  }
  /* .list-group-flush:last-child .list-group-item:last-child {
    border-bottom-width: 1px;
  } */
`;
const defaultMenuItems = [
    { name: "home", label: "Home" },
    {
        name: "billing",
        label: "Billing",
        items: [
            { name: "statements", label: "Statements" },
            { name: "reports", label: "Reports" },
        ],
    },
    {
        name: "settings",
        label: "Settings",
        items: [
            { name: "profile", label: "Profile" },
            { name: "insurance", label: "Insurance" },
            {
                name: "notifications",
                label: "Notifications",
                items: [
                    { name: "email", label: "Email" },
                    {
                        name: "desktop",
                        label: "Desktop",
                        items: [
                            { name: "schedule", label: "Schedule" },
                            { name: "frequency", label: "Frequency" },
                        ],
                    },
                    { name: "sms", label: "SMS" },
                ],
            },
        ],
    },
];
const MenuItem = ({ label, isExternal = false, name, items, depthStep = 20, depth = 0, ...rest }: any) => {
    const [open, setOpen] = useState(false);
    const hasSubItems = Array.isArray(items);
    const gContext = useContext(GlobalContext);
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    return <>
    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    {hasSubItems ? (<ListGroup.Item {...rest} css={`
          padding-left: ${depth * depthStep}px !important;
          cursor: pointer;
        `} onClick={() => setOpen(!open)} className="d-flex align-items-center justify-content-between">
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <span className="label">{label}</span>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <span>{open ? <FaAngleDown /> : <FaAngleRight />}</span>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      </ListGroup.Item>) : (<ListGroup.Item {...rest} css={`
          padding-left: ${depth * depthStep}px !important;
        `}>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        {isExternal ? (<a href={`${name}`} onClick={() => {
                    if ((gContext as any).visibleOffCanvas) {
                        (gContext as any).toggleOffCanvas();
                    }
                }}>
            {label}
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          </a>) : (<Link href={`/${name}`}>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <a onClick={() => {
                    if ((gContext as any).visibleOffCanvas) {
                        (gContext as any).toggleOffCanvas();
                    }
                }}>
              {label}
            </a>
          </Link>)}
      </ListGroup.Item>)}

    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    {hasSubItems ? (<Collapse in={open}>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <ListGroup>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          {items.map((subItem: any) => <MenuItem key={subItem.name} depth={depth + 1} depthStep={depthStep} {...subItem}/>)}
        </ListGroup>
      </Collapse>) : null}
  </>;
};
const NestedMenu = ({ menuItems = defaultMenuItems }) => {
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    return (<NestedMenuContainer>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <ListGroup variant="flush">
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        {menuItems.map((menuItem, index) => (<MenuItem key={`${menuItem.name}${index}`} depthStep={20} depth={0} {...menuItem}/>))}
      </ListGroup>
    </NestedMenuContainer>);
};
export default NestedMenu;
