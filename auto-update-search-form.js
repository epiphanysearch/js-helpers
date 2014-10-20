/**
 * autoUpdateSearchForm jQuery plugin
 *
 * This functionality should be used for dynamic search results where we update results
 * as the form is filled out
 *
 * Note - any knp pagination elements within the results will be overriden and 
 * incorporated into the form
 * 
 * To enable this functionality call: 
 * 
 * $('#myAutoUpdatableForm').autoUpdateForm({
 *     "resultsContainer" : "#resultsContainer"
 * });
 *
 * This will enable autoupdating of results in container #myResults
 *
 * TODO - if an entire html page is returned, just grab the results section
 * currently, we're assuming that an AJAX request using the search form should only 
 * return the results html fragment
 * 
 */
$.fn.autoUpdateSearchForm = function(options) {

    if(typeof(options) != 'object')
        throw 'autoUpdateSearchForm: expects options object';

    if(typeof(options.resultsContainer) == 'undefined')
        throw 'autoUpdateSearchForm: options must include "resultsContainer"';

    var $resultsContainer = $(options.resultsContainer);

    var submitForm = function(form, page) {

        $.ajax({
            type: "GET",
            data: form.serialize() + (typeof(page) != 'undefined' ? '&page=' + page : ''),
            success: function(html) { $resultsContainer.html(html); }
        });
    };

    var delayedSubmitTimeout = null;

    var delayedSubmitForm = function(form) {

        // clear prev, if exists, and delay further
        clearTimeout(delayedSubmitTimeout);

        delayedSubmitTimeout = setTimeout(function() { submitForm(form); }, 500);
    };

    // when a field changes in this form, then submit 
    
    // select and checkboxes
    this.find('select, input[type="checkbox"]').on('change', function(e) {

        submitForm($(e.target).closest('form')); 
    });

    // text fields
    this.find('input[type="text"]').on('keyup', function(e) { 
    
        // ignore any text field inside a chosen-container
        if($(e.target).closest('.chosen-container').length > 0)
            return;

        delayedSubmitForm($(e.target).closest('form')); 
    } );

    // ensure knp pagination of our results goes via ajax submit too
    this.each(function(i, form) {

        form = $(form);

        $resultsContainer.on('click', '.pagination a', function(e) {

            var page = $(e.target).attr('href').match(/page=([0-9]+)/);

            submitForm(form, page[1]); 

            e.preventDefault();
        });
    });
}
