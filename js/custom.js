
$(window).resize(function() {
    if ($(window).innerWidth() <= 650) {
        $(".phone-icon").addClass('js-phone-icon');
        $(".phone-list").addClass('js-phone-cont');
    }else{
        $(".phone-icon").removeClass('js-phone-icon');
        $(".phone-list").removeClass('js-phone-cont');
    }
});

$(function() {


    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        $('body').addClass('ios');
    } ;

    setTimeout(function() {
        $('body').removeClass('loaded');
    }, 1000);
    //

    $('body').addClass('js');
    function viewport() {
        var e = window,
        a = 'inner';
        if (!('innerWidth' in window)) {
            a = 'client';
            e = document.documentElement || document.body;
        }
        return {
            width: e[a + 'Width'],
            height: e[a + 'Height']
        }
    }

    $('.js-button-nav').click(function(){
        $(this).toggleClass('active'), 
        $('.js-header-drop').slideToggle(); 
        if ($(window).innerWidth() <= 650) {
            $('.js-phone-cont, .js-select-drop').slideUp();
        }
        $('.js-select-drop').slideUp();
        $('.js-select-title').removeClass('active');
        if ($(this).is('.active')) {disabledScroll()} else {anabledScroll()}
            return false;
    });

// UI
// price
$( function() {
    if ($('#slider-area').length) {
        $( "#slider-price" ).slider({

          range: true,
          min: 14500,
          max: 112150,
          values: [ 14500, 112150 ],
          slide: function( event, ui ) {
            $( ".js-price_min" ).val( ui.values[ 0 ] );
            $( ".js-price_max" ).val( ui.values[ 1 ] );

        }
    });
        
        $("#slider-price span:first").append('<span class="ui-slider-handle__value"><input type="text" class="js-price_min price_min" ></span>');
        $("#slider-price span:last").append('<span class="ui-slider-handle__value"><input type="text" class="js-price_max price_max" ></span>');
        $( ".js-price_min" ).val( "14500" );
        $( ".js-price_max" ).val( "112150" );
    };
} );
//price

//area
$( function() {


    if ($('#slider-area').length) {
        $( "#slider-area" ).slider({

          range: true,
          min: 47,
          max: 229,
          values: [ 47, 229 ],
          slide: function( event, ui ) {
            $( ".js-area_min" ).val( ui.values[ 0 ] );
            $( ".js-area_max" ).val( ui.values[ 1 ] );

        }
    });

        $("#slider-area span:first").append('<span class="ui-slider-handle__value"><input type="text" class="js-area_min area_min" ></span>');
        $("#slider-area span:last").append('<span class="ui-slider-handle__value"><input type="text" class="js-area_max area_max" ></span>');
        $( ".js-area_min" ).val( "47" );
        $( ".js-area_max" ).val( "229" );

    };
} );
//area
// UI


$('.js-select-title').click(function(){
    $(this).toggleClass('active'), 
    $('.js-select-drop').slideToggle();
    if ($(window).innerWidth() <= 650) { 
        $('.js-phone-cont').slideUp();
    }
    $('.js-header-drop').slideUp();
    $('.js-button-nav').removeClass('active');
    return false;
});

if ($('.js-main-slider').length) {
    $('.js-main-slider').slick({
        dots: true,
        speed: 1000,
        autoplay: false,
        autoplaySpeed: 6000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true
    });
};

if ($('.js-card-slider').length) {
    $('.js-card-slider').slick({
        dots: false,
        speed: 100,
            // autoplay: true,
            autoplaySpeed: 6000,
            slidesToShow: 3,
            slidesToScroll: 1,
            slidesPerRow: 4,
            rows: 1,
            arrows: true,
            prevArrow: '<button type="button" class="slick-prev"><i class="icon-arrow-left"></i>Назад</button>',
            nextArrow: '<button type="button" class="slick-next">Вперед<i class="icon-arrow-right"></i></button>',
            responsive: [{
                breakpoint: 1280,
                settings: {
                    slidesToShow: 2
                }
            }, {
                breakpoint: 1041,
                settings: {
                    slidesToShow: 3
                }
            }, {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2
                }
            },{
                breakpoint: 650,
                settings: {
                    slidesToShow: 1
                }
            }]
        });
}

