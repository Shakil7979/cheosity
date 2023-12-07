$(document).ready(function(){ 
	$(document).on('click','.menu_icon',function(){ 
		$('.menu ul').slideToggle();

		return false
	}) 

	// Mobile Menu Icon
	$(document).ready(function(){
		$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
			$(this).toggleClass('open');
		});
	});





});