$(function(){
    $("#videoid").one("click",function(){
        $(".click").hide();
        $(".hand").hide();
        // $("#videoid").css("opacity", 0.95);
		// window.setTimeout(function() {
		// 	$("#videoid").css("opacity", 1);
		// }, 10);
        // $("#videoid").fadeIn();
        document.getElementById("videoid").controls=false;
        document.getElementById("videoid").currentTime=0;
        document.getElementById("videoid").play();
        $(".down").addClass("beat");

        // $("#videoid").prop("poster").fadeOut();
        // $("#videoid").fadeIn();
    });

    $(".logo").one("click",function(){
        $(".click").hide();
        $(".hand").hide();
        // $("#videoid").css("opacity", 0.95);
		// window.setTimeout(function() {
		// 	$("#videoid").css("opacity", 1);
		// }, 10);
        // $("#videoid").fadeIn();
        document.getElementById("videoid").controls=false;
        document.getElementById("videoid").currentTime=0;
        document.getElementById("videoid").play();
        $(".down").addClass("beat");

        // $("#videoid").prop("poster").fadeOut();
        // $("#videoid").fadeIn();
    });
    
    $(".click").one("click",function(){
        $(".click").hide();
        $(".hand").hide();
        // $("#videoid").css("opacity", 0.95);
		// window.setTimeout(function() {
		// 	$("#videoid").css("opacity", 1);
		// }, 10);
        // $("#videoid").fadeIn();
        document.getElementById("videoid").controls=false;
        document.getElementById("videoid").currentTime=0;
        document.getElementById("videoid").play();
        $(".down").addClass("beat");

        // $("#videoid").prop("poster").fadeOut();
        // $("#videoid").fadeIn();
    });

    $(".hand").one("click",function(){
        $(".click").hide();
        $(".hand").hide();
        // $("#videoid").css("opacity", 0.95);
		// window.setTimeout(function() {
		// 	$("#videoid").css("opacity", 1);
		// }, 10);
        // $("#videoid").fadeIn();
        document.getElementById("videoid").controls=false;
        document.getElementById("videoid").currentTime=0;
        document.getElementById("videoid").play();
        $(".down").addClass("beat");

        // $("#videoid").prop("poster").fadeOut();
        // $("#videoid").fadeIn();
    });

   
});