'use strict';

(function ($) {

	$(document).ready(function () {

		//color-sheme////////
		$('#color-box > li').on('click', function () {
			var $this = $(this),
			    sheme = $this.data('color-sheme');

			console.log($this);
			console.log(sheme);
			//$('body').data( 'color-sheme', sheme );
			$('body').attr('color-sheme', sheme);
			// ('color-sheme-' + sheme);
		});
		//color-sheme////////


		///// menu_state_open////////////
		$('.main-menu__icon').on('click', function () {
			var $this = $(this),
			    $parent = $this.parent('.main-menu');

			$parent.toggleClass('menu_state_open');
		});
		///// menu_state_open////////////


		////////////togle menu
		var o = $('.toggle');
		$(document).ready(function () {
			$('.toggle').click(function (e) {
				e.preventDefault();
				var tmp = $(this);
				o.each(function () {
					if ($(this).hasClass('active') && !$(this).is(tmp)) {
						$(this).parent().find('.toggle_cont').slideToggle();
						$(this).removeClass('active');
					}
				});
				$(this).toggleClass('active');
				$(this).parent().find('.toggle_cont').slideToggle();
			});
			$(document).on('click touchstart', function (e) {
				var container = $(".toggle-wrap");
				var removeBtnWrap = $('#cart .btn-remove-wrap');
				if (!container.is(e.target) && container.has(e.target).length === 0 && container.find('.toggle').hasClass('active')) {
					container.find('.active').toggleClass('active').parent().find('.toggle_cont').slideToggle();
					if (removeBtnWrap.length > 0) {
						removeBtnWrap.fadeOut();
					}
				}
			});
		});
		///////////////////////

		///////////////fixed-menu///////////
		var nav = $('.fixed-menu');
		var header = $('.header');
		var fixedMenuHeight = header.height() - nav.height();
		$(window).scroll(function () {
			if ($(this).scrollTop() > fixedMenuHeight) {
				nav.addClass("f-nav");
			} else {
				nav.removeClass("f-nav");
			}
		});

		///////////////fixed-menu///////////

		////////////////currensy menu///////////
		$.fn.currensy = function () {
			// начальные параметры
			// задаем стандартную высоту div'a. 
			var selectDefaultHeight = $('#currensy').height();
			// угол поворота изображения в div'e 
			var rotateDefault = "rotate(0deg)";

			// после нажатия кнопки срабатывает функция, в которой 
			// вычисляется исходная высота нашего div'a. 
			// очень удобно для сравнения с входящими параметрами (то, что задается в начале скрипта) 
			$('#currensy > .currensy-tag').click(function () {
				// вычисление высоты объекта методом height() 
				var currentHeight = $('#currensy').height();
				// проверка условия на совпадение/не совпадение с заданной высотой вначале,
				// чтобы понять. что делать дальше. 
				if (currentHeight < 100 || currentHeight == selectDefaultHeight) {
					// если высота блока не менялась и равна высоте, заданной по умолчанию,
					// тогда мы открываем список и выбираем нужный элемент.
					$('#currensy').height("150px"); // «точка остановки анимации»
					// здесь стилизуем нашу стрелку и делаем анимацию средствами CSS3 
					$('.currensy__icon').css({ borderRadius: "1000px", transition: ".2s", transform: "rotate(180deg)" });
				}
				// иначе если список развернут (высота больше или равна 250 пикселям), 
				// то при нажатии на абзац с классом valueTag, сворачиваем наш список и
				// и присваиваем блоку первоначальную высоту + поворот стрелки в начальное положение
				if (currentHeight >= 100) {
					$('#currensy').height(selectDefaultHeight);
					$('.currensy__icon').css({ transform: rotateDefault });
				}
			});

			// так же сворачиваем список при выборе нужного элемента 
			// и меняем текст абзаца на текст элемента в списке
			$('li.option').click(function () {
				$('#currensy').height(selectDefaultHeight);
				$('img.arrow').css({ transform: rotateDefault });
				$('.currensy-tag').text($(this).text());
			});
		};
		$('selector').currensy();
		////////////////currensy menu///////////

		///////// knopka button -top
		var cont = $('.container');
		var coordUi = cont.width() + cont.offset().left;
		var UiTiTop = $('.ui-to-top');
		// UiTiTop.offset(function(i,val){
		//   return {top:val.top, left:val.left + coordUi - UiTiTop.width() + 15};
		// });
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				UiTiTop.fadeIn();
			} else {
				UiTiTop.fadeOut();
			}
		});

		UiTiTop.click(function () {
			$("html, body").animate({ scrollTop: 0 }, 600);
			return false;
		});
		UiTiTop.css({
			"left": coordUi - UiTiTop.width() + 13
		});

		///////////////slider////////////	
		var swiper = new Swiper('.swiper-container', {
			slidesPerView: 4,
			breakpoints: {
				993: {
					slidesPerView: 3
				},
				769: {
					slidesPerView: 2
				},
				577: {
					slidesPerView: 1
				}
			},
			spaceBetween: 30,
			slidesPerGroup: 1,
			loop: true,
			loopFillGroupWithBlank: true,
			pagination: {
				el: '.swiper-pagination',
				clickable: true
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			}
		});
		///////////////slider////////////	
		// var galleryTop = new Swiper('.gallery-top', {
		// slidesPerView: 1,
		// spaceBetween: 10,
		// navigation: {
		//       nextEl: '.swiper-button-next',
		//       prevEl: '.swiper-button-prev',
		//     },
		//   });
		//   var galleryThumbs = new Swiper('.gallery-thumbs', {
		//  		slidesPerView: 3,
		// spaceBetween: 10,
		// centeredSlides: true,
		// slidesPerView: 'auto',
		// touchRatio: 0.2,
		// slideToClickedSlide: true,
		//   });
		//   galleryTop.controller.control = galleryThumbs;
		//   galleryThumbs.controller.control = galleryTop;


		//	magnificPopup////////
		$('.popup-content').magnificPopup({
			type: 'inline'
		});

		// $('.popup-gallery').magnificPopup({
		//  delegate: 'a',
		//  type: 'image',
		//  tLoading: 'Загрузка изображения #%curr%...',
		//  gallery: {
		//      enabled: true,
		//      navigateByImgClick: true,
		//      preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
		//  }
		//  });
		// magnificPopup////////


		////color switcher//////////////
		$('#color-switcher').on('click', '.toggle-button', function (event) {
			var $target = $(event.currentTarget),
			    $parent = $target.parent('.color-switcher-nav');

			$parent.toggleClass('active');
		});

		////color switcher//////////////
	}); // end ready
})(jQuery);