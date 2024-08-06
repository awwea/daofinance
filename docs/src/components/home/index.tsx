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
        title: "Finance & Blockchain",
        Svg: require("@site/static/img/undraw_nakamoto_-2-iv6.svg").default,
        description: (
            <>
                Blockchain can streamline banking and lending services, reducing counterparty risk,
                and decreasing issuance and settlement times. DFI platform permits to use its
                framework to build modern apps with low afford and cost.
            </>
        ),
    },
    {
        title: "Earning",
        Svg: require("@site/static/img/undraw_crypto_flowers_re_dyqo.svg").default,
        description: (
            <>
                By participating in DFI project, which deals with the allocation of liquidity, its management and re-investing, one acquires the right to share on the profits. DAO supports democratic, decentralized finance, all experts agree that the decentralized finance that will be the future trillion market.
            </>
        ),
    },
    {
        title: "Global payments",
        Svg: require("@site/static/img/undraw_pay_online_re_aqe6.svg").default,
        description: (
            <>
                Make cross-border payments seamless, anonymously and easy. Send, receive, and transact Stablecoins and Fiat such as EUR, GBP, USD with minimal fees and no hidden costs, and/or instantly convert them to your preferred currency.
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
            <div className="text--center padding-vert--lg">
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
                <div className="row padding-vert--xl">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
