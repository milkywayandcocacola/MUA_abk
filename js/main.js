/*fotorama initialization*/
$('#portfolio-button-lash').click(function(){
  $(this).addClass('portfolio-button-focus');
  $('#portfolio-button-mua').removeClass('portfolio-button-focus');
	$(".fotorama-mua").hide();
	$(".fotorama-lash").fadeIn(1000);
	});
$('#portfolio-button-mua').click(function(){
  $(this).addClass('portfolio-button-focus');
  $('#portfolio-button-lash').removeClass('portfolio-button-focus');
	$(".fotorama-lash").hide();
	$(".fotorama-mua").fadeIn(1000);
	});
/*MaskedInput initialization*/
jQuery(function($){$("#phone").mask("+7 (999) 999-99-99");});
/*wow.js initialization*/
new WOW().init();
/*slick slider initialization */
$(document).ready(function(){
	/*services-slider*/
	$('.services-slider').slick({
		prevArrow: '<button type="button" id="services-slider-btn" class="services-slider-btn-prev"><img src="img/prev_arrow.svg"></button>',
		nextArrow: '<button type="button" id="services-slider-btn" class="services-slider-btn-next"><img src="img/next_arrow.svg"></button>',
		dots: false,
    infinite: false,
		arrows: false,
		slidesToShow: 3,
		responsive: [
		{
			breakpoint: 1199,
      settings: {
        dots: true,
				arrows: true,
				slidesToShow: 2,
				slidesToScroll: 1,
      }
    },
    {
      breakpoint: 575,
      settings: {
        dots: true,
				arrows: false,
				slidesToShow: 1,
				slidesToScroll: 1,
      }
    }
  ]
});
/*feedback slider*/
$('.feedback-slider').slick({
		prevArrow: '<button type="button" id="feedback-slider-btn" class="feedback-slider-btn-prev"><img src="img/prev_arrow.svg"></button>',
		nextArrow: '<button type="button" id="feedback-slider-btn" class="feedback-slider-btn-next"><img src="img/next_arrow.svg"></button>',
		infinite: true,
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1
	});
});

