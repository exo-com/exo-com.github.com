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
	$("#board_content").hide();
	
	$("#menu_main").click(function(){
		$("#main_content").show();
		$("#history_content").hide();
		$("#story_content").hide();
		$("#notice_content").hide();
		$("#board_content").hide();
	});
	$("#menu_history").click(function(){
		$("#main_content").hide();
		$("#history_content").show();
		$("#story_content").hide();
		$("#notice_content").hide();
		$("#board_content").hide();
	});
	$("#menu_story").click(function(){
		$("#main_content").hide();
		$("#history_content").hide();
		$("#story_content").show();
		$("#notice_content").hide();
		$("#board_content").hide();
	});
	$("#menu_notice").click(function(){
		$("#main_content").hide();
		$("#history_content").hide();
		$("#story_content").hide();
		$("#notice_content").show();
		$("#board_content").hide();
	});
	$("#menu_board").click(function(){
		$("#main_content").hide();
		$("#history_content").hide();
		$("#story_content").hide();
		$("#notice_content").hide();
		$("#board_content").show();
		loadxml();
	});
	$("#writeBtn").click(function() {
		setxml();
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
	var i = 0;
	$("#result").empty();
	$.get("xml/notice.xml", function(data){
		
		$(data).find("board").each(function(){
			$("#result").append("<span class='span1'>" + "번호" + "</span>");
			$("#result").append("<span class='span1'>" + "작성자" + "</span>");
			$("#result").append("<span class='span2'>" + "작성일" + "</span>");
			$("#result").append("<span class='span4'>" + "내용" +"</span><br/>");
			$(this).find("data").each(function(){
				
				$("#result").append("<span class='span1'>" + i + "</span>");
				$("#result").append("<span class='span1'>" + $(this).find("name").text() + "</span>");
				$("#result").append("<span class='span2'>" + $(this).find("date").text() + "</span>");
				$("#result").append("<span class='span4'>" + $(this).find("content").text() +"</span><br/>");
				i++;
			});
		});
	});
}

function setxml(){
	var name = $("#userId").val();
	var date = $("#date").val();
	var content = $("#content").val();
	
}