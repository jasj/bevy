
$(".logo").tapend(function(){
	$("#mainMenu").animate({"margin-right" : "0px"});
	$('#modal').fadeIn();
});

$("#modal").tapend(function(){
	$("#mainMenu").animate({"margin-right" : "-"+(window.innerWidth*0.8)+"px"});
	$('#modal').fadeOut();
});