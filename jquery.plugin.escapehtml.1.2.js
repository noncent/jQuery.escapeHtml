/* Start */
(function($) {
	$.fn.escapeHtml = function() {
		var ua = navigator.userAgent;
		var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
		var e = document.createElement("div"),
		s = '';
		$(e).text($(this).val() || $(this).html() || $(this).text());				
		s = $(e).text();				
		if (re.exec(ua) != null) {
			$(e).remove();
		} else {
			e.remove();
		}alert(s);
		return s.replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>?/gi, '');
	};
})(jQuery);
/* End */
