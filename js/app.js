function loaded() {
	navigator.geolocation.getCurrentPosition(
			function(position) {
				var map = new DMap("map canvas", {point:new DLatLng(position.coords.latitude, position.coords.longitude), level:3});
			},
			function(){
				alert('Error');
			});
}
// ������ �ε��� �̺�Ʈ�� ����Ѵ�.
addEventListener('load', loaded, false);