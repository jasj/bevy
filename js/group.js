$(".putimg").tapend(function(ev){
	console.dir(ev);
	if(checkPress(ev)){
		var color = $(this).find(".titlesLable").css("backgroundColor");
		changePage("groupPage");
		$("#categoryTopbar").css({
			"background-image" : $(this).css('backgroundImage'),
			"border-bottom" : "3px solid "+color
		});
		
		$(".dotUnion").css({
			"border-color" : color
		})
		
		$(".gname").html($(this).find(".titlesLable td:eq(0)").html()).css("color",color);
		
		var myScrollGroup = new IScroll('#wrapperGroup', {
			probeType: 1, 
			mouseWheel: false	,
		});
	}
});


