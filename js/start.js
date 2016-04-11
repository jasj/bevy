
function onDeviceReady(){
	
alert("q1");
}/*

	try{
		
		/*	onDeviceReady_fm();
			onDeviceReady_pn();
			document.addEventListener("backbutton", backKeyDown, true);
			document.addEventListener("menubutton", menuKeyDown, true);

		var fbLoginSuccess = function (userData) {
			alert("UserInfo: " + JSON.stringify(userData));
			facebookConnectPlugin.getAccessToken(function(token) {
				alert("Token: " + token);
			}, function(err) {
				alert("Could not get access token: " + err);
			});
		}
		
		 alert("q");
	
		facebookConnectPlugin.login([],
			fbLoginSuccess,
			function (error) { alert("" + error) }
		);
		
		
	}catch(e){
		alert(e);
	}		
/*	setTimeout(function(){ $(".wConteiner div p").show();},3000);
	checkPreviusLogin();

}*/


if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|IEMobile)/)) {
  alert("n");
  document.addEventListener("deviceready", onDeviceReady, false);
} else {
	alert("s");
  onDeviceReady(); //this is the browser
}



