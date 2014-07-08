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


## spincontrol.js

Turn a text input into a spin control

Basic usage: call on a text box to add a spin control

```html
<input type='text' id='spin' value='0' />

<script>
    $('#spin').spinControl();    
</script>
```

Advanced usage:

Set minimum, maximum and increment values:

```html
<input type='text' id='spin' value='0' />

<script>
    $('#spin').spinControl({
        min: 0,
        max: 100,
        incrementSize: 10
    });    
</script>
```

Customize encoders and decoders to support different formats

e.g. decimals:

```html
<input type='text' id='spin' value='0' />

<script>
    $('#spin').spinControl({
        'incrementSize': 0.05,
        'min': -2.5,
        'max': 2.5,
        'decoder': function (val) {
            return (isNaN(val) ? 0 : parseFloat(val));
        },
        'encoder': function (val) {
            return (isNaN(val) ? 0 : val.toFixed(2));
        }
    });    
</script>
```

e.g. time (using moment.js):


```html
<input type='text' id='spin' value='0' />

<script>
    $('#spin').spinControl({
        'incrementSize': 30,
        'min': 0,
        'max': 180,
        'decoder': function (val) {
            var m = moment(val, "H:mm");
            return ((m.hour() * 60) + m.minute()); // use moment to convert e.g 1:30 to 90 mins
        },
        'encoder': function (val) {
            return moment(0).minute(val).format("H:mm"); // use moment to convert e.g 90 to 1:30
        }
    });    
</script>
```

Refer to index.html to see these demos in action
##v0.1.0 - 08 July 2014
	 - checkbox-toggle now fires a change event for each checkbox changed
	 - fixed spincontrol styling
	 - added preventDefault() to click events for spinner
	 - bug fix in spinner - was not handling multiple instances well
	 - updated README
	 - updated README
	 - added spin control and demo page
	 - v0.1.2
	 - bootbox.js no longer supports custom button labels so removed them and reverted to default OK and Cancel
	 - v0.1.1
	 - added bootbox dependency
	 - Merge from repo created on github - includes licence file
	 - Delete README.md
	 - Initial commit
	 - added checkbox-toggle and confirm
	 - initial setup

