/*!
 * Lightbox for Bootstrap by @ashleydw
 * https://github.com/ashleydw/lightbox
 *
 * License: https://github.com/ashleydw/lightbox/blob/master/LICENSE
 */
+function ($) {
    'use strict';
    var _createClass = (function () { function defineProperties(target: any, props: any) { for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ('value' in descriptor)
            descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    } } return function (Constructor: any, protoProps: any, staticProps: any) { if (protoProps)
        defineProperties(Constructor.prototype, protoProps); if (staticProps)
        defineProperties(Constructor, staticProps); return Constructor; }; })();
    function _classCallCheck(instance: any, Constructor: any) { if (!(instance instanceof Constructor)) {
        throw new TypeError('Cannot call a class as a function');
    } }
    var Lightbox = (function ($) {
        var NAME = 'ekkoLightbox';
        var JQUERY_NO_CONFLICT = $.fn[NAME];
        var Default = {
            title: '',
            footer: '',
            maxWidth: 9999,
            maxHeight: 9999,
            showArrows: true,
            wrapping: true,
            type: null,
            alwaysShowClose: false,
            loadingMessage: '<div class="ekko-lightbox-loader"><div><div></div><div></div></div></div>',
            leftArrow: '<span>&#10094;</span>',
            rightArrow: '<span>&#10095;</span>',
            strings: {
                close: 'Close',
                fail: 'Failed to load image:',
                type: 'Could not detect remote target type. Force the type using data-type'
            },
            doc: document,
            onShow: function onShow() { },
            onShown: function onShown() { },
            onHide: function onHide() { },
            onHidden: function onHidden() { },
            onNavigate: function onNavigate() { },
            onContentLoaded: function onContentLoaded() { }
        };
        var Lightbox = (function () {
            _createClass(Lightbox, null, [{
                    key: 'Default',
                    /**
               Class properties:
             _$element: null -> the <a> element currently being displayed
            _$modal: The bootstrap modal generated
               _$modalDialog: The .modal-dialog
               _$modalContent: The .modal-content
               _$modalBody: The .modal-body
               _$modalHeader: The .modal-header
               _$modalFooter: The .modal-footer
            _$lightboxContainerOne: Container of the first lightbox element
            _$lightboxContainerTwo: Container of the second lightbox element
            _$lightboxBody: First element in the container
            _$modalArrows: The overlayed arrows container
             _$galleryItems: Other <a>'s available for this gallery
            _galleryName: Name of the current data('gallery') showing
            _galleryIndex: The current index of the _$galleryItems being shown
             _config: {} the options for the modal
            _modalId: unique id for the current lightbox
            _padding / _border: CSS properties for the modal container; these are used to calculate the available space for the content
             */
                    get: function get() {
                        return Default;
                    }
                }]);
            // @ts-expect-error ts-migrate(2300) FIXME: Duplicate identifier 'this'.
            function Lightbox(this: any, this: any, $element, config) {
                var _this = this;
                _classCallCheck(this, Lightbox);
                this._config = $.extend({}, Default, config);
                this._$modalArrows = null;
                this._galleryIndex = 0;
                this._galleryName = null;
                this._padding = null;
                this._border = null;
                this._titleIsShown = false;
                this._footerIsShown = false;
                this._wantedWidth = 0;
                this._wantedHeight = 0;
                this._touchstartX = 0;
                this._touchendX = 0;
                this._modalId = 'ekkoLightbox-' + Math.floor(Math.random() * 1000 + 1);
                // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jQuery'.
                this._$element = $element instanceof jQuery ? $element : $($element);
                this._isBootstrap3 = $.fn.modal.Constructor.VERSION[0] == 3;
                var h4 = '<h4 class="modal-title">' + (this._config.title || "&nbsp;") + '</h4>';
                var btn = '<button type="button" class="close" data-dismiss="modal" aria-label="' + this._config.strings.close + '"><span aria-hidden="true">&times;</span></button>';
                var header = '<div class="modal-header' + (this._config.title || this._config.alwaysShowClose ? '' : ' hide') + '">' + (this._isBootstrap3 ? btn + h4 : h4 + btn) + '</div>';
                var footer = '<div class="modal-footer' + (this._config.footer ? '' : ' hide') + '">' + (this._config.footer || "&nbsp;") + '</div>';
                var body = '<div class="modal-body"><div class="ekko-lightbox-container"><div class="ekko-lightbox-item fade in show"></div><div class="ekko-lightbox-item fade"></div></div></div>';
                var dialog = '<div class="modal-dialog" role="document"><div class="modal-content">' + header + body + footer + '</div></div>';
                $(this._config.doc.body).append('<div id="' + this._modalId + '" class="ekko-lightbox modal fade" tabindex="-1" tabindex="-1" role="dialog" aria-hidden="true">' + dialog + '</div>');
                this._$modal = $('#' + this._modalId, this._config.doc);
                this._$modalDialog = this._$modal.find('.modal-dialog').first();
                this._$modalContent = this._$modal.find('.modal-content').first();
                this._$modalBody = this._$modal.find('.modal-body').first();
                this._$modalHeader = this._$modal.find('.modal-header').first();
                this._$modalFooter = this._$modal.find('.modal-footer').first();
                this._$lightboxContainer = this._$modalBody.find('.ekko-lightbox-container').first();
                this._$lightboxBodyOne = this._$lightboxContainer.find('> div:first-child').first();
                this._$lightboxBodyTwo = this._$lightboxContainer.find('> div:last-child').first();
                this._border = this._calculateBorders();
                this._padding = this._calculatePadding();
                this._galleryName = this._$element.data('gallery');
                if (this._galleryName) {
                    this._$galleryItems = $(document.body).find('*[data-gallery="' + this._galleryName + '"]');
                    this._galleryIndex = this._$galleryItems.index(this._$element);
                    $(document).on('keydown.ekkoLightbox', this._navigationalBinder.bind(this));
                    // add the directional arrows to the modal
                    if (this._config.showArrows && this._$galleryItems.length > 1) {
                        this._$lightboxContainer.append('<div class="ekko-lightbox-nav-overlay"><a href="#">' + this._config.leftArrow + '</a><a href="#">' + this._config.rightArrow + '</a></div>');
                        this._$modalArrows = this._$lightboxContainer.find('div.ekko-lightbox-nav-overlay').first();
                        // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'event' implicitly has an 'any' type.
                        this._$lightboxContainer.on('click', 'a:first-child', function (event) {
                            event.preventDefault();
                            return _this.navigateLeft();
                        });
                        // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'event' implicitly has an 'any' type.
                        this._$lightboxContainer.on('click', 'a:last-child', function (event) {
                            event.preventDefault();
                            return _this.navigateRight();
                        });
                        this.updateNavigation();
                    }
                }
                this._$modal.on('show.bs.modal', this._config.onShow.bind(this)).on('shown.bs.modal', function () {
                    _this._toggleLoading(true);
                    _this._handle();
                    return _this._config.onShown.call(_this);
                }).on('hide.bs.modal', this._config.onHide.bind(this)).on('hidden.bs.modal', function () {
                    if (_this._galleryName) {
                        $(document).off('keydown.ekkoLightbox');
                        $(window).off('resize.ekkoLightbox');
                    }
                    _this._$modal.remove();
                    return _this._config.onHidden.call(_this);
                }).modal(this._config);
                $(window).on('resize.ekkoLightbox', function () {
                    _this._resize(_this._wantedWidth, _this._wantedHeight);
                });
                this._$lightboxContainer.on('touchstart', function () {
                    _this._touchstartX = (event as any).changedTouches[0].screenX;
                }).on('touchend', function () {
                    _this._touchendX = (event as any).changedTouches[0].screenX;
                    _this._swipeGesure();
                });
            }
            _createClass(Lightbox, [{
                    key: 'element',
                    value: function element() {
                        return (this as any)._$element;
                    }
                }, {
                    key: 'modal',
                    value: function modal() {
                        return (this as any)._$modal;
                    }
                }, {
                    key: 'navigateTo',
                    // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'index' implicitly has an 'any' type.
                    value: function navigateTo(index) {
                        if (index < 0 || index > (this as any)._$galleryItems.length - 1)
                            return this;
                        (this as any)._galleryIndex = index;
                        (this as any).updateNavigation();
                        (this as any)._$element = $((this as any)._$galleryItems.get((this as any)._galleryIndex));
                        (this as any)._handle();
                    }
                }, {
                    key: 'navigateLeft',
                    value: function navigateLeft() {
                        if (!(this as any)._$galleryItems)
                            return;
                        if ((this as any)._$galleryItems.length === 1)
                            return;
                        if ((this as any)._galleryIndex === 0) {
                            if ((this as any)._config.wrapping)
                                (this as any)._galleryIndex = (this as any)._$galleryItems.length - 1;
                            else
                                return;
                        }
                        else //circular
                            (this as any)._galleryIndex--;
                        (this as any)._config.onNavigate.call(this, 'left', (this as any)._galleryIndex);
                        return (this as any).navigateTo((this as any)._galleryIndex);
                    }
                }, {
                    key: 'navigateRight',
                    value: function navigateRight() {
                        if (!(this as any)._$galleryItems)
                            return;
                        if ((this as any)._$galleryItems.length === 1)
                            return;
                        if ((this as any)._galleryIndex === (this as any)._$galleryItems.length - 1) {
                            if ((this as any)._config.wrapping)
                                (this as any)._galleryIndex = 0;
                            else
                                return;
                        }
                        else //circular
                            (this as any)._galleryIndex++;
                        (this as any)._config.onNavigate.call(this, 'right', (this as any)._galleryIndex);
                        return (this as any).navigateTo((this as any)._galleryIndex);
                    }
                }, {
                    key: 'updateNavigation',
                    value: function updateNavigation() {
                        if (!(this as any)._config.wrapping) {
                            var $nav = (this as any)._$lightboxContainer.find('div.ekko-lightbox-nav-overlay');
                            if ((this as any)._galleryIndex === 0)
                                $nav.find('a:first-child').addClass('disabled');
                            else
                                $nav.find('a:first-child').removeClass('disabled');
                            if ((this as any)._galleryIndex === (this as any)._$galleryItems.length - 1)
                                $nav.find('a:last-child').addClass('disabled');
                            else
                                $nav.find('a:last-child').removeClass('disabled');
                        }
                    }
                }, {
                    key: 'close',
                    value: function close() {
                        return (this as any)._$modal.modal('hide');
                    }
                    // helper private methods
                }, {
                    key: '_navigationalBinder',
                    // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'event' implicitly has an 'any' type.
                    value: function _navigationalBinder(event) {
                        event = event || window.event;
                        if (event.keyCode === 39)
                            return (this as any).navigateRight();
                        if (event.keyCode === 37)
                            return (this as any).navigateLeft();
                    }
                    // type detection private methods
                }, {
                    key: '_detectRemoteType',
                    // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'src' implicitly has an 'any' type.
                    value: function _detectRemoteType(src, type) {
                        type = type || false;
                        if (!type && (this as any)._isImage(src))
                            type = 'image';
                        if (!type && (this as any)._getYoutubeId(src))
                            type = 'youtube';
                        if (!type && (this as any)._getVimeoId(src))
                            type = 'vimeo';
                        if (!type && (this as any)._getInstagramId(src))
                            type = 'instagram';
                        if (!type || ['image', 'youtube', 'vimeo', 'instagram', 'video', 'url'].indexOf(type) < 0)
                            type = 'url';
                        return type;
                    }
                }, {
                    key: '_isImage',
                    // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'string' implicitly has an 'any' type.
                    value: function _isImage(string) {
                        return string && string.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i);
                    }
                }, {
                    key: '_containerToUse',
                    value: function _containerToUse() {
                        var _this2 = this;
                        // if currently showing an image, fade it out and remove
                        var $toUse = (this as any)._$lightboxBodyTwo;
                        var $current = (this as any)._$lightboxBodyOne;
                        if ((this as any)._$lightboxBodyTwo.hasClass('in')) {
                            $toUse = (this as any)._$lightboxBodyOne;
                            $current = (this as any)._$lightboxBodyTwo;
                        }
                        $current.removeClass('in show');
                        setTimeout(function () {
                            if (!(_this2 as any)._$lightboxBodyTwo.hasClass('in'))
                                (_this2 as any)._$lightboxBodyTwo.empty();
                            if (!(_this2 as any)._$lightboxBodyOne.hasClass('in'))
                                (_this2 as any)._$lightboxBodyOne.empty();
                        }, 500);
                        $toUse.addClass('in show');
                        return $toUse;
                    }
                }, {
                    key: '_handle',
                    value: function _handle() {
                        var $toUse = (this as any)._containerToUse();
                        (this as any)._updateTitleAndFooter();
                        var currentRemote = (this as any)._$element.attr('data-remote') || (this as any)._$element.attr('href');
                        var currentType = (this as any)._detectRemoteType(currentRemote, (this as any)._$element.attr('data-type') || false);
                        if (['image', 'youtube', 'vimeo', 'instagram', 'video', 'url'].indexOf(currentType) < 0)
                            return (this as any)._error((this as any)._config.strings.type);
                        switch (currentType) {
                            case 'image':
                                (this as any)._preloadImage(currentRemote, $toUse);
                                (this as any)._preloadImageByIndex((this as any)._galleryIndex, 3);
                                break;
                            case 'youtube':
                                (this as any)._showYoutubeVideo(currentRemote, $toUse);
                                break;
                            case 'vimeo':
                                (this as any)._showVimeoVideo((this as any)._getVimeoId(currentRemote), $toUse);
                                break;
                            case 'instagram':
                                (this as any)._showInstagramVideo((this as any)._getInstagramId(currentRemote), $toUse);
                                break;
                            case 'video':
                                (this as any)._showHtml5Video(currentRemote, $toUse);
                                break;
                            default:
                                // url
                                (this as any)._loadRemoteContent(currentRemote, $toUse);
                                break;
                        }
                        return this;
                    }
                }, {
                    key: '_getYoutubeId',
                    // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'string' implicitly has an 'any' type.
                    value: function _getYoutubeId(string) {
                        if (!string)
                            return false;
                        var matches = string.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/);
                        return matches && matches[2].length === 11 ? matches[2] : false;
                    }
                }, {
                    key: '_getVimeoId',
                    // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'string' implicitly has an 'any' type.
                    value: function _getVimeoId(string) {
                        return string && string.indexOf('vimeo') > 0 ? string : false;
                    }
                }, {
                    key: '_getInstagramId',
                    // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'string' implicitly has an 'any' type.
                    value: function _getInstagramId(string) {
                        return string && string.indexOf('instagram') > 0 ? string : false;
                    }
                    // layout private methods
                }, {
                    key: '_toggleLoading',
                    // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'show' implicitly has an 'any' type.
                    value: function _toggleLoading(show) {
                        show = show || false;
                        if (show) {
                            (this as any)._$modalDialog.css('display', 'none');
                            (this as any)._$modal.removeClass('in show');
                            $('.modal-backdrop').append((this as any)._config.loadingMessage);
                        }
                        else {
                            (this as any)._$modalDialog.css('display', 'block');
                            (this as any)._$modal.addClass('in show');
                            $('.modal-backdrop').find('.ekko-lightbox-loader').remove();
                        }
                        return this;
                    }
                }, {
                    key: '_calculateBorders',
                    value: function _calculateBorders() {
                        return {
                            top: (this as any)._totalCssByAttribute('border-top-width'),
                            right: (this as any)._totalCssByAttribute('border-right-width'),
                            bottom: (this as any)._totalCssByAttribute('border-bottom-width'),
                            left: (this as any)._totalCssByAttribute('border-left-width')
                        };
                    }
                }, {
                    key: '_calculatePadding',
                    value: function _calculatePadding() {
                        return {
                            top: (this as any)._totalCssByAttribute('padding-top'),
                            right: (this as any)._totalCssByAttribute('padding-right'),
                            bottom: (this as any)._totalCssByAttribute('padding-bottom'),
                            left: (this as any)._totalCssByAttribute('padding-left')
                        };
                    }
                }, {
                    key: '_totalCssByAttribute',
                    // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'attribute' implicitly has an 'any' type... Remove this comment to see the full error message
                    value: function _totalCssByAttribute(attribute) {
                        return parseInt((this as any)._$modalDialog.css(attribute), 10) + parseInt((this as any)._$modalContent.css(attribute), 10) + parseInt((this as any)._$modalBody.css(attribute), 10);
                    }
                }, {
                    key: '_updateTitleAndFooter',
                    value: function _updateTitleAndFooter() {
                        var title = (this as any)._$element.data('title') || "";
                        var caption = (this as any)._$element.data('footer') || "";
                        (this as any)._titleIsShown = false;
                        if (title || (this as any)._config.alwaysShowClose) {
                            (this as any)._titleIsShown = true;
                            (this as any)._$modalHeader.css('display', '').find('.modal-title').html(title || "&nbsp;");
                        }
                        else
                            (this as any)._$modalHeader.css('display', 'none');
                        (this as any)._footerIsShown = false;
                        if (caption) {
                            (this as any)._footerIsShown = true;
                            (this as any)._$modalFooter.css('display', '').html(caption);
                        }
                        else
                            (this as any)._$modalFooter.css('display', 'none');
                        return this;
                    }
                }, {
                    key: '_showYoutubeVideo',
                    // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'remote' implicitly has an 'any' type.
                    value: function _showYoutubeVideo(remote, $containerForElement) {
                        var id = (this as any)._getYoutubeId(remote);
                        var query = remote.indexOf('&') > 0 ? remote.substr(remote.indexOf('&')) : '';
                        var width = (this as any)._$element.data('width') || 560;
                        var height = (this as any)._$element.data('height') || width / (560 / 315);
                        return (this as any)._showVideoIframe('//www.youtube.com/embed/' + id + '?badge=0&autoplay=1&html5=1' + query, width, height, $containerForElement);
                    }
                }, {
                    key: '_showVimeoVideo',
                    // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'id' implicitly has an 'any' type.
                    value: function _showVimeoVideo(id, $containerForElement) {
                        var width = (this as any)._$element.data('width') || 500;
                        var height = (this as any)._$element.data('height') || width / (560 / 315);
                        return (this as any)._showVideoIframe(id + '?autoplay=1', width, height, $containerForElement);
                    }
                }, {
                    key: '_showInstagramVideo',
                    // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'id' implicitly has an 'any' type.
                    value: function _showInstagramVideo(id, $containerForElement) {
                        // instagram load their content into iframe's so this can be put straight into the element
                        var width = (this as any)._$element.data('width') || 612;
                        var height = width + 80;
                        id = id.substr(-1) !== '/' ? id + '/' : id; // ensure id has trailing slash
                        $containerForElement.html('<iframe width="' + width + '" height="' + height + '" src="' + id + 'embed/" frameborder="0" allowfullscreen></iframe>');
                        (this as any)._resize(width, height);
                        (this as any)._config.onContentLoaded.call(this);
                        if ((this as any)._$modalArrows) //hide the arrows when showing video
                            (this as any)._$modalArrows.css('display', 'none');
                        (this as any)._toggleLoading(false);
                        return this;
                    }
                }, {
                    key: '_showVideoIframe',
                    // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'url' implicitly has an 'any' type.
                    value: function _showVideoIframe(url, width, height, $containerForElement) {
                        // should be used for videos only. for remote content use loadRemoteContent (data-type=url)
                        height = height || width; // default to square
                        $containerForElement.html('<div class="embed-responsive embed-responsive-16by9"><iframe width="' + width + '" height="' + height + '" src="' + url + '" frameborder="0" allowfullscreen class="embed-responsive-item"></iframe></div>');
                        (this as any)._resize(width, height);
                        (this as any)._config.onContentLoaded.call(this);
                        if ((this as any)._$modalArrows)
                            (this as any)._$modalArrows.css('display', 'none'); //hide the arrows when showing video
                        (this as any)._toggleLoading(false);
                        return this;
                    }
                }, {
                    key: '_showHtml5Video',
                    // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'url' implicitly has an 'any' type.
                    value: function _showHtml5Video(url, $containerForElement) {
                        // should be used for videos only. for remote content use loadRemoteContent (data-type=url)
                        var width = (this as any)._$element.data('width') || 560;
                        var height = (this as any)._$element.data('height') || width / (560 / 315);
                        $containerForElement.html('<div class="embed-responsive embed-responsive-16by9"><video width="' + width + '" height="' + height + '" src="' + url + '" preload="auto" autoplay controls class="embed-responsive-item"></video></div>');
                        (this as any)._resize(width, height);
                        (this as any)._config.onContentLoaded.call(this);
                        if ((this as any)._$modalArrows)
                            (this as any)._$modalArrows.css('display', 'none'); //hide the arrows when showing video
                        (this as any)._toggleLoading(false);
                        return this;
                    }
                }, {
                    key: '_loadRemoteContent',
                    // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'url' implicitly has an 'any' type.
                    value: function _loadRemoteContent(url, $containerForElement) {
                        var _this3 = this;
                        var width = (this as any)._$element.data('width') || 560;
                        var height = (this as any)._$element.data('height') || 560;
                        var disableExternalCheck = (this as any)._$element.data('disableExternalCheck') || false;
                        (this as any)._toggleLoading(false);
                        // external urls are loading into an iframe
                        // local ajax can be loaded into the container itself
                        if (!disableExternalCheck && !(this as any)._isExternal(url)) {
                            $containerForElement.load(url, $.proxy(function () {
                                return (_this3 as any)._$element.trigger('loaded.bs.modal');
                                // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'l'.
                                l;
                            }));
                        }
                        else {
                            $containerForElement.html('<iframe src="' + url + '" frameborder="0" allowfullscreen></iframe>');
                            (this as any)._config.onContentLoaded.call(this);
                        }
                        if ((this as any)._$modalArrows) //hide the arrows when remote content
                            (this as any)._$modalArrows.css('display', 'none');
                        (this as any)._resize(width, height);
                        return this;
                    }
                }, {
                    key: '_isExternal',
                    // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'url' implicitly has an 'any' type.
                    value: function _isExternal(url) {
                        var match = url.match(/^([^:\/?#]+:)?(?:\/\/([^\/?#]*))?([^?#]+)?(\?[^#]*)?(#.*)?/);
                        if (typeof match[1] === "string" && match[1].length > 0 && match[1].toLowerCase() !== location.protocol)
                            return true;
                        if (typeof match[2] === "string" && match[2].length > 0 && match[2].replace(new RegExp(':(' + ({
                            "http:": 80,
                            "https:": 443
                        })[location.protocol] + ')?$'), "") !== location.host)
                            return true;
                        return false;
                    }
                }, {
                    key: '_error',
                    // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'message' implicitly has an 'any' type.
                    value: function _error(message) {
                        console.error(message);
                        (this as any)._containerToUse().html(message);
                        (this as any)._resize(300, 300);
                        return this;
                    }
                }, {
                    key: '_preloadImageByIndex',
                    // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'startIndex' implicitly has an 'any' typ... Remove this comment to see the full error message
                    value: function _preloadImageByIndex(startIndex, numberOfTimes) {
                        if (!(this as any)._$galleryItems)
                            return;
                        var next = $((this as any)._$galleryItems.get(startIndex), false);
                        if (typeof next == 'undefined')
                            return;
                        var src = next.attr('data-remote') || next.attr('href');
                        if (next.attr('data-type') === 'image' || (this as any)._isImage(src))
                            (this as any)._preloadImage(src, false);
                        if (numberOfTimes > 0)
                            return (this as any)._preloadImageByIndex(startIndex + 1, numberOfTimes - 1);
                    }
                }, {
                    key: '_preloadImage',
                    // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'src' implicitly has an 'any' type.
                    value: function _preloadImage(src, $containerForImage) {
                        var _this4 = this;
                        $containerForImage = $containerForImage || false;
                        var img = new Image();
                        if ($containerForImage) {
                            (function () {
                                // if loading takes > 200ms show a loader
                                var loadingTimeout = setTimeout(function () {
                                    $containerForImage.append((_this4 as any)._config.loadingMessage);
                                }, 200);
                                img.onload = function () {
                                    if (loadingTimeout)
                                        clearTimeout(loadingTimeout);
                                    // @ts-expect-error ts-migrate(2322) FIXME: Type 'null' is not assignable to type 'number'.
                                    loadingTimeout = null;
                                    var image = $('<img />');
                                    image.attr('src', img.src);
                                    image.addClass('img-fluid');
                                    // backward compatibility for bootstrap v3
                                    image.css('width', '100%');
                                    $containerForImage.html(image);
                                    if ((_this4 as any)._$modalArrows)
                                        (_this4 as any)._$modalArrows.css('display', ''); // remove display to default to css property
                                    (_this4 as any)._resize(img.width, img.height);
                                    (_this4 as any)._toggleLoading(false);
                                    return (_this4 as any)._config.onContentLoaded.call(_this4);
                                };
                                img.onerror = function () {
                                    (_this4 as any)._toggleLoading(false);
                                    return (_this4 as any)._error((_this4 as any)._config.strings.fail + ('  ' + src));
                                };
                            })();
                        }
                        img.src = src;
                        return img;
                    }
                }, {
                    key: '_swipeGesure',
                    value: function _swipeGesure() {
                        if ((this as any)._touchendX < (this as any)._touchstartX) {
                            return (this as any).navigateRight();
                        }
                        if ((this as any)._touchendX > (this as any)._touchstartX) {
                            return (this as any).navigateLeft();
                        }
                    }
                }, {
                    key: '_resize',
                    // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'width' implicitly has an 'any' type.
                    value: function _resize(width, height) {
                        height = height || width;
                        (this as any)._wantedWidth = width;
                        (this as any)._wantedHeight = height;
                        var imageAspecRatio = width / height;
                        // if width > the available space, scale down the expected width and height
                        var widthBorderAndPadding = (this as any)._padding.left + (this as any)._padding.right + (this as any)._border.left + (this as any)._border.right;
                        // force 10px margin if window size > 575px
                        var addMargin = (this as any)._config.doc.body.clientWidth > 575 ? 20 : 0;
                        var discountMargin = (this as any)._config.doc.body.clientWidth > 575 ? 0 : 20;
                        var maxWidth = Math.min(width + widthBorderAndPadding, (this as any)._config.doc.body.clientWidth - addMargin, (this as any)._config.maxWidth);
                        if (width + widthBorderAndPadding > maxWidth) {
                            height = (maxWidth - widthBorderAndPadding - discountMargin) / imageAspecRatio;
                            width = maxWidth;
                        }
                        else
                            width = width + widthBorderAndPadding;
                        var headerHeight = 0, footerHeight = 0;
                        // as the resize is performed the modal is show, the calculate might fail
                        // if so, default to the default sizes
                        if ((this as any)._footerIsShown)
                            footerHeight = (this as any)._$modalFooter.outerHeight(true) || 55;
                        if ((this as any)._titleIsShown)
                            headerHeight = (this as any)._$modalHeader.outerHeight(true) || 67;
                        var borderPadding = (this as any)._padding.top + (this as any)._padding.bottom + (this as any)._border.bottom + (this as any)._border.top;
                        //calculated each time as resizing the window can cause them to change due to Bootstraps fluid margins
                        var margins = parseFloat((this as any)._$modalDialog.css('margin-top')) + parseFloat((this as any)._$modalDialog.css('margin-bottom'));
                        var maxHeight = Math.min(height, $(window).height() - borderPadding - margins - headerHeight - footerHeight, (this as any)._config.maxHeight - borderPadding - headerHeight - footerHeight);
                        if (height > maxHeight) {
                            // if height > the available height, scale down the width
                            width = Math.ceil(maxHeight * imageAspecRatio) + widthBorderAndPadding;
                        }
                        (this as any)._$lightboxContainer.css('height', maxHeight);
                        (this as any)._$modalDialog.css('flex', 1).css('maxWidth', width);
                        var modal = (this as any)._$modal.data('bs.modal');
                        if (modal) {
                            // v4 method is mistakenly protected
                            try {
                                modal._handleUpdate();
                            }
                            catch (Exception) {
                                modal.handleUpdate();
                            }
                        }
                        return this;
                    }
                }], [{
                    key: '_jQueryInterface',
                    // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'config' implicitly has an 'any' type.
                    value: function _jQueryInterface(config) {
                        var _this5 = this;
                        config = config || {};
                        return (this as any).each(function () {
                            var $this = $(_this5);
                            var _config = $.extend({}, (Lightbox as any).Default, $this.data(), typeof config === 'object' && config);
                            // @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 2.
                            new Lightbox(_this5, _config);
                        });
                    }
                }]);
            return Lightbox;
        })();
        $.fn[NAME] = (Lightbox as any)._jQueryInterface;
        $.fn[NAME].Constructor = Lightbox;
        $.fn[NAME].noConflict = function () {
            $.fn[NAME] = JQUERY_NO_CONFLICT;
            return (Lightbox as any)._jQueryInterface;
        };
        return Lightbox;
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jQuery'.
    })(jQuery);
    //# sourceMappingURL=ekko-lightbox.js.map
// @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jQuery'.
}(jQuery);
