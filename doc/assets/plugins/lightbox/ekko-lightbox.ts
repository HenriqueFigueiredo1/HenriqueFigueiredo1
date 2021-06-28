const Lightbox = (($) => {
    const NAME = 'ekkoLightbox';
    const JQUERY_NO_CONFLICT = $.fn[NAME];
    const Default = {
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
            type: 'Could not detect remote target type. Force the type using data-type',
        },
        doc: document,
        onShow() { },
        onShown() { },
        onHide() { },
        onHidden() { },
        onNavigate() { },
        onContentLoaded() { }
    };
    class Lightbox {
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
        static get Default() {
            return Default;
        }
        // @ts-expect-error ts-migrate(7006) FIXME: Parameter '$element' implicitly has an 'any' type.
        constructor($element, config) {
            (this as any)._config = $.extend({}, Default, config);
            (this as any)._$modalArrows = null;
            (this as any)._galleryIndex = 0;
            (this as any)._galleryName = null;
            (this as any)._padding = null;
            (this as any)._border = null;
            (this as any)._titleIsShown = false;
            (this as any)._footerIsShown = false;
            (this as any)._wantedWidth = 0;
            (this as any)._wantedHeight = 0;
            (this as any)._touchstartX = 0;
            (this as any)._touchendX = 0;
            (this as any)._modalId = `ekkoLightbox-${Math.floor((Math.random() * 1000) + 1)}`;
            // @ts-expect-error ts-migrate(2551) FIXME: Property '_$element' does not exist on type 'Light... Remove this comment to see the full error message
            this._$element = $element instanceof jQuery ? $element : $($element);
            (this as any)._isBootstrap3 = $.fn.modal.Constructor.VERSION[0] == 3;
            let h4 = `<h4 class="modal-title">${(this as any)._config.title || "&nbsp;"}</h4>`;
            let btn = `<button type="button" class="close" data-dismiss="modal" aria-label="${(this as any)._config.strings.close}"><span aria-hidden="true">&times;</span></button>`;
            let header = `<div class="modal-header${(this as any)._config.title || (this as any)._config.alwaysShowClose ? '' : ' hide'}">` + ((this as any)._isBootstrap3 ? btn + h4 : h4 + btn) + `</div>`;
            let footer = `<div class="modal-footer${(this as any)._config.footer ? '' : ' hide'}">${(this as any)._config.footer || "&nbsp;"}</div>`;
            let body = '<div class="modal-body"><div class="ekko-lightbox-container"><div class="ekko-lightbox-item fade in show"></div><div class="ekko-lightbox-item fade"></div></div></div>';
            let dialog = `<div class="modal-dialog" role="document"><div class="modal-content">${header}${body}${footer}</div></div>`;
            $((this as any)._config.doc.body).append(`<div id="${(this as any)._modalId}" class="ekko-lightbox modal fade" tabindex="-1" tabindex="-1" role="dialog" aria-hidden="true">${dialog}</div>`);
            // @ts-expect-error ts-migrate(2551) FIXME: Property '_$modal' does not exist on type 'Lightbo... Remove this comment to see the full error message
            this._$modal = $(`#${(this as any)._modalId}`, (this as any)._config.doc);
            // @ts-expect-error ts-migrate(2551) FIXME: Property '_$modal' does not exist on type 'Lightbo... Remove this comment to see the full error message
            (this as any)._$modalDialog = this._$modal.find('.modal-dialog').first();
            // @ts-expect-error ts-migrate(2551) FIXME: Property '_$modal' does not exist on type 'Lightbo... Remove this comment to see the full error message
            (this as any)._$modalContent = this._$modal.find('.modal-content').first();
            // @ts-expect-error ts-migrate(2551) FIXME: Property '_$modal' does not exist on type 'Lightbo... Remove this comment to see the full error message
            (this as any)._$modalBody = this._$modal.find('.modal-body').first();
            // @ts-expect-error ts-migrate(2551) FIXME: Property '_$modal' does not exist on type 'Lightbo... Remove this comment to see the full error message
            (this as any)._$modalHeader = this._$modal.find('.modal-header').first();
            // @ts-expect-error ts-migrate(2551) FIXME: Property '_$modal' does not exist on type 'Lightbo... Remove this comment to see the full error message
            (this as any)._$modalFooter = this._$modal.find('.modal-footer').first();
            (this as any)._$lightboxContainer = (this as any)._$modalBody.find('.ekko-lightbox-container').first();
            (this as any)._$lightboxBodyOne = (this as any)._$lightboxContainer.find('> div:first-child').first();
            (this as any)._$lightboxBodyTwo = (this as any)._$lightboxContainer.find('> div:last-child').first();
            (this as any)._border = this._calculateBorders();
            (this as any)._padding = this._calculatePadding();
            // @ts-expect-error ts-migrate(2551) FIXME: Property '_$element' does not exist on type 'Light... Remove this comment to see the full error message
            (this as any)._galleryName = this._$element.data('gallery');
            if ((this as any)._galleryName) {
                (this as any)._$galleryItems = $(document.body).find(`*[data-gallery="${(this as any)._galleryName}"]`);
                // @ts-expect-error ts-migrate(2551) FIXME: Property '_$element' does not exist on type 'Light... Remove this comment to see the full error message
                (this as any)._galleryIndex = (this as any)._$galleryItems.index(this._$element);
                $(document).on('keydown.ekkoLightbox', this._navigationalBinder.bind(this));
                // add the directional arrows to the modal
                if ((this as any)._config.showArrows && (this as any)._$galleryItems.length > 1) {
                    (this as any)._$lightboxContainer.append(`<div class="ekko-lightbox-nav-overlay"><a href="#">${(this as any)._config.leftArrow}</a><a href="#">${(this as any)._config.rightArrow}</a></div>`);
                    (this as any)._$modalArrows = (this as any)._$lightboxContainer.find('div.ekko-lightbox-nav-overlay').first();
                    // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'event' implicitly has an 'any' type.
                    (this as any)._$lightboxContainer.on('click', 'a:first-child', event => {
                        event.preventDefault();
                        return this.navigateLeft();
                    });
                    // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'event' implicitly has an 'any' type.
                    (this as any)._$lightboxContainer.on('click', 'a:last-child', event => {
                        event.preventDefault();
                        return this.navigateRight();
                    });
                    this.updateNavigation();
                }
            }
            // @ts-expect-error ts-migrate(2551) FIXME: Property '_$modal' does not exist on type 'Lightbo... Remove this comment to see the full error message
            this._$modal
                .on('show.bs.modal', (this as any)._config.onShow.bind(this))
                .on('shown.bs.modal', () => {
                this._toggleLoading(true);
                this._handle();
                return (this as any)._config.onShown.call(this);
            })
                .on('hide.bs.modal', (this as any)._config.onHide.bind(this))
                .on('hidden.bs.modal', () => {
                if ((this as any)._galleryName) {
                    $(document).off('keydown.ekkoLightbox');
                    $(window).off('resize.ekkoLightbox');
                }
                // @ts-expect-error ts-migrate(2551) FIXME: Property '_$modal' does not exist on type 'Lightbo... Remove this comment to see the full error message
                this._$modal.remove();
                return (this as any)._config.onHidden.call(this);
            })
                .modal((this as any)._config);
            $(window).on('resize.ekkoLightbox', () => {
                this._resize((this as any)._wantedWidth, (this as any)._wantedHeight);
            });
            (this as any)._$lightboxContainer
                .on('touchstart', () => {
                (this as any)._touchstartX = (event as any).changedTouches[0].screenX;
            })
                .on('touchend', () => {
                (this as any)._touchendX = (event as any).changedTouches[0].screenX;
                this._swipeGesure();
            });
        }
        element() {
            // @ts-expect-error ts-migrate(2551) FIXME: Property '_$element' does not exist on type 'Light... Remove this comment to see the full error message
            return this._$element;
        }
        modal() {
            // @ts-expect-error ts-migrate(2551) FIXME: Property '_$modal' does not exist on type 'Lightbo... Remove this comment to see the full error message
            return this._$modal;
        }
        // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'index' implicitly has an 'any' type.
        navigateTo(index) {
            if (index < 0 || index > (this as any)._$galleryItems.length - 1)
                return this;
            (this as any)._galleryIndex = index;
            this.updateNavigation();
            // @ts-expect-error ts-migrate(2551) FIXME: Property '_$element' does not exist on type 'Light... Remove this comment to see the full error message
            this._$element = $((this as any)._$galleryItems.get((this as any)._galleryIndex));
            this._handle();
        }
        navigateLeft() {
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
            return this.navigateTo((this as any)._galleryIndex);
        }
        navigateRight() {
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
            return this.navigateTo((this as any)._galleryIndex);
        }
        updateNavigation() {
            if (!(this as any)._config.wrapping) {
                let $nav = (this as any)._$lightboxContainer.find('div.ekko-lightbox-nav-overlay');
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
        close() {
            // @ts-expect-error ts-migrate(2551) FIXME: Property '_$modal' does not exist on type 'Lightbo... Remove this comment to see the full error message
            return this._$modal.modal('hide');
        }
        // helper private methods
        // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'event' implicitly has an 'any' type.
        _navigationalBinder(event) {
            event = event || window.event;
            if (event.keyCode === 39)
                return this.navigateRight();
            if (event.keyCode === 37)
                return this.navigateLeft();
        }
        // type detection private methods
        // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'src' implicitly has an 'any' type.
        _detectRemoteType(src, type) {
            type = type || false;
            if (!type && this._isImage(src))
                type = 'image';
            if (!type && this._getYoutubeId(src))
                type = 'youtube';
            if (!type && this._getVimeoId(src))
                type = 'vimeo';
            if (!type && this._getInstagramId(src))
                type = 'instagram';
            if (!type || ['image', 'youtube', 'vimeo', 'instagram', 'video', 'url'].indexOf(type) < 0)
                type = 'url';
            return type;
        }
        // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'string' implicitly has an 'any' type.
        _isImage(string) {
            return string && string.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i);
        }
        _containerToUse() {
            // if currently showing an image, fade it out and remove
            let $toUse = (this as any)._$lightboxBodyTwo;
            let $current = (this as any)._$lightboxBodyOne;
            if ((this as any)._$lightboxBodyTwo.hasClass('in')) {
                $toUse = (this as any)._$lightboxBodyOne;
                $current = (this as any)._$lightboxBodyTwo;
            }
            $current.removeClass('in show');
            setTimeout(() => {
                if (!(this as any)._$lightboxBodyTwo.hasClass('in'))
                    (this as any)._$lightboxBodyTwo.empty();
                if (!(this as any)._$lightboxBodyOne.hasClass('in'))
                    (this as any)._$lightboxBodyOne.empty();
            }, 500);
            $toUse.addClass('in show');
            return $toUse;
        }
        _handle() {
            let $toUse = this._containerToUse();
            this._updateTitleAndFooter();
            // @ts-expect-error ts-migrate(2551) FIXME: Property '_$element' does not exist on type 'Light... Remove this comment to see the full error message
            let currentRemote = this._$element.attr('data-remote') || this._$element.attr('href');
            // @ts-expect-error ts-migrate(2551) FIXME: Property '_$element' does not exist on type 'Light... Remove this comment to see the full error message
            let currentType = this._detectRemoteType(currentRemote, this._$element.attr('data-type') || false);
            if (['image', 'youtube', 'vimeo', 'instagram', 'video', 'url'].indexOf(currentType) < 0)
                return this._error((this as any)._config.strings.type);
            switch (currentType) {
                case 'image':
                    this._preloadImage(currentRemote, $toUse);
                    this._preloadImageByIndex((this as any)._galleryIndex, 3);
                    break;
                case 'youtube':
                    this._showYoutubeVideo(currentRemote, $toUse);
                    break;
                case 'vimeo':
                    this._showVimeoVideo(this._getVimeoId(currentRemote), $toUse);
                    break;
                case 'instagram':
                    this._showInstagramVideo(this._getInstagramId(currentRemote), $toUse);
                    break;
                case 'video':
                    this._showHtml5Video(currentRemote, $toUse);
                    break;
                default: // url
                    this._loadRemoteContent(currentRemote, $toUse);
                    break;
            }
            return this;
        }
        // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'string' implicitly has an 'any' type.
        _getYoutubeId(string) {
            if (!string)
                return false;
            let matches = string.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/);
            return (matches && matches[2].length === 11) ? matches[2] : false;
        }
        // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'string' implicitly has an 'any' type.
        _getVimeoId(string) {
            return string && string.indexOf('vimeo') > 0 ? string : false;
        }
        // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'string' implicitly has an 'any' type.
        _getInstagramId(string) {
            return string && string.indexOf('instagram') > 0 ? string : false;
        }
        // layout private methods
        // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'show' implicitly has an 'any' type.
        _toggleLoading(show) {
            show = show || false;
            if (show) {
                (this as any)._$modalDialog.css('display', 'none');
                // @ts-expect-error ts-migrate(2551) FIXME: Property '_$modal' does not exist on type 'Lightbo... Remove this comment to see the full error message
                this._$modal.removeClass('in show');
                $('.modal-backdrop').append((this as any)._config.loadingMessage);
            }
            else {
                (this as any)._$modalDialog.css('display', 'block');
                // @ts-expect-error ts-migrate(2551) FIXME: Property '_$modal' does not exist on type 'Lightbo... Remove this comment to see the full error message
                this._$modal.addClass('in show');
                $('.modal-backdrop').find('.ekko-lightbox-loader').remove();
            }
            return this;
        }
        _calculateBorders() {
            return {
                top: this._totalCssByAttribute('border-top-width'),
                right: this._totalCssByAttribute('border-right-width'),
                bottom: this._totalCssByAttribute('border-bottom-width'),
                left: this._totalCssByAttribute('border-left-width'),
            };
        }
        _calculatePadding() {
            return {
                top: this._totalCssByAttribute('padding-top'),
                right: this._totalCssByAttribute('padding-right'),
                bottom: this._totalCssByAttribute('padding-bottom'),
                left: this._totalCssByAttribute('padding-left'),
            };
        }
        // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'attribute' implicitly has an 'any' type... Remove this comment to see the full error message
        _totalCssByAttribute(attribute) {
            return parseInt((this as any)._$modalDialog.css(attribute), 10) +
                parseInt((this as any)._$modalContent.css(attribute), 10) +
                parseInt((this as any)._$modalBody.css(attribute), 10);
        }
        _updateTitleAndFooter() {
            // @ts-expect-error ts-migrate(2551) FIXME: Property '_$element' does not exist on type 'Light... Remove this comment to see the full error message
            let title = this._$element.data('title') || "";
            // @ts-expect-error ts-migrate(2551) FIXME: Property '_$element' does not exist on type 'Light... Remove this comment to see the full error message
            let caption = this._$element.data('footer') || "";
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
        // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'remote' implicitly has an 'any' type.
        _showYoutubeVideo(remote, $containerForElement) {
            let id = this._getYoutubeId(remote);
            let query = remote.indexOf('&') > 0 ? remote.substr(remote.indexOf('&')) : '';
            // @ts-expect-error ts-migrate(2551) FIXME: Property '_$element' does not exist on type 'Light... Remove this comment to see the full error message
            let width = this._$element.data('width') || 560;
            // @ts-expect-error ts-migrate(2551) FIXME: Property '_$element' does not exist on type 'Light... Remove this comment to see the full error message
            let height = this._$element.data('height') || width / (560 / 315);
            return this._showVideoIframe(`//www.youtube.com/embed/${id}?badge=0&autoplay=1&html5=1${query}`, width, height, $containerForElement);
        }
        // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'id' implicitly has an 'any' type.
        _showVimeoVideo(id, $containerForElement) {
            // @ts-expect-error ts-migrate(2551) FIXME: Property '_$element' does not exist on type 'Light... Remove this comment to see the full error message
            let width = this._$element.data('width') || 500;
            // @ts-expect-error ts-migrate(2551) FIXME: Property '_$element' does not exist on type 'Light... Remove this comment to see the full error message
            let height = this._$element.data('height') || width / (560 / 315);
            return this._showVideoIframe(id + '?autoplay=1', width, height, $containerForElement);
        }
        // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'id' implicitly has an 'any' type.
        _showInstagramVideo(id, $containerForElement) {
            // instagram load their content into iframe's so this can be put straight into the element
            // @ts-expect-error ts-migrate(2551) FIXME: Property '_$element' does not exist on type 'Light... Remove this comment to see the full error message
            let width = this._$element.data('width') || 612;
            let height = width + 80;
            id = id.substr(-1) !== '/' ? id + '/' : id; // ensure id has trailing slash
            $containerForElement.html(`<iframe width="${width}" height="${height}" src="${id}embed/" frameborder="0" allowfullscreen></iframe>`);
            this._resize(width, height);
            (this as any)._config.onContentLoaded.call(this);
            if ((this as any)._$modalArrows) //hide the arrows when showing video
                (this as any)._$modalArrows.css('display', 'none');
            this._toggleLoading(false);
            return this;
        }
        // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'url' implicitly has an 'any' type.
        _showVideoIframe(url, width, height, $containerForElement) {
            height = height || width; // default to square
            $containerForElement.html(`<div class="embed-responsive embed-responsive-16by9"><iframe width="${width}" height="${height}" src="${url}" frameborder="0" allowfullscreen class="embed-responsive-item"></iframe></div>`);
            this._resize(width, height);
            (this as any)._config.onContentLoaded.call(this);
            if ((this as any)._$modalArrows)
                (this as any)._$modalArrows.css('display', 'none'); //hide the arrows when showing video
            this._toggleLoading(false);
            return this;
        }
        // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'url' implicitly has an 'any' type.
        _showHtml5Video(url, $containerForElement) {
            // @ts-expect-error ts-migrate(2551) FIXME: Property '_$element' does not exist on type 'Light... Remove this comment to see the full error message
            let width = this._$element.data('width') || 560;
            // @ts-expect-error ts-migrate(2551) FIXME: Property '_$element' does not exist on type 'Light... Remove this comment to see the full error message
            let height = this._$element.data('height') || width / (560 / 315);
            $containerForElement.html(`<div class="embed-responsive embed-responsive-16by9"><video width="${width}" height="${height}" src="${url}" preload="auto" autoplay controls class="embed-responsive-item"></video></div>`);
            this._resize(width, height);
            (this as any)._config.onContentLoaded.call(this);
            if ((this as any)._$modalArrows)
                (this as any)._$modalArrows.css('display', 'none'); //hide the arrows when showing video
            this._toggleLoading(false);
            return this;
        }
        // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'url' implicitly has an 'any' type.
        _loadRemoteContent(url, $containerForElement) {
            // @ts-expect-error ts-migrate(2551) FIXME: Property '_$element' does not exist on type 'Light... Remove this comment to see the full error message
            let width = this._$element.data('width') || 560;
            // @ts-expect-error ts-migrate(2551) FIXME: Property '_$element' does not exist on type 'Light... Remove this comment to see the full error message
            let height = this._$element.data('height') || 560;
            // @ts-expect-error ts-migrate(2551) FIXME: Property '_$element' does not exist on type 'Light... Remove this comment to see the full error message
            let disableExternalCheck = this._$element.data('disableExternalCheck') || false;
            this._toggleLoading(false);
            // external urls are loading into an iframe
            // local ajax can be loaded into the container itself
            if (!disableExternalCheck && !this._isExternal(url)) {
                $containerForElement.load(url, $.proxy(() => {
                    // @ts-expect-error ts-migrate(2551) FIXME: Property '_$element' does not exist on type 'Light... Remove this comment to see the full error message
                    return this._$element.trigger('loaded.bs.modal');
                    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'l'.
                    l;
                }));
            }
            else {
                $containerForElement.html(`<iframe src="${url}" frameborder="0" allowfullscreen></iframe>`);
                (this as any)._config.onContentLoaded.call(this);
            }
            if ((this as any)._$modalArrows) //hide the arrows when remote content
                (this as any)._$modalArrows.css('display', 'none');
            this._resize(width, height);
            return this;
        }
        // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'url' implicitly has an 'any' type.
        _isExternal(url) {
            let match = url.match(/^([^:\/?#]+:)?(?:\/\/([^\/?#]*))?([^?#]+)?(\?[^#]*)?(#.*)?/);
            if (typeof match[1] === "string" && match[1].length > 0 && match[1].toLowerCase() !== location.protocol)
                return true;
            if (typeof match[2] === "string" && match[2].length > 0 && match[2].replace(new RegExp(`:(${{
                "http:": 80,
                "https:": 443
            }[location.protocol]})?$`), "") !== location.host)
                return true;
            return false;
        }
        // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'message' implicitly has an 'any' type.
        _error(message) {
            console.error(message);
            this._containerToUse().html(message);
            this._resize(300, 300);
            return this;
        }
        // @ts-expect-error ts-migrate(7023) FIXME: '_preloadImageByIndex' implicitly has return type ... Remove this comment to see the full error message
        _preloadImageByIndex(startIndex, numberOfTimes) {
            if (!(this as any)._$galleryItems)
                return;
            let next = $((this as any)._$galleryItems.get(startIndex), false);
            if (typeof next == 'undefined')
                return;
            let src = next.attr('data-remote') || next.attr('href');
            if (next.attr('data-type') === 'image' || this._isImage(src))
                this._preloadImage(src, false);
            if (numberOfTimes > 0)
                return this._preloadImageByIndex(startIndex + 1, numberOfTimes - 1);
        }
        // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'src' implicitly has an 'any' type.
        _preloadImage(src, $containerForImage) {
            $containerForImage = $containerForImage || false;
            let img = new Image();
            if ($containerForImage) {
                // if loading takes > 200ms show a loader
                let loadingTimeout = setTimeout(() => {
                    $containerForImage.append((this as any)._config.loadingMessage);
                }, 200);
                img.onload = () => {
                    if (loadingTimeout)
                        clearTimeout(loadingTimeout);
                    // @ts-expect-error ts-migrate(2322) FIXME: Type 'null' is not assignable to type 'number'.
                    loadingTimeout = null;
                    let image = $('<img />');
                    image.attr('src', img.src);
                    image.addClass('img-fluid');
                    // backward compatibility for bootstrap v3
                    image.css('width', '100%');
                    $containerForImage.html(image);
                    if ((this as any)._$modalArrows)
                        (this as any)._$modalArrows.css('display', ''); // remove display to default to css property
                    this._resize(img.width, img.height);
                    this._toggleLoading(false);
                    return (this as any)._config.onContentLoaded.call(this);
                };
                img.onerror = () => {
                    this._toggleLoading(false);
                    return this._error((this as any)._config.strings.fail + `  ${src}`);
                };
            }
            img.src = src;
            return img;
        }
        _swipeGesure() {
            if ((this as any)._touchendX < (this as any)._touchstartX) {
                return this.navigateRight();
            }
            if ((this as any)._touchendX > (this as any)._touchstartX) {
                return this.navigateLeft();
            }
        }
        // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'width' implicitly has an 'any' type.
        _resize(width, height) {
            height = height || width;
            (this as any)._wantedWidth = width;
            (this as any)._wantedHeight = height;
            let imageAspecRatio = width / height;
            // if width > the available space, scale down the expected width and height
            let widthBorderAndPadding = (this as any)._padding.left + (this as any)._padding.right + (this as any)._border.left + (this as any)._border.right;
            // force 10px margin if window size > 575px
            let addMargin = (this as any)._config.doc.body.clientWidth > 575 ? 20 : 0;
            let discountMargin = (this as any)._config.doc.body.clientWidth > 575 ? 0 : 20;
            let maxWidth = Math.min(width + widthBorderAndPadding, (this as any)._config.doc.body.clientWidth - addMargin, (this as any)._config.maxWidth);
            if ((width + widthBorderAndPadding) > maxWidth) {
                height = (maxWidth - widthBorderAndPadding - discountMargin) / imageAspecRatio;
                width = maxWidth;
            }
            else
                width = (width + widthBorderAndPadding);
            let headerHeight = 0, footerHeight = 0;
            // as the resize is performed the modal is show, the calculate might fail
            // if so, default to the default sizes
            if ((this as any)._footerIsShown)
                footerHeight = (this as any)._$modalFooter.outerHeight(true) || 55;
            if ((this as any)._titleIsShown)
                headerHeight = (this as any)._$modalHeader.outerHeight(true) || 67;
            let borderPadding = (this as any)._padding.top + (this as any)._padding.bottom + (this as any)._border.bottom + (this as any)._border.top;
            //calculated each time as resizing the window can cause them to change due to Bootstraps fluid margins
            let margins = parseFloat((this as any)._$modalDialog.css('margin-top')) + parseFloat((this as any)._$modalDialog.css('margin-bottom'));
            let maxHeight = Math.min(height, $(window).height() - borderPadding - margins - headerHeight - footerHeight, (this as any)._config.maxHeight - borderPadding - headerHeight - footerHeight);
            if (height > maxHeight) {
                // if height > the available height, scale down the width
                width = Math.ceil(maxHeight * imageAspecRatio) + widthBorderAndPadding;
            }
            (this as any)._$lightboxContainer.css('height', maxHeight);
            (this as any)._$modalDialog.css('flex', 1).css('maxWidth', width);
            // @ts-expect-error ts-migrate(2551) FIXME: Property '_$modal' does not exist on type 'Lightbo... Remove this comment to see the full error message
            let modal = this._$modal.data('bs.modal');
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
        // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'config' implicitly has an 'any' type.
        static _jQueryInterface(config) {
            config = config || {};
            return (this as any).each(() => {
                let $this = $(this);
                let _config = $.extend({}, Lightbox.Default, $this.data(), typeof config === 'object' && config);
                new Lightbox(this, _config);
            });
        }
    }
    $.fn[NAME] = Lightbox._jQueryInterface;
    $.fn[NAME].Constructor = Lightbox;
    $.fn[NAME].noConflict = () => {
        $.fn[NAME] = JQUERY_NO_CONFLICT;
        return Lightbox._jQueryInterface;
    };
    return Lightbox;
// @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jQuery'.
})(jQuery);
export default Lightbox;
