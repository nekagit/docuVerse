import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Heading from "@theme/Heading";
import Layout from "@theme/Layout";
import clsx from "clsx";

import IndexComponent from "../components/index";
import styles from "./index.module.css";


function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header
      className={clsx(
        "hero hero--primary animate-slide-down",
        styles.heroBanner
      )}
    >
      <div className="container">
        <Heading as="h1" className="hero__title  animate-slide-down">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <div
          className=" animate-slide-down"
          style={{ marginBottom: "3rem!important", height: "3rem" }}
        ></div>
        <IndexComponent />
      </main>
    </Layout>
  );
}
