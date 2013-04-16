var xHeight, xWidth;

$(document).ready(function(){
	xHeight = window.innerHeight;
	xWidth = window.innerWidth;
	$("#wrap").css("width", xWidth);
	$("#wrap").css("min-height", xHeight);
	$(".content").css("min-height", xHeight-170);
	
	$("#main_content").show();
	$("#history_content").hide();
	$("#story_content").hide();
	$("#notice_content").hide();
	
	$("#menu_main").click(function(){
		$("#main_content").show();
		$("#history_content").hide();
		$("#story_content").hide();
		$("#notice_content").hide();
	});
	$("#menu_history").click(function(){
		$("#main_content").hide();
		$("#history_content").show();
		$("#story_content").hide();
		$("#notice_content").hide();
	});
	$("#menu_story").click(function(){
		$("#main_content").hide();
		$("#history_content").hide();
		$("#story_content").show();
		$("#notice_content").hide();
		loadxml();
	});
	$("#menu_notice").click(function(){
		$("#main_content").hide();
		$("#history_content").hide();
		$("#story_content").hide();
		$("#notice_content").show();
	});
});

$(window).resize(function(e){
	
	xHeight = window.innerHeight;
	xWidth = window.innerWidth;
	
	$("#background").css("width", xWidth);
	$("#background").css("height", xHeight);
	$("#wrap").css("width", xWidth);
	$("#wrap").css("min-height", xHeight);
	$(".content").css("min-height", xHeight-170);
});	

function loadxml(){
	
	$.get("xml/notice.xml", function(data){
		
		$(data).find("board").each(function(){
			$(this).find("data").each(function(){
				$("#result").append($(this).find("name").text());
				$("#result").append(" : " + $(this).find("date").text());
				$("#result").append(" : " + $(this).find("content").text() +"<br/>");
			});
		});
		
	});
}
