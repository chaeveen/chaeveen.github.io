$(function(){
    function animate_bar(){
        $('.skill-bar > div').each(function(){
            let $this=$(this),
            skills=$this.data('width');
            $this.css({width:skills+'%'})
        })
    }
    $(window).scroll(function(){
        let sectionT=$('.skill').offset().top;
        if($(window).scrollTop() > sectionT -500){
            animate_bar()
        }
    })
  
})

$(function(){
    $('body').mousemove(function(e){
        let pagex=e.pageX;
        let pagey=e.pageY;
        $('.pointer').css({
            left:pagex,
            top:pagey
        })
    })
})


$(function(){
    $('.menu').click(function(){
        $('nav,.menu').toggleClass('on');
    })
})

$(function(){
    let lastTop=0;
    $(window).scroll(function(){
        let windowTop=$(this).scrollTop();
        if (windowTop > lastTop){
            $('.main').addClass('hide')
        }
        else{
            $('.main').removeClass('hide')
        }
        lastTop = windowTop;
    })
})

$(function(){
    $('#web .mid li> a').click(function () {
		let block = $(this).attr('href');
		let blockTop = $(block).offset().top;
		$('html, body').animate({
			scrollTop: blockTop
		}, 600, function () {
			scrollPosition();
		});
	});
    function scrollPosition() {
		let windowTop = $(window).scrollTop();
		$('#web .mid li> a').each(function () {
			let block = $($(this).attr('href')),
				blockTop = (block.offset().top) - 20;
			if (blockTop <= windowTop && (blockTop + block.outerHeight()) > windowTop) {
				$(this).parent('li').addClass('color');
			} else {
				$(this).parent('li').removeClass('color');
			}
		});
	}

	$(window).scroll(function () {
		scrollPosition();
	});

})

$(function(){
    $('#graphic .right').eq(0).show();
    $('#graphic .mid li a').click(function(e){
    e.preventDefault();
        $('#graphic .right').hide();
        let tabid = $(this).attr('href');
        $(tabid).show();
    })
})
