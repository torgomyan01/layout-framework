let svgPath = $("#openParticipantsPanel  span  p");

$(".live-events-close-mod-bnt").click(function () {
	$(".participantsModLiveEvents").css("display", "none");
	$("#openParticipantsPanel  span  svg  path").css("fill","black");
	svgPath.addClass( "color-black" );
	$("#openParticipantsPanel  p").addClass( "color-black" );
	$(".active-participants").removeClass( "back-dark-blue" );
});
$("#openParticipantsPanel").click(function () {
	$("#openChatPanel  svg  path").css("fill","black");
	$(".active-chat").removeClass( "back-dark-blue" );
	$("#openChatPanel p").addClass( "color-black" );
	$("#openParticipantsPanel  span  svg  path").css("fill","white");
	svgPath.removeClass( "color-black" )
	$("#openParticipantsPanel  p").removeClass( "color-black" )
	$(".active-participants").addClass( "back-dark-blue" );
	$(".participantsModLiveEvents").css("display", "block");
	$(".chatModLiveEvents").css("display", "none");
});

$(".live-chat-close-mod-bnt").click(function () {
	$(".chatModLiveEvents").css("display", "none");
	$("#openChatPanel  svg  path").css("fill","black");
	$(".active-chat").removeClass( "back-dark-blue" );
	$("#openChatPanel p").addClass( "color-black" );
});

$("#openChatPanel").click(function () {
	$("#openParticipantsPanel  span  svg  path").css("fill","black");
	svgPath.addClass( "color-black" );
	$("#openParticipantsPanel  p").addClass( "color-black" );
	$(".active-participants").removeClass( "back-dark-blue" );
	$("#openChatPanel  svg  path").css("fill","white");
	$(".active-chat").addClass( "back-dark-blue" );
	$("#openChatPanel p").removeClass( "color-black" );
	$(".chatModLiveEvents").css("display", "block");
	$(".participantsModLiveEvents").css("display", "none");
});

if (!$(".live-events-header").length == 1) {
	$(".video-liveEvents-start").css({
		"max-height": "100%",
		"border-radius": "7px",
	});
}
