$(document).ready(function(){
	$('.Accordeon__title').click(function(event){
     	$(this).toggleClass('active').next().slideToggle(300);
	});
});