$(document).ready(function(){
    //stiky manue
    $(window).on('scroll',function() {    
        
        var scroll = $(window).scrollTop();
        if (scroll <40) {
         $(".sticky").removeClass("scroll-header");
        }else{
         $(".sticky").addClass("scroll-header");
        }
       }); 


    //protfolio & skill
    var mixer=mixitup('.contaner');
});
function openNav(){
    document.querySelector('#myNav').style.width="100%";
}
function colseNav(){
    document.querySelector('#myNav').style.width="0%";
}