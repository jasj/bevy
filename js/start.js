
function onDeviceReady(){
	try{
		/*
			onDeviceReady_fm();
			onDeviceReady_pn();
			document.addEventListener("backbutton", backKeyDown, true);
			document.addEventListener("menubutton", menuKeyDown, true);
		*/
		alert("fumba");
		
		facebookConnectPlugin.login(["public_profile"],
			fbLoginSuccess,
			function (error) { alert("" + error) }
		);
		
		
	}catch(e){
	}
/*	setTimeout(function(){ $(".wConteiner div p").show();},3000);
	checkPreviusLogin();
*/
}


alert("fumba");
if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|IEMobile)/)) {
  document.addEventListener("deviceready", onDeviceReady, false);
} else {
  onDeviceReady(); //this is the browser
}



