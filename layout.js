$(function() {
	var footer = $('.site-footer');
	if($('body').height() + 20 > $(window).height()){
		footer.css({'position':'relative'});
	}
	$(window).resize(function() {
		if(footer.css('position')!='fixed' && $('body').height() < $(window).height()){
			footer.css({'position':'fixed','bottom':'0'});
		}
		else if(footer.css('position')=='fixed' && $('body').height() + 20 > $(window).height()){
			footer.css({'position':'relative'});
		}
	});
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
