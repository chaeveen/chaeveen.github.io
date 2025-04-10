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
  
});

$(function(){
    $('body').mousemove(function(e){
        let pagex=e.pageX;
        let pagey=e.pageY;
        $('.pointer').css({
            left:pagex,
            top:pagey
        })
    })
});


$(function(){
    $('.menu').click(function(){
        $('nav,.menu').toggleClass('on');
    })
});

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
});

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

});

$(function(){
    $('#graphic .right').eq(0).show();
    $('#graphic .mid li a').click(function(e){
    e.preventDefault();
        $('#graphic .right').hide();
        let tabid = $(this).attr('href');
        $(tabid).show();
    })
});

$(function () {
	var $imgs = $('.img');
	var $buttons = $('#buttons');
	var tagged = {};

	$imgs.each(function () {
		var img = this;
		var tags = $(this).data('tags'); 
		if (tags) {
			tags.split(',')
            // 두개 적히면 두 개 다 나오는것
            .forEach(function (tagName) {
				if (tagged[tagName] == null) {
					tagged[tagName] = [];
				}
				tagged[tagName].push(img);
			});
		}
	});

	$('<button/>', {
		text: 'all',
        //모두보기,전체보기 같은 텍스트
		class: 'active',
		click: function () {
			$(this)
				.addClass('active').siblings().removeClass('active');
                //.siblings 나머지
			$imgs.hide().fadeIn(500);
            //모두 다 사라진 다음에 this 해당한 애만 fade in
		}
	}).appendTo($buttons);
    //괄호 안에 넣어준다

	$.each(tagged, function (tagName) {
		$('<button/>', {
			text: tagName,
			click: function () {
				$(this).addClass('active').siblings().removeClass('active');
				$imgs.hide().filter(tagged[tagName]).fadeIn(500);
			}
		}).appendTo($buttons);
	});

});

$(function(){
    //모달컨텐츠 클릭시
    $('#graphic .right .modal-list').click(function(){
        let i=$(this).index();
        $('#modal .contents').eq(i).fadeIn();
        $('.modal-close').fadeIn();
        $('body').css('overflow','hidden');
        $('.modal-bg').fadeIn();
    })
    $('.modal-close,.modal-bg').click(function(){
        $('.contents').fadeOut();
        $('.modal-close,.modal-bg').fadeOut();
        $('body').css('overflow','auto');
    })
});