$("#input-file").change(function(){
    var filename = $(this).val().replace(/.*\\/, "");
    $("#input-file-fake").val(filename);
});

$('.js-input-icon').click(function(){
    $("#input-file").trigger('click');
});

if ($('.js-examples-slider').length) {
    $('.js-examples-slider').slick({
        dots: false,
        speed: 100,
        autoplaySpeed: 6000,
        slidesToShow: 4,
        slidesToScroll: 1,
        slidesPerRow: 4,
        rows: 1,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="icon-arrow-left"></i>Назад</button>',
        nextArrow: '<button type="button" class="slick-next">Вперед<i class="icon-arrow-right"></i></button>',
        responsive: [{
            breakpoint: 1280,
            settings: {
                slidesToShow: 3,
            }
        }, {
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
            }
        }, {
            breakpoint: 651,
            settings: {
                slidesToShow: 2,
            }
        },{
            breakpoint: 450,
            settings: {
                slidesToShow: 1,
            }
        }]
    });
}

$(".js-arrow-down").on("click", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
    top = $(id).offset().top - $('header').outerHeight();

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });

    // mobile phone
    if ($(window).innerWidth() <= 650) {
        $(".phone-icon").addClass('js-phone-icon');
        $(".phone-list").addClass('js-phone-cont');
    }else{
        $(".phone-icon").removeClass('js-phone-icon');
        $(".phone-list").removeClass('js-phone-cont');
    };

    $(".js-phone-icon").on("click", function (event) {
        if ($(window).innerWidth() <= 650) {
            $('.js-header-drop, .js-select-drop').slideUp();
            $('.js-select-title').removeClass('active');
            $('.js-button-nav').removeClass('active');
            $('.js-phone-cont').slideToggle();
        }       
    });
    // mobile phone end

    // header-drop
    if ($('.header-drop').length) {
        $(".header-drop").mCustomScrollbar();
    }


    // mask phone
    if ($('.mask').length) {
        $('.mask').mask('+7 ( 999 )  999 99 99');
    }

    // btn-hover
    $('.btn-hover').hover(function(){
        $(this).addClass('mouse-on');
        $(this).removeClass('mouse-off');
    },function(){
        $(this).addClass('mouse-off');
        $(this).removeClass('mouse-on');
    });

    // styler
    if ($('.styler').length) {
        $('.styler').styler();
    }
    if ($('.calculation-field__input select').length) {
        $('.calculation-field__input select').styler();
    }
    if ($('.list-check__label input').length) {
        $('.list-check__label input').styler();
    }

    $('.js-catalog-aside__title').click(function(){
        $(this).toggleClass("active");
        $(this).parent().find('.js-slider-ui-togle').slideToggle(500); 
    });
    $('.js-options-form__title').click(function(){
        $(this).toggleClass("active");
        $(this).parent().find('.js-slider-ui-togle').slideToggle(500); 
    });

//review__more
$('.js-review__more').click(function(){
    $(this).css({'display':'none'});
    $('.review__item_hidden').addClass("active"); 
});

//list-check scroll
if ($('.js-list-check_scroll').length) {
    $(".js-list-check_scroll").mCustomScrollbar({
        theme:"dark"
    });
}

if ($('.js-modal-slider').length) {
    $('.js-modal-slider').slick({
        dots: false,
        speed: 1000,
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="arrow-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="arrow-right"></i></button>',
    });
} 
// tab-equipment click mob
$('.js-tab-equipment__title').click(function(){
        // $(this).css({'display':'none'});
        $(this).parents('.tab-equipment__item').find('.tab-equipment__sub-list').slideToggle(500);
    });

