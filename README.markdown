<h4>jQuery.escapeHtml()</h4>
<h5> [A jQuery plugins to escape Html character] </h5>
*Version 1.0 (Beta)*

<h5>Introduction :</h5>

jQuery.escapeHtml(), is a jQuery plugin to remove html tag from user input and make them XSS safe.
<br />
<h5>Advantage of using jQuery.escapeHtml:</h5>

The jQuery.escapeHtml method is design to filter all html tag from client side, so you have an extra wall to avoid XSS attacks on your site via user input.

<h5>How to Use jQuery.escapeHtml:</h5>

<h6>Example :</h6>

Just add below chunk of jQuery code on your html page.
```javascript
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
```

and use like

<pre>
var safeHtmlString = $('#yourelement').escapeHtml();
</pre>

<h4>Example Page:</h4>

```html
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Example page to use jQuery.escapeHtml()</title>	
	<script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js"></script>
	<script type="text/javascript">
	/* jQuery.escapeHtml code */
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
	/* jQuery.escapeHtml code end */
	/* DOM ready function */
	$(function () {
		$('#run').click(function () {
			var s = $('#xssval').escapeHtml();
			$('#output').html(s);
		});
	});
	/* DOM ready function end */
	</script >
</head>
<body>
	<input type="text" name="xssval" id="xssval" value='' />
	<span id="output"></span>
	<button id="run">Run Code</button>
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
