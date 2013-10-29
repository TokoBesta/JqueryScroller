$(document).ready(function(){

$("#upone").click(clickDown);

function clickDown(){
	$("#upone").hide();
	$("#downone").show();
	$("#handfive").slideDown(1000 /*this is speed of hand animation*/,function(){
        $(this).hide();
		$("#handsix").show(); 
        $('html, body').animate({
        scrollTop: $("#backgtwo").offset().top
        }, 1000 /*This is speed of sliding*/);			
        $("#handsix").slideUp(1000); 
        $("#downone").hide();
        $("#upone").show();
      });
	}   

});
	