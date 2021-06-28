import React from "react";
import PageWrapper from "../components/PageWrapper";
// @ts-expect-error ts-migrate(6142) FIXME: Module '../sections/landing1/Hero' was resolved to... Remove this comment to see the full error message
import Hero from "../sections/landing1/Hero";
// @ts-expect-error ts-migrate(6142) FIXME: Module '../sections/landing1/Brands' was resolved ... Remove this comment to see the full error message
import Brands from "../sections/landing1/Brands";
// @ts-expect-error ts-migrate(6142) FIXME: Module '../sections/landing1/Categories' was resol... Remove this comment to see the full error message
import Categories from "../sections/landing1/Categories";
// @ts-expect-error ts-migrate(6142) FIXME: Module '../sections/landing1/Content1' was resolve... Remove this comment to see the full error message
import Content1 from "../sections/landing1/Content1";
// @ts-expect-error ts-migrate(6142) FIXME: Module '../sections/landing1/FeaturedJobs' was res... Remove this comment to see the full error message
import FeaturedJobs from "../sections/landing1/FeaturedJobs";
// @ts-expect-error ts-migrate(6142) FIXME: Module '../sections/landing1/Content2' was resolve... Remove this comment to see the full error message
import Content2 from "../sections/landing1/Content2";

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
        <Brands />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Categories />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Content1 />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <FeaturedJobs />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Content2 />
      </PageWrapper>
    </>
  );
};
export default IndexPage;
