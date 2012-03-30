(function($) {
	$.fn.styleFirstWord = function(attr) {
		if ( typeof attr !== 'object' ) {
			attr = {
				class: attr || 'firstWord'
			};
		}

		return this.each(function() {
			var $this = $(this),
					headingText = $this.text().split(' '),
					span = $('<span>', attr).text(headingText.shift());

			$this.html(
				$('<div>').append(span).html() + ' ' + headingText.join(' ')
			);
		});
	};
})(jQuery);

// Usage
// $('h1').styleFirstWord('flash')
// $('h1').styleFirstWord({
// 	id: 'first-word',
// 	class: 'some-class'
// })