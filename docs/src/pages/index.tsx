import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Head from '@docusaurus/Head';
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import clsx from "clsx";

import Features from "@site/src/components/home";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function Header() {
    const { siteConfig } = useDocusaurusContext();
    return (
    <>
        <header className={clsx("hero hero--primary", styles.heroBanner)}>
            <div className="container">
                <div className="row padding-vert--md">
                    <div className="col col--7">
                        <Heading as="h1" className="hero__title">
                            I'm {siteConfig.organizationName} ({siteConfig.title})
                        </Heading>
                        <p className="hero__subtitle">{siteConfig.tagline}</p>
                        <div className={styles.heroButtons}>
                            <Link
                                className="button button--secondary button--outline button--lg"
                                to="/protocol/start"
                            >
                                Get Started
                            </Link>
                            <Link
                                className="button button--secondary button--outline button--lg margin-horiz--sm"
                                to="/intro"
                            >
                                Read Docs
                            </Link>
                        </div>
                    </div>
                    <div className="col col--5">
                        <div className="margin-top--md">
                            <video
                                width="100%"
                                height="100%"
                                className={styles.video + " border"}
                                poster="/img/free.jpg"
                                preload="auto"
                                controls
                            >
                                <source
                                    src="https://dom.finance/videos/intro.mp4"
                                    type="video/mp4"
                                />
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </>
    );
}

export default function Home(): JSX.Element {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout title={`${siteConfig.title}`} description={siteConfig.tagline}>
            <Head>
                <title>{siteConfig.organizationName} | {siteConfig.title}</title>
                <meta name="generator" content="daofinance" />
                <meta charSet="utf-8" />
            </Head>
            <Header />
            <main>
                <Features />
            </main>
        </Layout>
    );
}
