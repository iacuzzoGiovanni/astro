document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady(e){
	navigator.splashscreen.hide();
	alert('coucou');
};