
function onDeviceReady(){
	


	try{
		/*
			onDeviceReady_fm();
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
	
		
		facebookConnectPlugin.login(["public_profile"],
			fbLoginSuccess,
			function (error) { alert("" + error) }
		);
		
				*/
	}catch(e){
		console.log(e);
	}
/*	setTimeout(function(){ $(".wConteiner div p").show();},3000);
	checkPreviusLogin();
*/
}


if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|IEMobile)/)) {
  document.addEventListener("deviceready", onDeviceReady, false);
} else {
  onDeviceReady(); //this is the browser
}



