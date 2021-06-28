import React from "react";
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from "styled-components";
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import SlickSlider from "react-slick";

// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '../../assets/image/l3/png/test... Remove this comment to see the full error message
import imgT1 from "../../assets/image/l3/png/testimonial.png";
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '../../assets/image/l3/png/test... Remove this comment to see the full error message
import imgTB from "../../assets/image/l3/png/testimonial-brand-logo.png";

const SliderItem = styled.div`
  &:focus {
    outline: none;
  }
`;

const Slider = () => {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <div className="bg-black-2 pattern-1 bg-image pt-13 pt-lg-31 pb-24 pb-lg-33 overflow-hidden">
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <div className="container">
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <div className="row justify-content-center">
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <div
              className="col-12 col-xl-10 col-lg-12 col-md-10 col-xs-11 z-index-2 pt-lg-3 pb-lg-2"
              data-aos="fade-in"
              data-aos-duration="1000"
            >
              {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <SlickSlider {...settings} className="testimonial-slider-one">
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <SliderItem className="single-slider bg-white rounded-4">
                  {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                  <div className="row no-gutters align-items-center justify-content-center">
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <div className="col-12 col-xl-5 col-lg-5">
                      {/* <!-- Slide Image --> */}
                      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                      <div className="slide-img">
                        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                        <img
                          className="rounded-left w-100"
                          src={imgT1}
                          alt=""
                        />
                      </div>
                    </div>
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <div className="col-12 col-xl-7 col-lg-7 col-xs-10">
                      {/* <!-- Slide content Start --> */}
                      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                      <div className="slide-content pl-5 pl-lg-10 pl-xxl-20 pr-5 pr-xl-5 py-lg-5 py-9">
                        {/* <!-- Slide Brand Image --> */}
                        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                        <div className="mb-11">
                          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                          <img src={imgTB} alt="" />
                        </div>
                        {/* <!-- Slide Info --> */}
                        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                        <div className="">
                          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                          <p className="font-size-6 text-black-2 pr-5 mb-10">
                            “Being a small but growing brand, we have to
                            definitely do a lot more with less. And when you
                            want to create a business bigger than yourself,
                            you’re going to need help. And that’s what Justcamp
                            does.”
                          </p>
                          {/* <!-- User Info --> */}
                          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                          <div className="">
                            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                            <h4 className="font-size-6 text-black-2 mb-0">
                              Brandon & Rivera
                            </h4>
                            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                            <span className="font-size-4 text-gray">
                              Co-founders of Greener
                            </span>
                          </div>
                        </div>
                        {/* <!-- Slide Info End --> */}
                      </div>
                      {/* <!-- Slide content End --> */}
                    </div>
                  </div>
                </SliderItem>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <SliderItem className="single-slider bg-white rounded-4">
                  {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                  <div className="row no-gutters align-items-center justify-content-center">
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <div className="col-12 col-xl-5 col-lg-5">
                      {/* <!-- Slide Image --> */}
                      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                      <div className="slide-img">
                        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                        <img
                          className="rounded-left w-100"
                          src={imgT1}
                          alt=""
                        />
                      </div>
                    </div>
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <div className="col-12 col-xl-7 col-lg-7 col-xs-10">
                      {/* <!-- Slide content Start --> */}
                      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                      <div className="slide-content pl-5 pl-lg-10 pl-xxl-20 pr-5 pr-xl-5 py-lg-5 py-9">
                        {/* <!-- Slide Brand Image --> */}
                        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                        <div className="mb-11">
                          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                          <img src={imgTB} alt="" />
                        </div>
                        {/* <!-- Slide Info --> */}
                        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                        <div className="">
                          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                          <p className="font-size-6 text-black-2 pr-5 mb-10">
                            “Being a small but growing brand, we have to
                            definitely do a lot more with less. And when you
                            want to create a business bigger than yourself,
                            you’re going to need help. And that’s what Justcamp
                            does.”
                          </p>
                          {/* <!-- User Info --> */}
                          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                          <div className="">
                            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                            <h4 className="font-size-6 text-black-2 mb-0">
                              Brandon & Rivera
                            </h4>
                            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                            <span className="font-size-4 text-gray">
                              Co-founders of Greener
                            </span>
                          </div>
                        </div>
                        {/* <!-- Slide Info End --> */}
                      </div>
                      {/* <!-- Slide content End --> */}
                    </div>
                  </div>
                </SliderItem>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <SliderItem className="single-slider bg-white rounded-4">
                  {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                  <div className="row no-gutters align-items-center justify-content-center">
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <div className="col-12 col-xl-5 col-lg-5">
                      {/* <!-- Slide Image --> */}
                      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                      <div className="slide-img">
                        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                        <img
                          className="rounded-left w-100"
                          src={imgT1}
                          alt=""
                        />
                      </div>
                    </div>
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <div className="col-12 col-xl-7 col-lg-7 col-xs-10">
                      {/* <!-- Slide content Start --> */}
                      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                      <div className="slide-content pl-5 pl-lg-10 pl-xxl-20 pr-5 pr-xl-5 py-lg-5 py-9">
                        {/* <!-- Slide Brand Image --> */}
                        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                        <div className="mb-11">
                          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                          <img src={imgTB} alt="" />
                        </div>
                        {/* <!-- Slide Info --> */}
                        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                        <div className="">
                          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                          <p className="font-size-6 text-black-2 pr-5 mb-10">
                            “Being a small but growing brand, we have to
                            definitely do a lot more with less. And when you
                            want to create a business bigger than yourself,
                            you’re going to need help. And that’s what Justcamp
                            does.”
                          </p>
                          {/* <!-- User Info --> */}
                          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                          <div className="">
                            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                            <h4 className="font-size-6 text-black-2 mb-0">
                              Brandon & Rivera
                            </h4>
                            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                            <span className="font-size-4 text-gray">
                              Co-founders of Greener
                            </span>
                          </div>
                        </div>
                        {/* <!-- Slide Info End --> */}
                      </div>
                      {/* <!-- Slide content End --> */}
                    </div>
                  </div>
                </SliderItem>
              </SlickSlider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
