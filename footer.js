$(function() {
	var footer = $('.site-footer');
	if($('body').height() + 20 > $(window).height()){
		footer.css({'position':'relative'});
	}
	$(window).resize(footerFixed);
	function footerFixed(){
		if(footer.css('position')!='fixed' && $('body').height() < $(window).height()){
			footer.css({'position':'fixed','bottom':'0'});
		}
		else if(footer.css('position')=='fixed' && $('body').height() + 20 > $(window).height()){
			footer.css({'position':'relative'});
		}
	}
	$(".site-navigation .button").bind("click", function() {
		$(".site-navigation .search-field").css({'display':'inline-block'});
		$(".site-navigation .search-field").focus();

	});
	$(".site-navigation .search-field").bind("focusout", function() {
		setTimeout(function() {
			$(".site-navigation .search-field").css({'display':'none'});
		}, 300);
	});
});
