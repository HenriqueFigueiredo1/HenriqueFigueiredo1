import React, { useState, useEffect, useContext, useRef } from "react";
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled, { ThemeProvider } from "styled-components";
import Helmet from "next/head";
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'aos'... Remove this comment to see the full error message
import AOS from "aos";
import Header from "../Header";
import Footer from "../Footer";
import SidebarDashboard from "../SidebarDashboard";
import ModalVideo from "../ModalVideo";
import ModalApplication from "../ModalApplication";
import ModalSignIn from "../ModalSignIn";
import ModalSignUp from "../ModalSignUp";
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../context/GlobalContext' was resolved ... Remove this comment to see the full error message
import GlobalContext from "../../context/GlobalContext";
import GlobalStyle from "../../utils/globalStyle";
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '../../assets/favicon.png' or i... Remove this comment to see the full error message
import imgFavicon from "../../assets/favicon.png";
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'loda... Remove this comment to see the full error message
import { get, merge } from "lodash";
// the full theme object
import { theme as baseTheme } from "../../utils";
const Loader = styled.div `
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #fff;
  z-index: 9999999999;
  opacity: 1;
  visibility: visible;
  transition: all 1s ease-out 0.5s;
  &.inActive {
    opacity: 0;
    visibility: hidden;
  }
`;
// options for different color modes
const modes = { light: "light", dark: "dark" };
// merge the color mode with the base theme
// to create a new theme object
const getTheme = (mode: any) => merge({}, baseTheme, {
    colors: get(baseTheme.colors.modes, mode, baseTheme.colors),
});
const Layout = ({ children, pageContext }: any) => {
    const gContext = useContext(GlobalContext);
    const [visibleLoader, setVisibleLoader] = useState(true);
    useEffect(() => {
        AOS.init({ once: true });
        setVisibleLoader(false);
    }, []);
    // Navbar style based on scroll
    const eleRef = useRef();
    useEffect(() => {
        window.addEventListener("popstate", function (event) {
            // The popstate event is fired each time when the current history entry changes.
            (gContext as any).closeOffCanvas();
        }, false);
        window.addEventListener("pushState", function (event) {
            // The pushstate event is fired each time when the current history entry changes.
            (gContext as any).closeOffCanvas();
        }, false);
    }, [gContext]);
    if (pageContext.layout === "bare") {
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        return (<ThemeProvider theme={(gContext as any).themeDark ? getTheme(modes.dark) : getTheme(modes.light)}>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <div data-theme-mode-panel-active data-theme="light">
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <GlobalStyle />
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Helmet>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <title>JustCamp</title>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <link rel="icon" type="image/png" href={imgFavicon}/>
          </Helmet>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Loader id="loading" className={visibleLoader ? "" : "inActive"}>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <div className="load-circle">
              {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <span className="one"></span>
            </div>
          </Loader>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <div className="site-wrapper overflow-hidden" ref={eleRef}>
            {children}
          </div>

          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <ModalVideo />
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <ModalApplication />
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <ModalSignIn />
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <ModalSignUp />
        </div>
      </ThemeProvider>);
    }
    if (pageContext.layout === "dashboard") {
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        return (<ThemeProvider theme={(gContext as any).themeDark ? getTheme(modes.dark) : getTheme(modes.light)}>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <div data-theme-mode-panel-active data-theme="light">
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <GlobalStyle />
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Helmet>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <title>JustCamp</title>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <link rel="icon" type="image/png" href={imgFavicon}/>
          </Helmet>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Loader id="loading" className={visibleLoader ? "" : "inActive"}>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <div className="load-circle">
              {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <span className="one"></span>
            </div>
          </Loader>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <div className="site-wrapper overflow-hidden bg-default-2" ref={eleRef}>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Header isDark={(gContext as any).headerDark}/>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <SidebarDashboard />
            {children}
          </div>

          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <ModalVideo />
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <ModalApplication />
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <ModalSignIn />
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <ModalSignUp />
        </div>
      </ThemeProvider>);
    }
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    return (<>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <ThemeProvider theme={(gContext as any).themeDark ? getTheme(modes.dark) : getTheme(modes.light)}>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <div data-theme-mode-panel-active data-theme="light">
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <GlobalStyle />
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Helmet>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <title>JustCamp</title>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <link rel="icon" type="image/png" href={imgFavicon}/>
          </Helmet>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Loader id="loading" className={visibleLoader ? "" : "inActive"}/>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <div className="site-wrapper overflow-hidden" ref={eleRef}>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Header isDark={(gContext as any).headerDark}/>
            {children}

            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Footer isDark={(gContext as any).footerDark}/>
          </div>

          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <ModalVideo />
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <ModalApplication />
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <ModalSignIn />
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <ModalSignUp />
        </div>
      </ThemeProvider>
    </>);
};
export default Layout;
