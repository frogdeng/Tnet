$(document).ready(function(){
  $('.slider1').bxSlider({
    slideWidth: 300,
    minSlides: 2,
    maxSlides: 2,
    pager: false,
    slideMargin: 10
  });


  $('.slider2').bxSlider({
    slideWidth: 230,
    minSlides: 2,
    maxSlides: 5,
    moveSlides: 1,
    pager: false,
    slideMargin: 10
  });  


  $('.slider3').bxSlider({
    slideWidth: 1200,
    minSlides: 1,
    maxSlides: 1,
    moveSlides: 1,
    auto: true,
    controls: false


  });


  $(".hamburg").click(function(){
     $('.aside').delay(200).toggleClass("hamburg-open");
     $(this).delay(200).toggleClass("active");
    });


  $(".login_info_btn").click(function(){
     $(this).delay(200).toggleClass("login_active");
      $('.login_info_content').toggleClass("login_info_content_go");

    });


  $(".go_submenu").click(function(){
      $('.m-second_bg').addClass("second-open");
    });

  $(".second-goback").click(function(){
      $('.m-second_bg').removeClass("second-open");
      
    });


  $(".hamburg").click(function(){
      $('.m-second_bg').removeClass("second-open");

  	});






});



