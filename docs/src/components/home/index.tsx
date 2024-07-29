import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
    title: string;
    Svg: React.ComponentType<React.ComponentProps<"svg">>;
    description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
    {
        title: "Finance on Blockchain",
        Svg: require("@site/static/img/undraw_nakamoto_-2-iv6.svg").default,
        description: (
            <>
                Blockchain can streamline banking and lending services, reducing counterparty risk,
                and decreasing issuance and settlement times. DFI platform permits you use its
                framework to build modern apps with low afford & cost.
            </>
        ),
    },
    {
        title: "Earn interest",
        Svg: require("@site/static/img/undraw_crypto_flowers_re_dyqo.svg").default,
        description: (
            <>
                Earn interest on deposits with daily payouts, and enjoy peace of mind with FIAT
                deposits up to USD 100,000 protected by the DAOFINANCE Guarantee Deposit Scheme.
            </>
        ),
    },
    {
        title: "Global payments",
        Svg: require("@site/static/img/undraw_pay_online_re_aqe6.svg").default,
        description: (
            <>
                Make cross-border payments seamless, anonymously and easy. Send, receive, and
                transact Stablecoins and FIAT EUR, GBP, USD with minimal fees and no hidden costs,
                and/or instantly convert them to your preferred currency.
            </>
        ),
    },
];

function Feature({ title, Svg, description }: FeatureItem) {
    return (
        <div className={clsx("col col--4")}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img" />
            </div>
            <div className="text--center padding-horiz--md">
                <Heading as="h3">{title}</Heading>
                <p className="text--justify">{description}</p>
            </div>
        </div>
    );
}

export default function Features(): JSX.Element {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row padding-vert--lg">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
