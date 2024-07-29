import React from "react";

import { useThemeConfig } from "@docusaurus/theme-common";
import FooterDisclaimer from "@theme/Footer/Disclaimer";
import FooterCopyright from "@theme/Footer/Copyright";
import FooterLayout from "@theme/Footer/Layout";
import FooterLinks from "@theme/Footer/Links";
import FooterLogo from "@theme/Footer/Logo";

function Footer(): JSX.Element | null {
    const { footer, customFields } = useThemeConfig();
    if (!footer) {
        return null;
    }
    const { copyright, links, logo, style } = footer;
    const {disclaimer} = customFields;
    return (
        <FooterLayout
            style={style}
            links={links && links.length > 0 && <FooterLinks links={links} />}
            logo={logo && <FooterLogo logo={logo} />}
            disclaimer={disclaimer && <FooterDisclaimer disclaimer={disclaimer} />}
            copyright={copyright && <FooterCopyright copyright={copyright} />}
        />
    );
}

export default React.memo(Footer);
