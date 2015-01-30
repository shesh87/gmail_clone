$( "input:checkbox" ).on('click', function () {
	$(this).parents('li').toggleClass('js-checked');
	
});