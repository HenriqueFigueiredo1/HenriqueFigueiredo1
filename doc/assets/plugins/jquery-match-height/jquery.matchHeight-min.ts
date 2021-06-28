/**
* jquery.matchHeight-min.js v0.5.2
* http://brm.io/jquery-match-height/
* License: MIT
*/
(function (d) {
    var g = -1, e = -1, n = function (a: any) { var b: any = null, c: any = []; d(a).each(function (this: any) { var a = d(this), k = a.offset().top - h(a.css("margin-top")), l = 0 < c.length ? c[c.length - 1] : null; null === l ? c.push(a) : 1 >= Math.floor(Math.abs(b - k)) ? c[c.length - 1] = l.add(a) : c.push(a); b = k; }); return c; }, h = function (a: any) { return parseFloat(a) || 0; }, b = d.fn.matchHeight = function (a: any) {
        if ("remove" === a) {
            var f = this;
            this.css("height", "");
            d.each((b as any)._groups, function (a: any, b: any) { b.elements = b.elements.not(f); });
            return this;
        }
        if (1 >= this.length)
            return this;
        a = "undefined" !==
            typeof a ? a : !0;
        (b as any)._groups.push({ elements: this, byRow: a });
        (b as any)._apply(this, a);
        return this;
    };
    (b as any)._groups = [];
    (b as any)._throttle = 80;
    (b as any)._maintainScroll = !1;
    (b as any)._beforeUpdate = null;
    (b as any)._afterUpdate = null;
    (b as any)._apply = function (a: any, f: any) {
        var c = d(a), e = [c], k = d(window).scrollTop(), l = d("html").outerHeight(!0), g = c.parents().filter(":hidden");
        g.css("display", "block");
        f && (c.each(function (this: any) {
            var a = d(this), b = "inline-block" === a.css("display") ? "inline-block" : "block";
            a.data("style-cache", a.attr("style"));
            a.css({ display: b, "padding-top": "0", "padding-bottom": "0",
                "margin-top": "0", "margin-bottom": "0", "border-top-width": "0", "border-bottom-width": "0", height: "100px" });
        }), e = n(c), c.each(function (this: any) { var a = d(this); a.attr("style", a.data("style-cache") || "").css("height", ""); }));
        d.each(e, function (a: any, b: any) {
            var c = d(b), e = 0;
            f && 1 >= c.length || (c.each(function (this: any) { var a = d(this), b = "inline-block" === a.css("display") ? "inline-block" : "block"; a.css({ display: b, height: "" }); a.outerHeight(!1) > e && (e = a.outerHeight(!1)); a.css("display", ""); }), c.each(function (this: any) {
                var a = d(this), b = 0;
                "border-box" !== a.css("box-sizing") &&
                    (b += h(a.css("border-top-width")) + h(a.css("border-bottom-width")), b += h(a.css("padding-top")) + h(a.css("padding-bottom")));
                a.css("height", e - b);
            }));
        });
        g.css("display", "");
        (b as any)._maintainScroll && d(window).scrollTop(k / l * d("html").outerHeight(!0));
        return this;
    };
    // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
    (b as any)._applyDataApi = function () { var a = {}; d("[data-match-height], [data-mh]").each(function (this: any) { var b = d(this), c = b.attr("data-match-height") || b.attr("data-mh"); a[c] = c in a ? a[c].add(b) : b; }); d.each(a, function (this: any) { this.matchHeight(!0); }); };
    var m = function (a: any) {
        (b as any)._beforeUpdate &&
            (b as any)._beforeUpdate(a, (b as any)._groups);
        // @ts-expect-error ts-migrate(2300) FIXME: Duplicate identifier 'this'.
        d.each((b as any)._groups, function (this: any, this: any) { (b as any)._apply(this.elements, this.byRow); });
        (b as any)._afterUpdate && (b as any)._afterUpdate(a, (b as any)._groups);
    };
    (b as any)._update = function (a: any, f: any) { if (f && "resize" === f.type) {
        var c = d(window).width();
        if (c === g)
            return;
        g = c;
    } a ? -1 === e && (e = setTimeout(function () { m(f); e = -1; }, (b as any)._throttle)) : m(f); };
    d((b as any)._applyDataApi);
    d(window).bind("load", function (a: any) { (b as any)._update(!1, a); });
    d(window).bind("resize orientationchange", function (a: any) { (b as any)._update(!0, a); });
// @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jQuery'.
})(jQuery);
