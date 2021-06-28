import React from "react";

// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '../../assets/image/l1/png/bran... Remove this comment to see the full error message
import imgB1 from "../../assets/image/l1/png/brand-logo-1.png";
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '../../assets/image/l1/png/bran... Remove this comment to see the full error message
import imgB2 from "../../assets/image/l1/png/brand-logo-2.png";
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '../../assets/image/l1/png/bran... Remove this comment to see the full error message
import imgB3 from "../../assets/image/l1/png/brand-logo-3.png";
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '../../assets/image/l1/png/bran... Remove this comment to see the full error message
import imgB4 from "../../assets/image/l1/png/brand-logo-4.png";
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '../../assets/image/l1/png/bran... Remove this comment to see the full error message
import imgB5 from "../../assets/image/l1/png/brand-logo-5.png";
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '../../assets/image/l1/png/bran... Remove this comment to see the full error message
import imgB6 from "../../assets/image/l1/png/brand-logo-6.png";

const Brands = () => {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      {/* <!-- Brands Area --> */}
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <div className="bg-black-2 dark-mode-texts pt-13 pt-lg-24 pb-12 pb-lg-23">
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <div className="container">
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <div className="row">
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <div className="col-12">
              {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <div className="section-title mb-9 text-center text-lg-left">
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <h5 className="font-size-5 font-weight-normal">
                  Get hired in top companies
                </h5>
              </div>
            </div>
          </div>
          {/* <!-- Brand Logos --> */}
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <div className="row align-items-center justify-content-center justify-content-lg-between">
            {/* <!-- Single Brand --> */}
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <div
              className="single-brand-logo mx-5 my-6"
              data-aos="fade-in"
              data-aos-duration="800"
            >
              {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <img src={imgB1} alt="" />
            </div>
            {/* <!-- Single Brand --> */}
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <div
              className="single-brand-logo mx-5 my-6"
              data-aos="fade-in"
              data-aos-duration="800"
              data-aos-delay="300"
            >
              {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <img src={imgB2} alt="" />
            </div>
            {/* <!-- Single Brand --> */}
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <div
              className="single-brand-logo mx-5 my-6"
              data-aos="fade-in"
              data-aos-duration="800"
              data-aos-delay="500"
            >
              {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <img src={imgB3} alt="" />
            </div>
            {/* <!-- Single Brand --> */}
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <div
              className="single-brand-logo mx-5 my-6"
              data-aos="fade-in"
              data-aos-duration="800"
              data-aos-delay="700"
            >
              {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <img src={imgB4} alt="" />
            </div>
            {/* <!-- Single Brand --> */}
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <div
              className="single-brand-logo mx-5 my-6"
              data-aos="fade-in"
              data-aos-duration="800"
              data-aos-delay="900"
            >
              {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <img src={imgB5} alt="" />
            </div>
            {/* <!-- Single Brand --> */}
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <div
              className="single-brand-logo mx-5 my-6"
              data-aos="fade-in"
              data-aos-duration="800"
              data-aos-delay="1200"
            >
              {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <img src={imgB6} alt="" />
            </div>
          </div>
          {/* <!-- End Brand Logos --> */}
        </div>
      </div>
    </>
  );
};

export default Brands;
