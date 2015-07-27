
//		** iScroll ** 

var myScroll = new IScroll('#wrapper', {

 probeType: 1, 
		   mouseWheel: false	,
		   

});


menuOpen = function(){
	$("#mainMenu").animate({"right" : "0px"});
	$('#modal').fadeIn();
}


//$(".logo , .logoMenutxt").tapend(menuOpen);

$("#modal").tapend(function(){
	$("#mainMenu").animate({"right" : "-"+(window.innerWidth*0.8)+"px"});
	$('#modal').fadeOut();
});

document.addEventListener('touchmove', function(e){ e.preventDefault(); }, false);

/* 
#42BB6C
#2FA952
 */
