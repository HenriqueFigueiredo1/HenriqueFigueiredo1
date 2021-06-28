import React, { useState, useContext } from "react";
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from "styled-components";
import { Container, Dropdown } from "react-bootstrap";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import Link from "next/link";
import { useWindowSize } from "../../hooks/useWindowSize";
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../context/GlobalContext' was resolved ... Remove this comment to see the full error message
import GlobalContext from "../../context/GlobalContext";
import Offcanvas from "../Offcanvas";
import NestedMenu from "../NestedMenu";
import { device } from "../../utils";
import Logo from "../Logo";
import { menuItems } from "./menuItems";
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '../../assets/image/header-prof... Remove this comment to see the full error message
import imgP from "../../assets/image/header-profile.png";
const SiteHeader = styled.header `
  .dropdown-toggle::after {
    opacity: 0;
  }

  padding: 10px 0 10px 0;
  position: absolute !important;
  top: 0;
  right: 0;
  width: 100%;
  z-index: 999;
  @media ${device.lg} {
    position: fixed !important;
    transition: 0.6s;
    &.scrolling {
      transform: translateY(-100%);
      transition: 0.6s;
    }
    &.reveal-header {
      transform: translateY(0%);
      box-shadow: 0 12px 34px -11px rgba(65, 62, 101, 0.1);
      z-index: 9999;
      background: ${({ dark, theme }: any) => (dark ? theme.colors.dark : "#fff")};
    }
  }
`;
const ToggleButton = styled.button `
  color: ${({ dark, theme }: any) => dark ? theme.colors.lightShade : theme.colors.heading}!important;
  border-color: ${({ dark, theme }: any) => dark ? theme.colors.lightShade : theme.colors.heading}!important;
`;
const Header = () => {
    const gContext = useContext(GlobalContext);
    const [showScrolling, setShowScrolling] = useState(false);
    const [showReveal, setShowReveal] = useState(false);
    const size = useWindowSize();
    useScrollPosition(({ prevPos, currPos }) => {
        if (currPos.y < 0) {
            setShowScrolling(true);
        }
        else {
            setShowScrolling(false);
        }
        if (currPos.y < -300) {
            setShowReveal(true);
        }
        else {
            setShowReveal(false);
        }
    });
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    return (<>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <SiteHeader className={`site-header site-header--sticky  site-header--absolute py-7 py-xs-0 sticky-header ${(gContext as any).header.bgClass} ${(gContext as any).header.align === "left"
            ? "site-header--menu-left "
            : (gContext as any).header.align === "right"
                ? "site-header--menu-right "
                : "site-header--menu-center "}
        ${(gContext as any).header.theme === "dark" ? "dark-mode-texts" : " "} ${showScrolling ? "scrolling" : ""} ${(gContext as any).header.reveal &&
            showReveal &&
            (gContext as any).header.theme === "dark"
            ? "reveal-header bg-blackish-blue"
            : (gContext as any).header.reveal && showReveal
                ? "reveal-header"
                : ""}`}>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Container fluid={(gContext as any).header.isFluid} className={(gContext as any).header.isFluid ? "pr-lg-9 pl-lg-9" : ""}>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <nav className="navbar site-navbar offcanvas-active navbar-expand-lg px-0 py-0">
            {/* <!-- Brand Logo--> */}
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <div className="brand-logo">
              {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <Logo white={(gContext as any).header.theme === "dark"}/>
            </div>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <div className="collapse navbar-collapse">
              {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <div className="navbar-nav-wrapper">
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <ul className="navbar-nav main-menu d-none d-lg-flex">
                  {menuItems.map(({ label, isExternal = false, name, items, ...rest }, index) => {
            const hasSubItems = Array.isArray(items);
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            return (<React.Fragment key={name + index}>
                          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                          {hasSubItems ? (<li className="nav-item dropdown" {...rest}>
                              {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                              <a className="nav-link dropdown-toggle gr-toggle-arrow" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="/#" onClick={(e) => e.preventDefault()}>
                                {label}
                                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                                <i className="icon icon-small-down"></i>
                              </a>
                              {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                              <ul className="gr-menu-dropdown dropdown-menu ">
                                {/* @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'. */}
                                {items.map((subItem, indexSub) => {
                        const hasInnerSubItems = Array.isArray(subItem.items);
                        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        return (<React.Fragment key={subItem.name + indexSub}>
                                      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                                      {hasInnerSubItems ? (<li className="drop-menu-item dropdown">
                                          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                                          <a className="dropdown-toggle gr-toggle-arrow" role="button" data-toggle="dropdown" aria-expanded="false" aria-haspopup="true" href="/#" onClick={(e) => e.preventDefault()}>
                                            {subItem.label}
                                            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                                            <i className="icon icon-small-down"></i>
                                          </a>
                                          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                                          <ul className="gr-menu-dropdown dropdown-menu dropdown-left">
                                            {/* @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'. */}
                                            {subItem.items.map((itemInner, indexInnerMost) => (<li className="drop-menu-item" key={itemInner.name +
                                        indexInnerMost}>
                                                  {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                                                  {(itemInner as any).isExternal ? (<a href={`${itemInner.name}`} target="_blank" rel="noopener noreferrer">
                                                      {itemInner.label}
                                                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                                                    </a>) : (<Link href={`/${itemInner.name}`}>
                                                      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                                                      <a>{itemInner.label}</a>
                                                    </Link>)}
                                                </li>))}
                                          </ul>
                                        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                                        </li>) : (<li className="drop-menu-item">
                                          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                                          {(subItem as any).isExternal ? (<a href={`${subItem.name}`} target="_blank" rel="noopener noreferrer">
                                              {subItem.label}
                                            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                                            </a>) : (<Link href={`/${subItem.name}`}>
                                              {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                                              <a>{subItem.label}</a>
                                            </Link>)}
                                        </li>)}
                                    </React.Fragment>);
                    })}
                              </ul>
                            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                            </li>) : (<li className="nav-item" {...rest}>
                              {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                              {isExternal ? (<a className="nav-link" href={`${name}`} target="_blank" rel="noopener noreferrer">
                                  {label}
                                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                                </a>) : (<Link href={`/${name}`}>
                                  {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                                  <a className="nav-link" role="button" aria-expanded="false">
                                    {label}
                                  </a>
                                </Link>)}
                            </li>)}
                        </React.Fragment>);
        })}
                </ul>
              </div>
            </div>

            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            {(gContext as any).header.button === "cta" && (<div className="header-btn ml-auto ml-lg-0 mr-6 mr-lg-0 d-none d-xs-block">
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <Link href="/#">
                  {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                  <a className={`btn btn-${(gContext as any).header.variant}`}>
                    {(gContext as any).header.buttonText}
                  </a>
                </Link>
              </div>)}

            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            {(gContext as any).header.button === "profile" && (<div className="header-btn-devider ml-auto ml-lg-5 pl-2 d-none d-xs-flex align-items-center">
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <div>
                  {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                  <Link href="/#">
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <a className="px-3 ml-7 font-size-7 notification-block flex-y-center position-relative">
                      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                      <i className="fas fa-bell heading-default-color"></i>
                      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                      <span className="font-size-3 count font-weight-semibold text-white bg-primary circle-24 border border-width-3 border border-white">
                        3
                      </span>
                    </a>
                  </Link>
                </div>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <div>
                  {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                  <Dropdown className="show-gr-dropdown py-5">
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <Dropdown.Toggle as="a" className="proile media ml-7 flex-y-center">
                      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                      <div className="circle-40">
                        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                        <img src={imgP} alt=""/>
                      </div>
                      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                      <i className="fas fa-chevron-down heading-default-color ml-6"></i>
                    </Dropdown.Toggle>
                    {/* @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'. */}
                    {size.width <= 991 ? (<Dropdown.Menu className="gr-menu-dropdown border-0 border-width-2 py-2 w-auto bg-default" key="1">
                        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                        <Link href="/#">
                          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                          <a className="dropdown-item py-2 font-size-3 font-weight-semibold line-height-1p2 text-uppercase">
                            Settings
                          </a>
                        </Link>
                        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                        <Link href="/#">
                          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                          <a className="dropdown-item py-2 font-size-3 font-weight-semibold line-height-1p2 text-uppercase">
                            Edit Profile
                          </a>
                        </Link>
                        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                        <Link href="/#">
                          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                          <a className=" dropdown-item py-2 text-red font-size-3 font-weight-semibold line-height-1p2 text-uppercase">
                            Log Out
                          </a>
                        </Link>
                      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                      </Dropdown.Menu>) : (<div className="dropdown-menu gr-menu-dropdown dropdown-right border-0 border-width-2 py-2 w-auto bg-default" key="2">
                        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                        <Link href="/#">
                          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                          <a className="dropdown-item py-2 font-size-3 font-weight-semibold line-height-1p2 text-uppercase">
                            Settings
                          </a>
                        </Link>
                        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                        <Link href="/#">
                          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                          <a className="dropdown-item py-2 font-size-3 font-weight-semibold line-height-1p2 text-uppercase">
                            Edit Profile
                          </a>
                        </Link>
                        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                        <Link href="/#">
                          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                          <a className=" dropdown-item py-2 text-red font-size-3 font-weight-semibold line-height-1p2 text-uppercase">
                            Log Out
                          </a>
                        </Link>
                      </div>)}
                  </Dropdown>
                </div>
              </div>)}

            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            {(gContext as any).header.button === "account" && (<div className="header-btns header-btn-devider ml-auto pr-2 ml-lg-6 d-none d-xs-flex">
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <a className="btn btn-transparent text-uppercase font-size-3 heading-default-color focus-reset" href="/#" onClick={(e) => {
                e.preventDefault();
                (gContext as any).toggleSignInModal();
            }}>
                  Log In
                </a>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <a className={`btn btn-${(gContext as any).header.variant} text-uppercase font-size-3`} href="/#" onClick={(e) => {
                e.preventDefault();
                (gContext as any).toggleSignUpModal();
            }}>
                  Sign Up
                </a>
              </div>)}

            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <ToggleButton className={`navbar-toggler btn-close-off-canvas ml-3 ${(gContext as any).visibleOffCanvas ? "collapsed" : ""}`} type="button" data-toggle="collapse" data-target="#mobile-menu" aria-controls="mobile-menu" aria-expanded="false" aria-label="Toggle navigation" onClick={(gContext as any).toggleOffCanvas} dark={(gContext as any).header.theme === "dark" ? 1 : 0}>
              {/* <i className="icon icon-simple-remove icon-close"></i> */}
              {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <i className="icon icon-menu-34 icon-burger d-block"></i>
            </ToggleButton>
          </nav>
        </Container>
      </SiteHeader>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Offcanvas show={(gContext as any).visibleOffCanvas} onHideOffcanvas={(gContext as any).toggleOffCanvas}>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <NestedMenu menuItems={menuItems}/>
      </Offcanvas>
    </>);
};
export default Header;
