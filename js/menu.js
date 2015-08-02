$(document).ready(function() {
	onDeviceReady();
    // are we running in native app or in a browser?
    /* window.isphone = false;
    if(document.URL.indexOf("http://") === -1 
        && document.URL.indexOf("https://") === -1) {
        window.isphone = true;
    } */

/*     if( window.isphone ) {
        document.addEventListener("deviceready", onDeviceReady, false);
    } else {
        onDeviceReady();
    } */
});

function onDeviceReady(){
	console.log("ready!");
		$("#navRewards").hide();
		$("#navSettings").hide();
}

//		** iScroll ** 
	

var myScroll = new IScroll('#wrapper', {
probeType: 1, 
		   mouseWheel: false	,
});

menuOpen = function(){

	
	$("#mainMenu").animate({"right" : "0px"});
	$('#modal').fadeIn();
	
}


$(".logo , .logoMenutxt").tapend(menuOpen);

$("#rewardsOption").tap(function(){
	
		$("#settingsOption").removeClass('active');
	$("#rewardsOption").addClass('active');
	$("#searchOption").removeClass('active');
		$("#navSearch").hide();
		$("#navRewards").show();
			$("#navSettings").hide();
	});

	$("#searchOption").tap(function(){
	$("#settingsOption").removeClass('active');
	$("#rewardsOption").removeClass('active');
	$("#searchOption").addClass('active');
		$("#navSearch").show();
		$("#navRewards").hide();
		$("#navSettings").hide();
		
	});
	
$("#settingsOption").tap(function(){
	$("#settingsOption").addClass('active');
	$("#rewardsOption").removeClass('active');
	$("#searchOption").removeClass('active');
		$("#navSettings").show();
		$("#navRewards").hide();
		$("#navSearch").hide();
	});

$("#modal").tapend(function(){
	$("#mainMenu").animate({"right" : "-"+(window.innerWidth*0.8)+"px"});
	$('#modal').fadeOut();
});

document.addEventListener('touchmove', function(e){ e.preventDefault(); }, false);


