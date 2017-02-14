$(document).ready(function(){
	//smooth scroll
	$('nav ul li a').on('click', function() {
	    $('html, body').animate({
	    	scrollTop: $(this.hash).offset().top
	    }, 1000);
	});
	//nav change on scroll
	$(window).scroll(function(){
		if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        	document.getElementsByTagName("nav")[0].className = "navbar navbar-default navbar-fixed-top navbar-scroll";
    	}
    	else {
    		document.getElementsByTagName("nav")[0].className = "navbar navbar-default navbar-fixed-top";
    	}
	});
	//owl carousel
	$(".owl-carousel").owlCarousel({
		loop: false,
		rewind: true,
		autoplay: true,
		smartSpeed: 500,
  		margin: 20,
  		responsive:{
	        0:{
	            items:1
	        },
	        735:{
	            items:2
	        },
	        1000:{
	            items:3
	        }
	    }
	});
})