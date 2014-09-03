$(document).ready(function() {
	var images = $("#slides > img");
	var lengthOfImages = images.length;
	var first = 0;
	var last = images.length-1; 
	var top = first;
	var bottom = 2;
	//to hide the left and right i.e. left and right icons if minimum number of images are there
	if (lengthOfImages <= 3) {
		$(".image-scroller .icon-left").css("display", "none");
		$(".image-scroller .icon-right").css("display", "none");
	}
	//to show first three images
	for (var i = top; i <= bottom ; i++) {
		$("#image" + i + "").css("display", "inline-block");
	};
	
	//action take place on clicking of right
	$(".icon-right").on("click", function(){
		//to check for last image is in display or not
		if(top > first) {
			console.log("this is not first image");
			top--;
			$("#image" + bottom).css("display", "none");
			$("#image" + top).css("display", "inline-block");
			bottom--;
			// for (var i = top; i < bottom ; i++) {
			// 	$("#image" + i + "").animate({ "right": "+=0px" }, "fast" );
			// };	

		} else {
			console.log("this is the first image");
		}
	});
	$(".icon-left").on("click", function(){
		//to check for last image is in display or not
		if(bottom > last -1) {
			console.log("this is the last image");
		} else {
			console.log("this is not last image");
			bottom++;
			$("#image" + top).css("display", "none");
			$("#image" + bottom).css("display", "inline-block");
			top++;
			// for (var i = top; i < bottom ; i++) {
			// 	$("#image" + i + "").animate({ "right": "+=0px" }, "fast" );
			// };	
		}
	});
	
});