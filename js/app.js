function loaded() {
	navigator.geolocation.getCurrentPosition(
			function(position) {
				var map = new DMap("map canvas", {point:new DLatLng(position.coords.latitude, position.coords.longitude), level:3});
			},
			function(){
				alert('Error');
			});
}
// 페이지 로드후 이벤트에 등록한다.
addEventListener('load', loaded, false);