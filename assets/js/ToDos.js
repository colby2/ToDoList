//check off specific ToDos by clicking
$("ul").on("click", "li", function(){//2nd argument says to specifically look at li inside ul
	$(this).toggleClass("completed");

	// if($(this).css("Color") === "rgb(128, 128, 128)"){
	// 	$(this).css({
	// 	color: "black",
	// 	textDecoration: "none"
	// });
	// }
	// else{
	// 	$(this).css({
	// 		color: "gray",
	// 		textDecoration: "line-through"
	// 	});
	// }
});

//click on X to delete ToDo 
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut("500", function(){
		$(this).remove();
	});
	event.stopPropagation();

});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//getes input text on enter key press
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and add to html
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");

	}
});

$(".fa-plus-square-o").click(function(){
	$("input[type='text']").fadeToggle();
});