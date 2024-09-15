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
$('.blk-slider .slider').slick({
  centerMode: true,
  centerPadding: '25em',
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  dots: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '22vw',
        slidesToShow: 1
      }
    }
  ]
});

$(document).mousedown(function(e) 
{
    var container = $(".inp-email");

    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
      $(".inp-email").addClass("has-bg")
    }else{
    	 $(".inp-email").removeClass("has-bg")
    }
});
function custom_footer(){
	if(($(".page-main").height()+ $(".page-footer").height() + $(".page-header").height() +200)<$(window).height()){
		$(".page-footer").addClass("sticky")
	}else{
		$(".page-footer").removeClass("sticky")
	}
}
custom_footer();
window.addEventListener('resize', function(event) {
   custom_footer()
}, true);