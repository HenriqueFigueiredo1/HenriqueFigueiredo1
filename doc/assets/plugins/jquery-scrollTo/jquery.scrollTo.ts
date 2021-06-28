/*!
 * jQuery.scrollTo
 * Copyright (c) 2007-2015 Ariel Flesler - aflesler<a>gmail<d>com | http://flesler.blogspot.com
 * Licensed under MIT
 * http://flesler.blogspot.com/2007/10/jqueryscrollto.html
 * @projectDescription Lightweight, cross-browser and highly customizable animated scrolling with jQuery
 * @author Ariel Flesler
 * @version 2.1.1
 */
;
(function (factory) {
    'use strict';
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'define'.
    if (typeof define === 'function' && define.amd) {
        // AMD
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'define'.
        define(['jquery'], factory);
    }
    // @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'module'. Do you need to install ... Remove this comment to see the full error message
    else if (typeof module !== 'undefined' && module.exports) {
        // CommonJS
        // @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'module'. Do you need to install ... Remove this comment to see the full error message
        module.exports = factory(require('jquery'));
    }
    else {
        // Global
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jQuery'.
        factory(jQuery);
    }
// @ts-expect-error ts-migrate(7006) FIXME: Parameter '$' implicitly has an 'any' type.
})(function ($) {
    'use strict';
    // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'target' implicitly has an 'any' type.
    var $scrollTo = $.scrollTo = function (target, duration, settings) {
        return $(window).scrollTo(target, duration, settings);
    };
    ($scrollTo as any).defaults = {
        axis: 'xy',
        duration: 0,
        limit: true
    };
    // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'elem' implicitly has an 'any' type.
    function isWin(elem) {
        return !elem.nodeName ||
            $.inArray(elem.nodeName.toLowerCase(), ['iframe', '#document', 'html', 'body']) !== -1;
    }
    // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'target' implicitly has an 'any' type.
    $.fn.scrollTo = function (target, duration, settings) {
        if (typeof duration === 'object') {
            settings = duration;
            duration = 0;
        }
        if (typeof settings === 'function') {
            settings = { onAfter: settings };
        }
        if (target === 'max') {
            target = 9e9;
        }
        settings = $.extend({}, ($scrollTo as any).defaults, settings);
        // Speed is still recognized for backwards compatibility
        duration = duration || settings.duration;
        // Make sure the settings are given right
        var queue = settings.queue && settings.axis.length > 1;
        if (queue) {
            // Let's keep the overall duration
            duration /= 2;
        }
        settings.offset = both(settings.offset);
        settings.over = both(settings.over);
        return this.each(function () {
            // Null target yields nothing, just like jQuery does
            if (target === null)
                return;
            // @ts-expect-error ts-migrate(2683) FIXME: 'this' implicitly has type 'any' because it does n... Remove this comment to see the full error message
            var win = isWin(this), elem = win ? this.contentWindow || window : this, $elem = $(elem), targ = target, attr = {}, toff;
            switch (typeof targ) {
                // A number will pass the regex
                case 'number':
                case 'string':
                    // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'string | number' is not assignab... Remove this comment to see the full error message
                    if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(targ)) {
                        targ = both(targ);
                        // We are done
                        break;
                    }
                    // Relative/Absolute selector
                    targ = win ? $(targ) : $(targ, elem);
                    if (!targ.length)
                        return;
                /* falls through */
                case 'object':
                    // DOMElement / jQuery
                    if (targ.is || targ.style) {
                        // Get the real position of the target
                        toff = (targ = $(targ)).offset();
                    }
            }
            var offset = $.isFunction(settings.offset) && settings.offset(elem, targ) || settings.offset;
            // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'i' implicitly has an 'any' type.
            $.each(settings.axis.split(''), function (i, axis) {
                var Pos = axis === 'x' ? 'Left' : 'Top', pos = Pos.toLowerCase(), key = 'scroll' + Pos, prev = $elem[key](), max = ($scrollTo as any).max(elem, axis);
                // @ts-expect-error ts-migrate(7005) FIXME: Variable 'toff' implicitly has an 'any' type.
                if (toff) { // jQuery / DOMElement
                    // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
                    attr[key] = toff[pos] + (win ? 0 : prev - $elem.offset()[pos]);
                    // If it's a dom element, reduce the margin
                    if (settings.margin) {
                        // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
                        attr[key] -= parseInt(targ.css('margin' + Pos), 10) || 0;
                        // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
                        attr[key] -= parseInt(targ.css('border' + Pos + 'Width'), 10) || 0;
                    }
                    // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
                    attr[key] += offset[pos] || 0;
                    if (settings.over[pos]) {
                        // Scroll to a fraction of its width/height
                        // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
                        attr[key] += targ[axis === 'x' ? 'width' : 'height']() * settings.over[pos];
                    }
                }
                else {
                    var val = targ[pos];
                    // Handle percentage values
                    // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
                    attr[key] = val.slice && val.slice(-1) === '%' ?
                        parseFloat(val) / 100 * max
                        : val;
                }
                // Number or 'number'
                // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
                if (settings.limit && /^\d+$/.test(attr[key])) {
                    // Check the limits
                    // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
                    attr[key] = attr[key] <= 0 ? 0 : Math.min(attr[key], max);
                }
                // Don't waste time animating, if there's no need.
                if (!i && settings.axis.length > 1) {
                    // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
                    if (prev === attr[key]) {
                        // No animation needed
                        attr = {};
                    }
                    else if (queue) {
                        // Intermediate animation
                        animate(settings.onAfterFirst);
                        // Don't animate this axis again in the next iteration.
                        attr = {};
                    }
                }
            });
            animate(settings.onAfter);
            // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'callback' implicitly has an 'any' type.
            function animate(callback) {
                var opts = $.extend({}, settings, {
                    // The queue setting conflicts with animate()
                    // Force it to always be true
                    queue: true,
                    duration: duration,
                    complete: callback && function () {
                        callback.call(elem, targ, settings);
                    }
                });
                $elem.animate(attr, opts);
            }
        });
    };
    // Max scrolling position, works on quirks mode
    // It only fails (not too badly) on IE, quirks mode.
    // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'elem' implicitly has an 'any' type.
    ($scrollTo as any).max = function (elem, axis) {
        var Dim = axis === 'x' ? 'Width' : 'Height', scroll = 'scroll' + Dim;
        if (!isWin(elem))
            return elem[scroll] - $(elem)[Dim.toLowerCase()]();
        var size = 'client' + Dim, doc = elem.ownerDocument || elem.document, html = doc.documentElement, body = doc.body;
        return Math.max(html[scroll], body[scroll]) - Math.min(html[size], body[size]);
    };
    // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'val' implicitly has an 'any' type.
    function both(val) {
        return $.isFunction(val) || $.isPlainObject(val) ? val : { top: val, left: val };
    }
    // Add special hooks so that window scroll properties can be animated
    $.Tween.propHooks.scrollLeft =
        $.Tween.propHooks.scrollTop = {
            // @ts-expect-error ts-migrate(7006) FIXME: Parameter 't' implicitly has an 'any' type.
            get: function (t) {
                return $(t.elem)[t.prop]();
            },
            // @ts-expect-error ts-migrate(7006) FIXME: Parameter 't' implicitly has an 'any' type.
            set: function (t) {
                var curr = this.get(t);
                // If interrupt is true and user scrolled, stop animating
                if (t.options.interrupt && t._last && t._last !== curr) {
                    return $(t.elem).stop();
                }
                var next = Math.round(t.now);
                // Don't waste CPU
                // Browsers don't render floating point scroll
                if (curr !== next) {
                    $(t.elem)[t.prop](next);
                    t._last = this.get(t);
                }
            }
        };
    // AMD requirement
    return $scrollTo;
});