$('.js-tab-equipment__sub-item').click(function(){
    $(this).toggleClass('active');
    $(this).siblings().slideToggle(500);
});

/* fix scroll2 */
if($('#question2').length) {
    $(function () {
        var a = document.querySelector('#question2'),
        b = null,
        P = 0;
        window.addEventListener('scroll', Ascroll, false);
        document.body.addEventListener('scroll', Ascroll, false);
        var h = 0,
        w =0,
        wh = 0;
        setTimeout(function() {
            Ascroll();
        }, 300);

        function Ascroll() {
            if (b == null) {
                var Sa = getComputedStyle(a, ''),
                s = '';
                for (var i = 0; i < Sa.length; i++) {
                    if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
                        s += Sa[i] + ': ' + Sa.getPropertyValue(Sa[i]) + '; '
                    }
                }
                b = document.createElement('div');
                b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
                a.insertBefore(b, a.firstChild);
                var l = a.childNodes.length;
                for (var i = 1; i < l; i++) {
                    b.appendChild(a.childNodes[1]);
                }
                a.style.height = b.getBoundingClientRect().height + 'px';
                a.style.padding = '0';
                a.style.border = '0';
            }
            var Ra = a.getBoundingClientRect(),
            R = Math.round(Ra.top + b.getBoundingClientRect().height - document.querySelector('#scroll_question2').getBoundingClientRect().bottom);
            if ((Ra.top-90 + wh - P) <= 0) {
                if ((Ra.top +wh - P) <= R) {
                    b.className = 'stop';
                    b.style.top = -R + 'px';
                } else {
                    b.className = 'sticky';
                    b.style.top = P+100 + 'px';
                }
            } else {
                b.className = '';
                b.style.top = '';
            }
            window.addEventListener('resize', function () {
                a.children[0].style.width = getComputedStyle(a, '').width
            }, false);
        };
        window.addEventListener('load', Ascroll, false);
    });
};
// fancybox exhibition
if ($('.js-gall__linck').length) {
    $('.js-gall__linck').fancybox({
        margin: 15,
        padding: 0, 
        scroling: 'no',
    });
};

// replace img news-action
$(function() {
    $('.news-action__img-link, .js-replace-img, .card-list__img-holder_catalog').each(function(){
        var srcImg = $(this).find('img').attr('src');
        $(this).css({'background-image':'url('+srcImg+')'});
            // return false;
        });
});

    // fancybox
    if ($('.fancy').length) {
        $('.fancy').fancybox({
            margin: 15,
            padding: 0, 
            scroling: 'no',
            beforeShow: function() {
                $("html").addClass("card-popup"); 

                if($('.fancybox-wrap').find('.js-modal-slider').length){
                    $('.fancybox-wrap').find('.js-modal-slider').slick('setPosition');
                }
                $('html').addClass('fancybox-margin fancybox-lock');
            },
            beforeClose: function() {
                $('html').removeClass('fancybox-margin fancybox-lock card-popup');

            }
        });
    }



    // modal card
    if ($('.js-card-img-slider').length) {
        $('.js-card-img-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            prevArrow: '<button type="button" class="slick-prev"><i class="arrow-left"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="arrow-right"></i></button>',
            fade: true,
            dots: false,
            speed:800,
            asNavFor: '.js-card-slider-nav'
        });
    }
    if ($('.js-card-slider-nav').length) {
        $('.js-card-slider-nav').slick({
            slidesToShow: 6,
            slidesToScroll: 2,
            asNavFor: '.js-card-img-slider',
            arrows: true,
            prevArrow: '<button type="button" class="slick-prev"><i class="arrow-left"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="arrow-right"></i></button>',
            dots: false,
            focusOnSelect: true,
            infinite: true,
            speed: 500,
            responsive: [{
                breakpoint: 1050,
                settings: {
                    slidesToShow: 5,
                }
            }, {
                breakpoint: 991,
                settings: {
                    slidesToShow: 7,
                }
            }, {
                breakpoint: 700,
                settings: {
                    slidesToShow: 6,
                }
            }, {
                breakpoint: 550,
                settings: {
                    slidesToShow: 5,
                }
            }, {
                breakpoint: 450,
                settings: {
                    slidesToShow: 4,
                }
            }, {
                breakpoint: 380,
                settings: {
                    slidesToShow: 3,
                }
            }]
        });
    }

