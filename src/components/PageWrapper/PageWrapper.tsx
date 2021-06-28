import React, { useEffect, useContext } from "react";
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../context/GlobalContext' was resolved ... Remove this comment to see the full error message
import GlobalContext from "../../context/GlobalContext";
const headerConfigDefault = {
    theme: "light",
    bgClass: "dynamic-sticky-bg",
    variant: "primary",
    align: "right",
    isFluid: false,
    button: "account",
    buttonText: "Get started free",
    reveal: true,
};
const footerConfigDefault = {
    theme: "dark",
    style: "style1", //style1, style2, style3
};
const PageWrapper = ({ children, headerConfig = null, footerConfig = null }: any) => {
    const gContext = useContext(GlobalContext);
    useEffect(() => {
        if ((gContext as any).themeDark) {
            (gContext as any).setHeader({
                ...headerConfigDefault,
                ...headerConfig,
                theme: "dark",
            });
            (gContext as any).setFooter({
                ...footerConfigDefault,
                ...footerConfig,
                theme: "dark",
            });
        }
        else {
            (gContext as any).setHeader({ ...headerConfigDefault, ...headerConfig });
            (gContext as any).setFooter({ ...footerConfigDefault, ...footerConfig });
        }
    }, [(gContext as any).themeDark]);
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    return <>{children}</>;
};
export default PageWrapper;
