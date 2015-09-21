$.fn.hasAttr = function(name) {  
	return this.attr(name) !== undefined;
};

//Star in Tap
startTap = { X : 0 , Y : 0}
$("*").tapstart(function(ev){
	startTap.X = ev.pageX || ev.originalEvent.touches[0].pageX;
	startTap.Y = ev.pageY || ev.originalEvent.touches[0].pageY;
});

function checkPress(ev){
	var endX = ev.pageX || ev.originalEvent.changedTouches[0].pageX;
	var endY = ev.pageY || ev.originalEvent.changedTouches[0].pageY;
	return Math.abs(endX - startTap.X)  < 10 && Math.abs(endY - startTap.Y) < 10	
}