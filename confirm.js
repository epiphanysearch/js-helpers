(function( $ ) {
 
    $.fn.confirm = function( action, options ) {

        var settings = $.extend({
            // These are the defaults.
            message: "Are you sure?",            
        }, options );

        return this.each(function() {
            
            

            $(this).on('click', function(e) {
                target = $(e.target).closest('a');

                message = $(target).data('confirm-message');
                if(typeof(message)==='undefined')
                    message = settings.message;

                bootbox.confirm(message, function(result) {
                    if(result === true) {
                        // go to the original link
                        window.location = target.attr('href');
                    }
                });          
                return false;
            });
        });        
    };
 
}( jQuery ));
