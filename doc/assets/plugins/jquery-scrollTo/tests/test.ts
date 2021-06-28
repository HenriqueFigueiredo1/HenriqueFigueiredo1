// @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
$.fn.test = function(){
	// Hide title on iframes
	if (window.self !== window.top) {
// @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
		$('h1').hide();
	}

	if (location.search === '?notest') {
		return this;
	}

// @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
	$.scrollTo.defaults.axis = 'xy';
	
// @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
	var root = this.is('iframe') ? this.contents() : $('body');
	root.find('#ua').html(
		navigator.userAgent +
		'<br />' +
		'document.compatMode is "' + document.compatMode + '"'
	);

	return this.scrollTo('max', 1000).scrollTo(0, 1000);
};
