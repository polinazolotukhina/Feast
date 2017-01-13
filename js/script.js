$(document).ready(function(){
	$.letItSnow('.let-it-snow', {
            stickyFlakes: 'lis-flake--js',
            makeFlakes: true,
        });

	$(".date").hover(function(){
		    if ($(this).find('.cover').is(':visible')) {
	         	$(this).find('.corner').fadeIn();
	         }
	 }, function(){
	    $(this).find('.corner').fadeOut();
	});

	$('.date').on('click', function(){
		$(this).find('.cover').hide();
		$(this).find('.corner').hide();
	});

    $(window).resize(function() {
            $('#wrapper').height($(window).height() - 20);

    });
    $(window).trigger('resize');
});



