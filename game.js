

$(document).ready(function() {

	
	$(".btn").on("click", function() {
		

		var numberArray = ["69", "30", "45", "55", "42", "10"];

		chosenNumber = numberArray[Math.floor(Math.random() * numberArray.length)];


		$("#number").html("Your random number is: " + chosenNumber);
	



				//change the text of the start button to say 'reset'

		$(this).text("reset");
		reurn(chosenNumber);

		//$("#close").on("click", function() {

		//});

		//$("p").on("click", function()  {

		//});
	});
	var overall = 0

	if(overall<chosenNumber){

		var count1 = 1;
		$("gem1").on("click", function(){
			 overall = count1 + overall;
			 $("gemInfo").html(count1);

		});
		var count2 = 10;
		$("gem2").on("click", function(){
			 overall = count2 + overall;
			 $("gemInfo2").html(count2);

		});

		var count3 = 3 ;
		$("gem3").on("click", function(){
			 overall = count3 + overall;
			 $("gemInfo3").html(count3);

		});

	}
	else if(overall === chosenNumber){
		$("#winner").html("You Win!!!");
	}
	else{
		$("loser").html("You Went Too Far!!! Reset to play again!");
	}



});



/*var number = 0;

$(document).ready(function(){
	$("#count").on("click", function(){
		number++;
		console.log(number);
		$("#number").html(number);

	});



});*/
