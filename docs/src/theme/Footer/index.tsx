import React from "react";

import { useThemeConfig } from "@docusaurus/theme-common";
import FooterCopyright from "@theme/Footer/Copyright";
import FooterLayout from "@theme/Footer/Layout";
import FooterLinks from "@theme/Footer/Links";
import FooterLogo from "@theme/Footer/Logo";

function Footer(): JSX.Element | null {
    const { footer } = useThemeConfig();
    if (!footer) {
        return null;
    }
    const { copyright, links, logo, style } = footer;

    const disclaimer =
        "<b>Disclaimer</b>: The market for crypto assets and the purchase of crypto assets constitute a high risk. Those are subject to high fluctuations in value, and there is no allways real underlying asset except (stable coins). Declines in value or a rapid, complete loss of the money spent are possible at any time. Past performance is not a reliable indicator of future performance. ";
    return (
        <FooterLayout
            style={style}
            links={links && links.length > 0 && <FooterLinks links={links} />}
            logo={logo && <FooterLogo logo={logo} />}
            copyright={copyright && <FooterCopyright copyright={disclaimer + copyright} />}
        />
    );
}

export default React.memo(Footer);
