<h4>jQuery.escapeHtml()</h4>
<h5> [A jQuery plugins to escape Html characters] </h5>
*Version 1.2 (Beta)*

<h5>Introduction :</h5>

jQuery.escapeHtml(), is a jQuery plugin to remove html tag from user input and make them XSS safe.
<br />
<h5>Advantage of using jQuery.escapeHtml:</h5>

The jQuery.escapeHtml method is design to filter all html tag from client side, so you have an extra wall to avoid XSS attacks on your site via user input.

<h5>How to Use jQuery.escapeHtml:</h5>

<h6>Example :</h6>

Just add below chunk of jQuery code on your html page.
```javascript
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
		}
		return s.replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>?/gi, '');
	};
})(jQuery);
/* End */
```

and use like

```javascript
// if you want to real input value then, go with jQuery '.val()' option
var htmlString = $('#yourelement').val();
```

```javascript
// if you want to remove html character then, go with jQuery '.escapeHtml()' option
var safeHtmlString = $('#yourelement').escapeHtml();
```

<h4>Example Page:</h4>

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>jQuery escapeHtml Plugin testing Page</title>
<script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js"></script>
<script type="text/javascript">
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

	/**
	 * using escapeHtml to clean xss data
	 * @return {[type]} [description]
	 */
	$(function () {
		$('#run-xssSafe').click(function () {
			var s = $('#xssSafe').escapeHtml();				 
			$('#output-xssSafe').html(s);
		});
	});

	/**
	 * without escapeHtml getting xss data
	 * @return {[type]} [description]
	 */
	$(function () {
		$('#run-noXssSafe').click(function () {
			var s = $('#noXssSafe').val();				 
			$('#output-noXssSafe').html(s);
		});
	});

</script>
</head>
<body>
<input type="text" name="xssSafe" id="xssSafe" value='<script>document.body.style.backgroundColor="red"; </script>' />		
<span id="output-xssSafe"></span>
<button id="run-xssSafe">Kill the XSS Data :)</button>

<br><br><br>

<input type="text" name="noXssSafe" id="noXssSafe" value='<script>document.body.style.backgroundColor="red"; </script>' />
<span id="output-noXssSafe"></span>
<button id="run-noXssSafe">XSS Killed me :(</button>


</body>
</html>
```

<h6>Read more about XSS:</h6>
<pre>
https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
</pre>

Cheers!!
Neeraj Singh | neeraj[dot]singh[at]lbi[dot]co[dot]in
<h6>[Document End]</h6>
