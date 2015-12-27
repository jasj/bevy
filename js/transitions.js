var backPages = [];
function changePage(newPage,parameters){
	backPages.push($(".page.active").attr("id"));
	//Change the Page
	$(".page.active").removeClass('active');
	$("#"+newPage+".page").addClass('active');
	//Change Header
	$("header.active").removeClass('active');
	$("#"+$("#"+newPage+".page").attr("header")).addClass('active');
	//Exec Function associated with the page
	if($("#"+newPage+".page").hasAttr("fx")){
		eval($("#"+newPage+".page").attr("fx")+"("+JSON.stringify(parameters)+")");
	}
}

$(document).on("tapend","[page]",function(ev){
	if(checkPress(ev)){
		if($(this).hasAttr('fx')){
			eval(fx);
		}
		changePage($(this).attr("page"));
		$("#modal").trigger("tapend");
	}
});

$('.back').tap(function(){
	var backPage = backPages.pop();
	if(backPage.length > 0){
		$(".page.active").removeClass('active');
		$("#"+backPage+".page").addClass('active');
		
		$("header.active").removeClass('active');
		$("#"+$("#"+backPage+".page").attr("header")).addClass('active');
	}
});