// card-product-slider
if ($('.js-card-product-img-slider').length) {
    $('.js-card-product-img-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="arrow-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="arrow-right"></i></button>',
        fade: true,
        dots: false,
        speed:800,
        asNavFor: '.js-card-product-slider-nav'
    });
}

if ($('.js-card-product-slider-nav').length) {
    $('.js-card-product-slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.js-card-product-img-slider',
        arrows: false,
            dots: false,
            focusOnSelect: true,
            infinite: true,
            speed: 500,
        });
}

$('.js-modal-card').fancybox({
    margin: 15,
    padding: 0,
    padding: 0,
    openMethod: 'dropIn',
    closeMethod: 'dropOut',
    scrolling: 'no',
    fitToView: true,
    beforeShow: function() {
        $("html").addClass("card-popup card-popup-2"); 
        $('html').addClass('fancybox-margin fancybox-lock');

        if($('.fancybox-wrap').find('.js-card-img-slider').length){
            $('.fancybox-wrap').find('.js-card-img-slider, .js-card-slider-nav').slick('setPosition');
        }
        disabledScroll()
    },
    afterShow: function() {

    },
    beforeClose: function() {
        $('html').removeClass('fancybox-margin fancybox-lock card-popup');

    },
    helpers: {
        overlay: {
            locked: true
        }
    } ,

    afterClose     : function(){
        anabledScroll()
    }
});
var y_offsetWhenScrollDisabled;
$(window).scroll(function(){
    y_offsetWhenScrollDisabled = $(window).scrollTop();
})
function disabledScroll() {
    offset = y_offsetWhenScrollDisabled;
    $('body').addClass('scrollDisabled');
    $('html').css('margin-top', -y_offsetWhenScrollDisabled);
}

function anabledScroll() {
    $('body').removeClass('scrollDisabled');
    $('html').css('margin-top', 0);
    $('html, body').animate({
        scrollTop: offset
    }, 0);
}


    // price
    $('.js-price-title-2').click(function(){
        $(this).addClass('active');
        $('.js-price-title-1').removeClass('active');
        $('.js-price-1').removeClass('active');
        $('.js-price-2').addClass('active');
        return false;
    })
    $('.js-price-title-1').click(function(){
        $(this).addClass('active');
        $('.js-price-title-2').removeClass('active');
        $('.js-price-2').removeClass('active');
        $('.js-price-1').addClass('active');
        return false;
    })

});


// fixed sidedar arrow

$(window).scroll(function() {
    if ($(window).scrollTop() > $('.section-main-carousel').height() ) {
        $('.arrow-down').addClass("hidden");
    } else {
        $('.arrow-down').removeClass("hidden");
    };
});

//tabs contacts
$('.contacts-info__item a').click(function(){
    $('.contacts-info__list').addClass('lurk');
    var id = $(this).attr('href');
    $(id).addClass('active');
        return false;
    });
$('.contacts-subinfo__button').click(function(){
    $('.contacts-info__list').removeClass('lurk');
    $('.contacts-subinfo').removeClass('active');
        return false;
    });
//map

