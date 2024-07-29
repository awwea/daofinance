import React from "react";

import styles from "./styles.module.css";

export default function FooterDisclaimer({ disclaimer }): JSX.Element {
    return (
        <div
            className="footer__disclaimer"
            // Developer provided the HTML, so assume it's safe.
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: disclaimer }}
        />
    );
}
