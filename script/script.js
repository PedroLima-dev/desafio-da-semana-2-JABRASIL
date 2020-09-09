$(document).ready(function(){
  $("#nav-toggle").click(function(e){
    $('#nav-toggle').toggleClass('active');
    $('.header-collapse').toggleClass('active');
  });
});

$(document).ready(function(){
  $("li").click(function(e){
    $('#nav-toggle').toggleClass('active');
    $('.header-collapse').toggleClass('active');
  });
});