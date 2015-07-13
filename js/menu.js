
$(".logo").tapend(function(){
	$("#mainMenu").animate({"right" : "0px"});
	$('#modal').fadeIn();
});

$("#modal").tapend(function(){
	$("#mainMenu").animate({"right" : "-"+(window.innerWidth*0.8)+"px"});
	$('#modal').fadeOut();
});
