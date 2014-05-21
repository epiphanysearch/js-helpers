(function ($) {

    $.fn.spinControl = function (options) {

        var settings = $.extend({
            // These are the defaults.   
            incrementSize: 1
        }, options);
        
        var spinner = function () {
            var obj = this;
            this.init = function (e) {
                obj.ctrl = $(e);

                obj.ctrl.wrap('<div class="spinbutton"></div>');

                var plus = $('<a href="#"><i class="icon icon-plus"></i></a>')
                    .on('click', function (e) {
                        e.preventDefault();
                        return obj.modify(settings.incrementSize);
                    })
                    .appendTo($(e).parent());

                var minus = $('<a href="#"><i class="icon icon-minus"></i></a>')
                    .on('click', function (e) {
                        e.preventDefault();
                        return obj.modify(-1 * settings.incrementSize);
                    })
                    .appendTo($(e).parent());

                return this;
            };

            // default decoder - handles ints
            this.decoder = function (val) {
                return (isNaN(val) ? 0 : parseInt(val));
            };

            this.encoder = function (val) {
                return val;
            };

            this.modify = function (amt) {
                var val = obj.decoder(obj.ctrl.val());
                val += amt;
                if (((typeof (settings.max) !== 'undefined') && val > settings.max) || ((typeof (settings.min) !== 'undefined') && val < settings.min)) return; // out of range - don't set the value

                obj.ctrl.val(obj.encoder(val));
            };

        };


        return this.each(function () {
            var spin = new spinner();
            spin.init(this);
            if (typeof (settings.decoder) !== "undefined") spin.decoder = settings.decoder;
            if (typeof (settings.encoder) !== "undefined") spin.encoder = settings.encoder;
        });

    };

}(jQuery));
