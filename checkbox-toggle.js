(function( $ ) {
 
    $.fn.checkboxToggleAll = function( action, options ) {

        var settings = $.extend({
            // These are the defaults.
            checkboxSelector: ".js-checkbox",            
        }, options );

        var checkboxes = $(settings.checkboxSelector);
 
        if ( action === "all") {
            return this.each(function() {
                $(this).on('click', function() {
                    return checkboxes.each(function() {
                        $(this)
                                .prop('checked',true)
                                .trigger('change');
                    });
                });
            });
        }
 
        if ( action === "none" ) {
            return this.each(function() {
                $(this).on('click', function() {
                    return checkboxes.each(function() {
                        $(this)
                                .prop('checked',false)
                                .trigger('change');
                    });
                });
            });
        } 
    };
 
}( jQuery ));
