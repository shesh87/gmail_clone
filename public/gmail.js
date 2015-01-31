$( "input:checkbox" ).on('click', function () {
	$(this).parents('li').toggleClass('js-checked');
	$('.js-selected, .js-sort').toggle();
	$('.js-remove, .js-hidden-sort').toggle();
	// if ("input:checkbox").is(':checked') === true {
	// 	alert("yes");
	// } else {
	// 	console.log("no");
	// }
});


