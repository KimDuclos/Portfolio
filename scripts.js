$(document).ready(function(){
    $(window).scroll(function(){
        $(".titleCard").css("opacity", 1 - $(window).scrollTop() / ($('.titleCard').height() / 2));
    });
});