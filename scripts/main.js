'use strict';

/* HELPER: Checks Whether an Element Exists
----------------------------------------------------------------------------------------------------*/
(function( $ ) {

  $.fn.extend({
    exists: function() {
      if ( this.length > 0 ) {
        return true;
      } else {
        return false;
      }
    }
  });

})( jQuery );



jQuery(document).on("ready",function () {
	
});

// $("#md-popup").fancybox().trigger('click');

new WOW().init();

$('html, body').animate({
   scrollTop: $('.md-scroll').offset().top
}, 'fast');