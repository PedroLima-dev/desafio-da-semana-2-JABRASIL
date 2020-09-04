$(document).ready(function(){
    $("#nav-toggle").click(function(e){
        e.preventDefault();
      $('.header-collapse').toggleClass('active');
      $('#nav-toggle').toggleClass('active');
    });
  });