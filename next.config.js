// @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'require'. Do you need to install... Remove this comment to see the full error message
const withOptimizedImages = require("next-optimized-images");
// @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'require'. Do you need to install... Remove this comment to see the full error message
const withFonts = require("next-fonts");

// @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'module'. Do you need to install ... Remove this comment to see the full error message
module.exports = withFonts(
  withOptimizedImages({
    /* config for next-optimized-images */
    // your config for other plugins or the general next.js here...
  })
);
