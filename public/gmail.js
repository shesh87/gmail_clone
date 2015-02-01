$( "input.js-email" ).on('click', function () {
	$(this).parents('li').toggleClass('js-checked');
	if ($('.js-email').is(':checked')) {
		// alert("yes");
		$('.js-sort, .js-remove').hide();
		$('.js-selected, .js-hidden-sort').show();
	} else{
		// alert("no");
		$('.js-sort, .js-remove').show();
		$('.js-selected, .js-hidden-sort').hide();
	};
});