if ($('#map').length) {
    ymaps.ready(init);
    var myMap, place1, place2,  place3,  place4,  place5;
    function init () {

       myMap = new ymaps.Map('map', {
        center: [53.87464607, 27.59164600], 
        zoom: 15,
        controls: [] // delete all controls
    });
 //myMap.controls.add('zoomControl'); // add zoom control
 myMap.behaviors.disable('scrollZoom');


 place1 = new ymaps.Placemark([53.87464607, 27.59164600], { 
    content: '', 
    balloonContent:'г. Минск, ул. Ванеева 29 Б',
    center: [53.87464607, 27.58164600], 
}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/map_mark.png',
    iconImageSize: [23, 33],
    iconImageOffset: [-11.5, -30],
});

 place2 = new ymaps.Placemark([52.06359957, 23.76057400], { 
    content: '', 
    balloonContent:'г. Брест, ул. Карьерная 12, кв.1В'
}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/map_mark.png',
    iconImageSize: [23, 33],
    iconImageOffset: [-11.5, -30]
});

 place3 = new ymaps.Placemark([52.40725907, 30.91572700], { 
    content: '', 
    balloonContent:'г. Гомель, ул. Косарева 18'
}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/map_mark.png',
    iconImageSize: [23, 33],
    iconImageOffset: [-11.5, -30]
});

 place4 = new ymaps.Placemark([53.67220657, 23.86317050], { 
    content: '', 
    balloonContent:'г. Гродно, пр-т Космонавтов 81'
}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/map_mark.png',
    iconImageSize: [23, 33],
    iconImageOffset: [-11.5, -30]
});

 place5 = new ymaps.Placemark([53.88157093, 30.35010700], { 
    content: '', 
    balloonContent:'г. Могилев, ул. Грабовская 43'
}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/map_mark.png',
    iconImageSize: [23, 33],
    iconImageOffset: [-11.5, -30]
});

 myMap.geoObjects.add(place1);
 myMap.geoObjects.add(place2);
 myMap.geoObjects.add(place3);
 myMap.geoObjects.add(place4);
 myMap.geoObjects.add(place5);



 $('#place1').click(function(){
    myMap.panTo(place1.geometry.getCoordinates());
    return false;
});
 $('#place2').click(function(){
    myMap.panTo(place2.geometry.getCoordinates());
    return false;
});
 $("#place3").click(function(){
    myMap.panTo(place3.geometry.getCoordinates());
});
 $("#place4").click(function(){
    myMap.panTo(place4.geometry.getCoordinates());
});
 $("#place5").click(function(){
    myMap.panTo(place5.geometry.getCoordinates());
});
}
}
//tabs card-product
$('.js-nav-tab-list__link').click(function(){
    $(this).parents('.tab-wrap').find('.tab-cont').addClass('hide');
    $(this).parent().siblings().removeClass('active title-decor');
    var id = $(this).attr('href');
    $(id).removeClass('hide');
    $(this).parent().addClass('active title-decor');
    return false;
});

// tab card-product layout replece src
$(function() {
    $('.tab-layout .js-tab-img-min__item').click(function(){
        var srcImg_layout = $(this).find('img').attr('src');
        $(this).addClass("active").siblings().removeClass("active");
        $('.tab-layout .tab-img-big img').attr('src', srcImg_layout); 
        var titleText=$(this).attr('data-text');
        $('.tab-img-big__title').text(titleText);
    });

});

// tab card-product layout, video  replece img
$(function() {
    $('.tab-facade .js-tab-img-min__item, .gall__img-cont').each(function(){
        var srcImg = $(this).find('img').attr('src');
        $(this).css({'background-image':'url('+srcImg+')'});
            // return false;
        });
});
// tab card-product facade replece src
$(function() {
    $('.tab-facade .js-tab-img-min__item').click(function(){
        var srcImg_facade = $(this).find('img').attr('src');
        $(this).addClass("active").siblings().removeClass("active");
        $('.tab-facade .tab-img-big img').attr('src', srcImg_facade); 
    });
})
// modal-card-prod replece src
$(function() {
    $('.js-modal-card-prod__img-small-item').click(function(){
        var srcImg_modal = $(this).find('img').attr('src');
        $(this).addClass("active").siblings().removeClass("active");
        $('.modal-card-prod__img-big img').attr('src', srcImg_modal); 
    });

})


// tabs card-product end

