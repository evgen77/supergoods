$('.header__toggler').click(() => {
    $('.header__nav').toggleClass('header__nav--open');
    $('.content').toggleClass('content--open');
    $('.header__toggler').toggleClass('header__toggler--open' , () => {
        // $(document).click((e) => {
        //     if ( $(e.target).closest('.header__nav').length ) {
        //         // клик внутри элемента 
        //         return;
        //     }
        //     // клик снаружи элемента 
        //     $('.header__nav').removeClass('header__nav--open');
        //     $('.content').removeClass('content--open');
        //     $('.header__toggler').removeClass('header__toggler--open');
        // });
    });

    
})


$('.crossline').marquee({
	//duration in milliseconds of the marquee
	duration: 15000,
	//gap in pixels between the tickers
	gap: 0,
	//time in milliseconds before the marquee will start animating
	delayBeforeStart: 0,
	//'left' or 'right'
	direction: 'left',
	//true or false - should the marquee be duplicated to show an effect of continues flow
	duplicated: true,

    startVisible: true
});


 
$(document).ready(function(){

var $menu = $("header.header");
             
	$(window).scroll(function(){
		if ( $(this).scrollTop() > 100 ){
			$menu.addClass("fixed")
					  
			
		} else if($(this).scrollTop() <= 100 ) {
			$menu.removeClass("fixed");
					  
			
		}
	});        

	$(".header__nav").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});
});

const popupOpen = (el) => {
	$('.popups').fadeTo(1, 500);
}

const popupClose = () => {
	$('.popups').fadeOut();
}