$(function() {
	var button = $('.site-navigation .button');
	var field = $('.site-navigation .search-field');
	button.click(function() {
		field.css({'display':'inline-block'});
		field.focus();
		button.css({'display':'none'});
	});
	field.focusout(function() {
		setTimeout(function() {
			field.css({'display':'none'});
			button.css({'display':'inline-block'});
		}, 200);
	});
});