var handler = function(){


    // $('.mCSB_container .list-check__item:first .list-check .jq-radio').addClass('checked');

    // tabs
    if ($(window).innerWidth() >= 769) {
        function createCookie(name,value,days) {
            if (days) {
                var date = new Date();
                date.setTime(date.getTime()+(days*24*60*60*1000));
                var expires = "; expires="+date.toGMTString();
            }
            else var expires = "";
            document.cookie = name+"="+value+expires+"; path=/";
        }
        function readCookie(name) {
            var nameEQ = name + "=";
            var ca = document.cookie.split(';');
            for(var i=0;i < ca.length;i++) {
                var c = ca[i];
                while (c.charAt(0)==' ') c = c.substring(1,c.length);
                if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
            }
            return null;
        }
        function eraseCookie(name) {
            createCookie(name,"",-1);
        }
        $('.tabs-caption-list').each(function(i) {
            var cookie = readCookie('tabCookie' + i);
            if (cookie) {
                $(this).find('li').removeClass('active').eq(cookie).addClass('active')
                .closest('div.tabs').find('div.tabs-content').removeClass('active').eq(cookie).addClass('active');
            }
        });

        $('.tabs-caption-list').on('click', 'li:not(.active)', function() {
            $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.tabs').find('div.tabs-content').removeClass('active').eq($(this).index()).addClass('active');
            var ulIndex = $('ul.tabs-caption-list').index($(this).parents('ul.tabs-caption-list'));
            eraseCookie('tabCookie' + ulIndex);
            createCookie('tabCookie' + ulIndex, $(this).index(), 365);
        });
    }

        // tabs mobile 
        if ($(window).innerWidth() <= 768) {

            $('.tabs-content').hide(); 

            //On Click
            $('.tabs-content__title').click(function(){
                if( $(this).next().is(':hidden') ) { //If immediate next container is closed...
                    $('.tabs-content__title').removeClass('active').next().slideUp(); //Remove all .acc_trigger classes and slide up the immediate next container
                    $(this).toggleClass('active').next().slideDown(); //Add .acc_trigger class to clicked trigger and slide down the immediate next container
                }
            });
        }
        // tabs mobile end 
        



    //tabs end 
    
    var height_footer = $('footer').height();   
    var height_header = $('header').height();   
    $('.main-slider__item-holder').css({'padding-top':height_header});
    $('.header-drop').css({'padding-top':height_header + 10});

}

$(window).bind('load', handler);
$(window).bind('resize', handler);

// fixed sidebar
(function(){
    var a = document.querySelector('#aside1'), b = null, P = 0;
    window.addEventListener('scroll', Ascroll, false);
    document.body.addEventListener('scroll', Ascroll, false);
    function Ascroll() {
      if (b == null) {
        var Sa = getComputedStyle(a, ''), s = '';
        for (var i = 0; i < Sa.length; i++) {
          if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
            s += Sa[i] + ': ' +Sa.getPropertyValue(Sa[i]) + '; '
        }
    }
    b = document.createElement('div');
    b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
    a.insertBefore(b, a.firstChild);
    var l = a.childNodes.length;
    for (var i = 1; i < l; i++) {
      b.appendChild(a.childNodes[1]);
  }
  a.style.height = b.getBoundingClientRect().height + 'px';
  a.style.padding = '0';
  a.style.border = '0';
}
var Ra = a.getBoundingClientRect(),
          R = Math.round(Ra.top + b.getBoundingClientRect().height - document.querySelector('#article').getBoundingClientRect().bottom);  // селектор блока, при достижении нижнего края которого нужно открепить прилипающий элемент
          if ((Ra.top - P) <= 0) {
            if ((Ra.top - P) <= R) {
              b.className = 'stop';
              b.style.top = - R +'px';
          } else {
              b.className = 'sticky';
              b.style.top = P + 'px';
          }
      } else {
        b.className = '';
        b.style.top = '';
    }
    window.addEventListener('resize', function() {
        a.children[0].style.width = getComputedStyle(a, '').width
    }, false);
}
})()
// fixed sidebar end