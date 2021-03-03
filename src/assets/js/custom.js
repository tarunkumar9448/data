new WOW().init();

//scroll add and remove class js
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 10) {
        $("body").addClass("scrolled");
    } else {
        $("body").removeClass("scrolled");
    }
});


//nav bar icon toggle
$("#hamburger").click(function () {
    $(this).toggleClass('open');
    $('.navigation').toggleClass('open');
})


//owlCarousel client js
$('#clientcarousel').owlCarousel({
    loop: false,
    margin: 30,
    nav: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 2
        },
        768: {
            items: 3
        },
        1200: {
            items: 5
        }
    }
});


//owlCarousel whyUs js
$('#whyUsCarousel').owlCarousel({
    loop: false,
    margin: 30,
    nav: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1200: {
            items: 3
        }
    }
});

//owlCarousel whyUs js
$('#qualitydata').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 3
        },
        1200: {
            loop: false,
            items: 4
        }
    }
});

//owlCarousel price js
$('#priceCarousel').owlCarousel({
    loop: false,
    margin: 30,
    nav: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1200: {
            items: 3
        }
    }
});


//owlCarousel whyUs js
$('#testimonialCarousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    items: 1
});


//faq tab js
$('.faq-header').on('click', function () {
    $('.faq-header').removeClass('active');
    $(this).addClass('active');
});





//tab js
$(".tab").click(function () {
    $(".tab-detail").hide();
    var data = $(this).attr('data');
    $('#' + data).show();
    $(".tab").removeClass('active');
    $(this).addClass('active');
})


//modal-open js
$(".modal-open").click(function () {
    $(".modal").hide();
    $('body').addClass('modal-open');
    var data = $(this).attr('modal-data');
    $('#' + data).addClass('show');
    $('#' + data).show();
    $('body').addClass('modal-open');
})


//modal-open js
$(".modal-close").click(function () {
    $(".modal").hide();
    $(".modal").removeClass('show');
    $('body').removeClass('modal-open');
})


//click dropdown js
$(".dropdown").click(function () {
    var data = $(this).attr('drop');
    $('#' + data).toggleClass('active');
})


//modal open and close js
$(".modal-open").click(function () {
    $(".modal-container").hide();
    var modal = $(this).attr('modal');
    $('#' + modal).show();
});


$(".modal-close").click(function () {
    $(".modal-container").hide();
    $('.modal-input').val('');
    var ifr = document.getElementsByName('video')[0];
    ifr.src = ifr.src;
});
