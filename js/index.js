var xHeight, xWidth;
$(document).ready(function(){
	xHeight = window.innerHeight;
	xWidth = window.innerWidth;
	$("#wrap").css("width", xWidth);
	$("#wrap").css("min-height", xHeight);
	
	$("#main").css("min-height", xHeight-170);
	$("#main_content").show();
	$("#story_content").hide();
	$("#history_content").hide();
	$("#board_content").hide();
	$("#menu_main").click(function(){
		goMain();
	});
	$("#menu_history").click(function(){
		goHistory();
	});
	$("#menu_story").click(function(){
		goStory();
	});
	$("#menu_board").click(function(){
		goBoard();
	});
});

$(window).resize(function(e){
	
	xHeight = window.innerHeight;
	xWidth = window.innerWidth;
	
	$("#background").css("width", xWidth);
	$("#background").css("height", xHeight);
	$("#wrap").css("width", xWidth);
	$("#wrap").css("min-height", xHeight);
	
});	
function goHistory(){
	$("#main_content").hide();
	$("#story_content").hide();
	$("#board_content").hide();
	$("#history_content").show();
}
function goMain(){
	$("#story_content").hide();
	$("#history_content").hide();
	$("#board_content").hide();
	$("#main_content").show();
}
function goStory(){
	$("#history_content").hide();
	$("#main_content").hide();
	$("#board_content").hide();
	$("#story_content").show();
}
function goBoard(){
	$("#history_content").hide();
	$("#main_content").hide();
	$("#story_content").hide();
	$("#board_content").show();
}
(function($){
	$.fn.extend({
		conMove: function(){
			return this.each(function(){
				var thisval = $(this).attr("id");
				if(thisval == main){
					$("#menu_main").click(function(){
						
						$("#main").hide(1000);
						$("#story").show(1000)
					});
					
				}else if(thisval == story){
					$("#menu_story").click(function(){
						$("#story").hide(1000);
						$("#main").show(1000);
					});
				}
			});
		}
	});
})(jQuery);
