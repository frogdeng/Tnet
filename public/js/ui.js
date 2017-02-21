$(document).ready(function(){
  $('.slider1').bxSlider({
    slideWidth: 300,
    minSlides: 2,
    maxSlides: 2,
    slideMargin: 10
  });

  $('.slider2').bxSlider({
    slideWidth: 230,
    minSlides: 2,
    maxSlides: 5,
    moveSlides: 1,
    slideMargin: 10
  });

  $(".hamburg").click(function(){
     $('.aside').delay(200).toggleClass("hamburg-open");
     $(this).delay(200).toggleClass("active");
    });


  $(".login_info_btn").click(function(){
		 $(this).delay(200).toggleClass("login_active");
      $('.login_info_content').toggleClass("login_info_content_go");

  	});






});



