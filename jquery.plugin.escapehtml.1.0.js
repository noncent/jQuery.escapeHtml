/* Start */
(function ($) {
	$.fn.escapeHtml = function () {
		var e = document.createElement("DIV"),
		s = '';
		e.innerHTML = $(this).val();
		s = e.textContent || e.innerText || "";
		e.remove();
		return s.replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>?/gi, '');
	}
})(jQuery);
/* End */
