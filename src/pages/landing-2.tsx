import React from "react";
import PageWrapper from "../components/PageWrapper";
// @ts-expect-error ts-migrate(6142) FIXME: Module '../sections/landing2/Hero' was resolved to... Remove this comment to see the full error message
import Hero from "../sections/landing2/Hero";
// @ts-expect-error ts-migrate(6142) FIXME: Module '../sections/landing2/Brands' was resolved ... Remove this comment to see the full error message
import Brands from "../sections/landing2/Brands";
// @ts-expect-error ts-migrate(6142) FIXME: Module '../sections/landing2/Categories' was resol... Remove this comment to see the full error message
import Categories from "../sections/landing2/Categories";
// @ts-expect-error ts-migrate(6142) FIXME: Module '../sections/landing2/Content1' was resolve... Remove this comment to see the full error message
import Content1 from "../sections/landing2/Content1";
// @ts-expect-error ts-migrate(6142) FIXME: Module '../sections/landing2/FeaturedJobs' was res... Remove this comment to see the full error message
import FeaturedJobs from "../sections/landing2/FeaturedJobs";
// @ts-expect-error ts-migrate(6142) FIXME: Module '../sections/landing2/Blog' was resolved to... Remove this comment to see the full error message
import Blog from "../sections/landing2/Blog";
// @ts-expect-error ts-migrate(6142) FIXME: Module '../sections/landing2/Content2' was resolve... Remove this comment to see the full error message
import Content2 from "../sections/landing2/Content2";

const IndexPage = () => {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <PageWrapper>
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
        <Blog />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Content2 />
      </PageWrapper>
    </>
  );
};
export default IndexPage;
