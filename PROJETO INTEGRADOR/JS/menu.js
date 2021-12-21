$('.btn').click(function(){
    $(this).toggleClass("click")
    $('.sidebar').toggleClass("show")
});
$('.feat-btn').click(function(event){
    event.preventDefault();
    $('nav ul .feat-show').toggleClass("show");
    $('nav ul .first').toggleClass("rotate");
});
$('.serv-btn').click(function(event){
    event.preventDefault();
    $('nav ul .serv-show').toggleClass("show1");
    $('nav ul .second').toggleClass("rotate");
})
$('nav ul li').click(function(){
    $(this).addClass("active").siblings().removeClass("active");
});