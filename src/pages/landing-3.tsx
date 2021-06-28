import React from "react";
import PageWrapper from "../components/PageWrapper";
// @ts-expect-error ts-migrate(6142) FIXME: Module '../sections/landing3/Hero' was resolved to... Remove this comment to see the full error message
import Hero from "../sections/landing3/Hero";
// @ts-expect-error ts-migrate(6142) FIXME: Module '../sections/landing3/Services' was resolve... Remove this comment to see the full error message
import Services from "../sections/landing3/Services";
// @ts-expect-error ts-migrate(6142) FIXME: Module '../sections/landing3/FeaturedJobs' was res... Remove this comment to see the full error message
import FeaturedJobs from "../sections/landing3/FeaturedJobs";
// @ts-expect-error ts-migrate(6142) FIXME: Module '../sections/landing3/Content1' was resolve... Remove this comment to see the full error message
import Content1 from "../sections/landing3/Content1";
// @ts-expect-error ts-migrate(6142) FIXME: Module '../sections/landing3/Content2' was resolve... Remove this comment to see the full error message
import Content2 from "../sections/landing3/Content2";
// @ts-expect-error ts-migrate(6142) FIXME: Module '../sections/landing3/Slider' was resolved ... Remove this comment to see the full error message
import Slider from "../sections/landing3/Slider";
// @ts-expect-error ts-migrate(6142) FIXME: Module '../sections/landing3/Pricing' was resolved... Remove this comment to see the full error message
import Pricing from "../sections/landing3/Pricing";

const IndexPage = () => {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <PageWrapper
        headerConfig={{
          bgClass: "dynamic-sticky-bg",
        }}
      >
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Hero />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Services />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <FeaturedJobs />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Content1 />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Content2 />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Slider />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Pricing />
      </PageWrapper>
    </>
  );
};
export default IndexPage;
