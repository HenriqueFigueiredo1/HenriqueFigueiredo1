/* see test.html for example matchHeight usage */

/* testing page code only, you wont need this! */

(function() {

    // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
    $(function() {
        bindTestOptions();
    });

    var bindTestOptions = function() {
        resetTestOptions();
        // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
        $('.option').change(resetTestOptions);
    };

    var resetTestOptions = function() {
        // update test options
        // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
        $('.option').each(function(this: any) {
            // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
            var $this = $(this);
            // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
            $('body').toggleClass($this.val(), $this.prop('checked'));
        });

        // update byRow option
        // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
        var byRow = $('body').hasClass('test-rows');
        // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
        $.each($.fn.matchHeight._groups, function(this: any) {
            this.byRow = byRow;
        });

        // update all heights
        // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
        $.fn.matchHeight._update();
    };

})();