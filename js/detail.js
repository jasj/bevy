
var qrcode = new QRCode("qrcode",  {text: "http://jindo.dev.naver.com/collie",
  
    colorDark : "#FFFF00",
    colorLight : "rgba(200,200,200,0)",
correctLevel : QRCode.CorrectLevel.H}
);

function makeCode () {      
    var elText = "hola linkpoints";
    

    
    qrcode.makeCode(elText);
}

makeCode();




$('.CAT').tap(function(){
	
		changePage("Detail",{
		"category": "ads"
	});
});	

$('.footerDetail>table>tbody>tr>td').tap(function(){
	//$("td[tabDetail="+$(this).attr('tabDetail')+"]").hasClass('active')
	$(".footerDetail td.active").removeClass('active');
	$(".footerDetail td[tabDetail="+$(this).attr('tabDetail')+"]").addClass('active');
	
});

