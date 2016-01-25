$(document).ready(function(){

	var slideCount = $('#wrapper li').length;
	var slideWidth = $('#wrapper').width();
	var slideHeight = $(window).height();
	var sliderUlWidth = slideCount * slideWidth;
	var counter = 0;
	
	$('#wrapper').css({height: slideHeight});
	$('#slider').css({ width: sliderUlWidth });
	$('#slider li').css({ width: slideWidth});

	$('#slider li.active + li').on('click', slide);
    $(window).resize(resizeSlider);

    function slide(){

    	$('#slider li').removeClass('active');
		$(this).addClass('active');

		$('#slider li').unbind('click');
		$('#slider li.active + li').on('click', slide);

		var mLeft = parseInt($('#slider').css("marginLeft"));
		var newMargin = mLeft + (slideWidth * (-1));
		$('#slider').css({marginLeft: newMargin});

		if(counter < slideCount){
			counter++;
		}
		else{
			counter = 0;
		}

    }
    function resizeSlider(){
    	
    	slideWidth = $('#wrapper').width();
		slideHeight = $(window).height();
		sliderUlWidth = slideCount * slideWidth;
		
		$('#wrapper').css({height: slideHeight});

		var newMargin = parseInt(counter * slideWidth) * (-1);

		$('#slider').css({ width: sliderUlWidth, marginLeft: newMargin});
		$('#slider li').css({ width: slideWidth});

    }

});