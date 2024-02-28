$( document ).ready(function() {
    $(".hambarger i").click(function(){
		$(".nav-area").slideToggle();
	});
	
	$(".mobile-nav-style ul li a i").click(function(){
		$(this).parent().siblings('ul').slideToggle();
		$(this).toggleClass('active');
	});
	
	$(".mobile-nav-style ul ul li ul a i").click(function(){
		$(this).parent().siblings('ul').slideToggle();
		$(this).toggleClass('active');
	});

});