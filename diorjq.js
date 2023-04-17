$(document).ready(function(){

$('.sub-button').click(function(){
    var tabid = $(this).attr('data-tab');

    $('.sub-navs-bar').removeClass('active');
    $('.sub-button').removeClass('active');
    $('.sub-navs').removeClass('active');

    $('.sub-navs-bar').slideDown('active');
    $(this).addClass('active');
    $("#"+tabid).addClass('active');
});

$('.sub-navs-bar').mouseleave(function(){
    $('.sub-navs-bar').slideUp('active');
    $(this).removeClass('active');
    $("#"+tabid).removeClass('active');

});



}); //end

