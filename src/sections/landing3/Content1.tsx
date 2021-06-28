import React from "react";
import Link from "next/link";
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '../../assets/image/l3/png/cont... Remove this comment to see the full error message
import imgC1 from "../../assets/image/l3/png/content-1-img1.png";
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '../../assets/image/l3/png/cont... Remove this comment to see the full error message
import imgC2 from "../../assets/image/l3/png/content-1-img2.png";
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '../../assets/image/l3/png/medi... Remove this comment to see the full error message
import imgM from "../../assets/image/l3/png/media-img1.png";

const Content = () => {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      {/* <!-- Content Area -->  */}
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <section className="pt-13 pt-lg-30 pb-lg-30">
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <div className="container">
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <div className="row align-items-center justify-content-center">
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <div
              className="col-xl-6 col-lg-6 col-md-8 col-xs-10"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <div className="position-relative px-xl-20 pr-md-15 pr-9">
                {/* <!-- content img start --> */}
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <img src={imgC1} alt="" className="w-100 rounded-4" />
                {/* <!-- content img end --> */}
                {/* <!-- abs-content start --> */}
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <div className="abs-content pos-abs-br mb-30 mr-8 rounded-4 rotate-n10 border-10 border-white shadow-2">
                  {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                  <img
                    src={imgC2}
                    alt=""
                    className="rounded-4 border-white border-width-3"
                  />
                </div>
                {/* <!-- abs-content end --> */}
              </div>
            </div>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <div
              className="col-xxl-5 col-xl-6 col-lg-6 col-md-8 col-sm-11"
              data-aos="fade-left"
              data-aos-duration="800"
            >
              {/* <!-- content-2 start --> */}
              {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <div className="content-2 pl-xl-10 d-flex flex-column justify-content-center h-100 pt-lg-0 pt-15 pr-xl-10 pr-xxl-0">
                {/* <!-- content section title start --> */}
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <h2 className="font-size-8 mb-7 pr-xs-13  pr-md-0 pr-sm-8">
                  {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                  Over <span className="text-green">50k+ people</span> landed
                  their first job from Justcamp.
                </h2>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <p className="text-default-color font-size-5 mb-7 mb-lg-12 pr-xxl-13 pr-lg-0 pr-md-10">
                  Leverage agile frameworks to provide a robust synopsis for
                  high level overviews. Iterative things to strategy foster
                  collaborative thinking.
                </p>
                {/* <!-- content section title end --> */}
                {/* <!-- content-2 btn start --> */}
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <Link href="/#">
                  {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                  <a className="text-green font-weight-bold text-uppercase font-size-3">
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    Learn More <i className="fas fa-arrow-right ml-3"></i>
                  </a>
                </Link>
                {/* <!-- content-2 btn end --> */}
                {/* <!-- media start --> */}
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <div className="media mb-9 mt-9 mt-lg-15 pr-sm-10 pr-md-18 pr-xl-20">
                  {/* <!-- media img start --> */}
                  {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                  <div className="media-img">
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <img src={imgM} alt="" className="circle-48" />
                  </div>
                  {/* <!-- media img start --> */}
                  {/* <!-- media body start --> */}
                  {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                  <div className="media-body pl-7">
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <p className="mb-0 font-size-4 heading-default-color mb-7">
                      “Duis pretium gravida enim, vel maximus ligula fermentum
                      a. Sed rhoncus eget ex id egestas. Nam nec nisl placerat,
                      tempus erat a, condimentum metus.”
                    </p>
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <h6 className="mb-0 font-size-4">Davis Jones</h6>
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <p className="font-size-3 text-default-color">
                      Full-Stack Developer
                    </p>
                  </div>
                  {/* <!-- media body start --> */}
                </div>
                {/* <!-- media end --> */}
              </div>
              {/* <!-- content-2 end --> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