$(document).ready(function($) {
//portfolio buttons
  $('#portfolio-button-mua').addClass('portfolio-button-focus');
//hamburger_menu
	var menuBtn = $('#header-menu_btn');
	var menu = $('.MD_menu');
	menuBtn.on('click', function(event) {
		event.preventDefault();
		menuBtn.toggleClass('header-menu_btn__close');
		menu.toggleClass('MD_menu__active');
	});
  //animate scroll
  $("#navbar").on("click","a", function (event) {
      //отменяем стандартную обработку нажатия по ссылке
      event.preventDefault();
      //забираем идентификатор бока с атрибута href
      var id  = $(this).attr('href'),
      //узнаем высоту от начала страницы до блока на который ссылается якорь
          top = $(id).offset().top;
      //animating scroll on distance - top
      $('body,html').animate({scrollTop: top}, 1000);
  });
  $(".MD_menu").on("click","a", function (event) {
      //отменяем стандартную обработку нажатия по ссылке
      event.preventDefault();
      //забираем идентификатор бока с атрибута href
      var id  = $(this).attr('href'),
      //узнаем высоту от начала страницы до блока на который ссылается якорь
          top = $(id).offset().top;
      //animating scroll on distance - top
      $('body,html').animate({scrollTop: top}, 1000);
  });
//menu_scroll 
  var lastScrollTop = 0;
  $('.sections').attr('style', 'transform: translateY(' + $('.main').height() + 'px);');
  $(window).scroll(function(event){
    var st = $(this).scrollTop();
    if (st<$('.main').height()){
    $('.main-content-right').attr('style', 'opacity: '+ (1-(st*0.001)) + ';');
    };
    if ((st > lastScrollTop)&(st > $('.main').height())){
      $('#navbar').css({"transition":"transform 0.5s ease-in-out","transform":"translateY(-65px)"})
      $('.MD_menu__active').attr("class", "container-fluid MD_menu")
      $('.header-menu_btn__close').attr("class", "header-menu_btn")
    }
      else{
        $('#navbar').css({"transition":"transform 0.5s ease-in-out","transform":"translateY(0px)"})
        $('.MD_menu__active').attr("class", "container-fluid MD_menu")
        $('.header-menu_btn__close').attr("class", "header-menu_btn")
      }
      lastScrollTop = st;
    if (st > $('.main').height()){$('.main').attr('style', 'display: none;');} else {$('.main').removeAttr('style', 'display: none;');}
    });

//courses & services  
  $('input[type="radio"], #c42, #c43, #c62').prop('checked',false);
  $('.c1_button').click(function(){$('#message').text('Здравствуйте! Я хочу записаться на наращивание ресниц');});
  $('.c2_button').click(function(){$('#message').text('Здравствуйте! Я хочу записаться на макияж');});
  $('.c3_button').click(function(){$('#message').text('Здравствуйте! Я хочу записаться на окрашивание бровей');});
  $('.c4_button').click(function(){$('#message').text('Здравствуйте! Я хочу записаться на курс "Макияж для себя": урок "Дневной/вечерний макияж"');});
  $('.c5_button').click(function(){$('#message').text('Здравствуйте! Я хочу записаться на курс "Профессия визажист"');});
  $('.c6_button').click(function(){$('#message').text('Здравствуйте! Я хочу записаться на курс "Профессия лашмейкер": напраление "Идеальная классика"');});
$('.form').change(function() {
  //services
  var c1_message_text = $('#c1_message_text');
  var c2_message_text = $('#c2_message_text');
  var c3_message_text = $('#c3_message_text');
  c1_message_text.text('');
  c2_message_text.text('');
  c3_message_text.text('');
  //с1 form
  if ($('#c11').is(':checked')){c1_message_text.text(': Классика');};
  if ($('#c12').is(':checked')){c1_message_text.text(': 2D объем');};
  if ($('#c13').is(':checked')){c1_message_text.text(': 3D объем');};
  if ($('#c14').is(':checked')){c1_message_text.text(': 4D объем');};
  if ($('#c15').is(':checked')){c1_message_text.text(': Hollywood');};
  if ($('#c16').is(':checked')){c1_message_text.text(': снятие ресниц');};    
  $('.c1_button').click(function(){$('#message').text('Здравствуйте! Я хочу записаться на наращивание ресниц'+c1_message_text.text());});
  //с2 form
  if ($('#c21').is(':checked')){c2_message_text.text(': Дневной/нюд');};
  if ($('#c22').is(':checked')){c2_message_text.text(': Лифтинг');};
  if ($('#c23').is(':checked')){c2_message_text.text(': Вечерний');};
  if ($('#c24').is(':checked')){c2_message_text.text(': Свадебный');};
  if ($('#c25').is(':checked')){c2_message_text.text(': Мужской');};
  if ($('#c26').is(':checked')){c2_message_text.text(': Фантазийный');}; 
  if ($('#c27').is(':checked')){c2_message_text.text(': Накладные ресницы');};   
  $('.c2_button').click(function(){$('#message').text('Здравствуйте! Я хочу записаться на макияж'+c2_message_text.text());});
  //с3 form
  if ($('#c31').is(':checked')){c3_message_text.text(': Окрашивание бровей хной/краской');};
  if ($('#c32').is(':checked')){c3_message_text.text(': Оформление пинцетом');};
  if ($('#c33').is(':checked')){c3_message_text.text(': Оформление пастой');};
  if ($('#c34').is(':checked')){c3_message_text.text(': Окрашивание ресниц хной/краской');};
  $('.c3_button').click(function(){$('#message').text('Здравствуйте! Я хочу записаться на окрашивание бровей'+c3_message_text.text());});
  //courses
  var c6_1 = $('#c61');
  var c6_2 = $('#c62');
	var c6_text = $('#c6_text');
  var c6_message_text = $('#c6_message_text');
  var c4_1 = $('#c41');
  var c4_2 = $('#c42');
  var c4_3 = $('#c43');
	var c4_text = $('#c4_text');
  var c4_message_text = $('#c4_message_text');  
  var message = $('#message');
  c4_message_text.text('');
  c6_message_text.text('');
  c4_text.html('0 ₽');
  c6_text.html('0 ');
  //с4 form
  if ($('#c4 input').is(':checked')){
    if (c4_1.is(':checked')){c4_text.text('2 000 ₽'); c4_message_text.text('урок "Дневной/Вечерний макияж"');};
    if (c4_2.is(':checked')){c4_text.text('2 000 ₽'); c4_message_text.text('урок "Смоки айс макияж"');};
    if (c4_3.is(':checked')){c4_text.text('2 000 ₽'); c4_message_text.text('урок "Голивудский макияж"');};
    if (c4_1.is(':checked') & c4_2.is(':checked')){c4_text.text('4 000 ₽'); c4_message_text.text('уроки "Дневной/Вечерний макияж" и "Смоки айс макияж"');};
    if (c4_1.is(':checked') & c4_3.is(':checked')){c4_text.text('4 000 ₽'); c4_message_text.text('уроки "Дневной/Вечерний макияж" и "Голивудский макияж"');};
    if (c4_2.is(':checked') & c4_3.is(':checked')){c4_text.text('4 000 ₽'); c4_message_text.text('уроки "Смоки айс макияж" и "Голивудский макияж"');};
    if (c4_1.is(':checked') & c4_2.is(':checked')& c4_3.is(':checked')){c4_text.html('4 500 ₽ <span style="position: absolute; width: 100%; left: 50%; bottom: -17px; transform: translateX(-50%);font-size: 12px; color: #fb3c7a;">Акция! <s>6 000 ₽</s><br><small style="font-size: 10px;">до 1.09.2018</small></span>'); c4_message_text.text('полный курс по акции');};
    $('.c4_button').click(function(){message.text('Здравствуйте! Я хочу записаться на курс "Макияж для себя": '+c4_message_text.text());});
  }
  else{c6_message_text.text(''); message.text('');};
  //с6 form
  if ($('#c6 input').is(':checked')){
    if (c6_1.is(':checked')){c6_text.text('8 000 '); c6_message_text.text('направление "Идеальная классика" ');};
    if (c6_2.is(':checked')){c6_text.text('7 000 '); c6_message_text.text('направление "Объемное наращивание" ');};
    if (c6_2.is(':checked') & c6_1.is(':checked')){c6_text.text('15 000 '); c6_message_text.text('направления "Идеальная классика" и "Объемное наращивание" ');};
    $('.c6_button').click(function(){message.text('Здравствуйте! Я хочу записаться на курс "Профессия лашмейкер": '+c6_message_text.text());});
  }
  else{c6_message_text.text(''); message.text('');};
});

	});

