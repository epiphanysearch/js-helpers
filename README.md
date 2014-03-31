# Epiphany JS Helpers

> A set of JS helpers which can be useful for building a UI

## confirm.js

Add a confirmation message to a link. Requires bootbox.js

Basic usage - call confirm on elements:

```javascript
$('.js-confirm').confirm();
```

Specify confirmation message with a data attribute:

```html
<a href='#' class='js-confirm' data-confirm-message='Are you sure you want to do that?'>...</a>
```


## checkbox-toggle.js

Toggle all/none on a set of checkboxes

Usage: call on a link with "all" to make the link check all checkboxes or "none" to uncheck. Mark checkable checkboxes with js-checkbox class:

```html
<a href='#' id='select-all'>All</a>
<a href='#' id='select-none'>None</a>

<input type='checkbox' class='js-checkbox' />
<input type='checkbox' class='js-checkbox' />
<input type='checkbox' class='js-checkbox' />
<input type='checkbox' class='js-checkbox' />

<script>
	$('#select-all').checkboxToggleAll('all');
	$('#select-none').checkboxToggleAll('none');
</script>
```



