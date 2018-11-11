$(document).ready(function(){
  $("#menu-btn").click(function(){
    $(".navItem").slideToggle("slow");
  })

  $(window).on('resize', function(){
    if($(window).width() >= 600){
      $(".navItem").show();
    }
  })


  // Navigation Scrolls

  $("#newsNav").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#section2").offset().top
    }, 1000);
  });

  $("#philosophyNav").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#section3").offset().top
    }, 1000);
  });

  $("#engageNav").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#section5").offset().top
    }, 2000);
  });

  $("#contactNav").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#section7").offset().top
    }, 2500);
  });

})
