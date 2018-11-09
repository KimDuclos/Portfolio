
$(document).ready(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 0) {
        $('.titleCard').css('opacity', 0.4);
      } else {
        $('.titleCard').css('opacity', 1);
      }
    });
  });