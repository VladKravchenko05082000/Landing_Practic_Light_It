$(document).ready(function(){
	$(".speak_content__heading").mousemove(function(){
		$(".speak_content__header").show();
	}).mouseout(function(){
		$(".speak_content__header").hide();
	});
});