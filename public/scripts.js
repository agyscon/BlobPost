
$(document).ready(function(){
	CKEDITOR.config.width = 800;
	CKEDITOR.config.height = 300;
	CKEDITOR.config.uiColor = "#a6a6a6";
	CKEDITOR.replace("userTextBox");


	$(".parent").hover(
		function() {
			$(".dropdown").slideDown(100);
		},
		function() {
			$(".dropdown").slideUp(100);
		}
	);

	$("#submitionButton").click(function() {
		var data = CKEDITOR.instances.userTextBox.getData();
		//$("#userPosts").prepend("<div class='writtenPost'><p>" + $("#userTextBox").val() + "</p></div>");
		$("#userPosts").prepend("<div class='writtenPost'><p>" + data + "</p></div>");
	});

});

