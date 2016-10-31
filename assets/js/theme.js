$(document).ready(function(){

    $( ".page-box" ).click(function() {
      if( $(this).hasClass("page-box-active"))
      {

      }
      else
      {
            var active_div = $(this).parent().find(".page-box-active");
            active_div.toggleClass('col-md-8 col-md-1').removeClass("page-box-active");
            active_div.toggleClass('col-sm-8 col-sm-1').removeClass("page-box-active");
            active_div.find("#body").hide();
            active_div.find("#title").show();
            $(this).toggleClass('col-md-1 col-md-8').addClass("page-box-active");
            $(this).toggleClass('col-sm-1 col-sm-8').addClass("page-box-active");
            $(this).find("#title").hide();
            $(this).find("#body").show();
        
      }
    });
    window.onresize = function(event) {
          if (window.outerWidth <= 768) {
            document.location = "mob/first_look.html";
          }
    };
});