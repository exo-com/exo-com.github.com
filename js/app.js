function loaded() {
	navigator.geolocation.getCurrentPosition(
			function(position) {
				var map = new DMap("map_canvas", {point:new DLatLng(37.2583442,127.0105531), level:3});
			},
			function(){
				alert('Error');
			});
}
// 페이지 로드후 이벤트에 등록한다.
addEventListener('load', loaded, false);
