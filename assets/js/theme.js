$(document).ready(function(){

    $( ".page-box" ).click(function() {
      if( $(this).hasClass("page-box-active"))
      {

      }
      else
      {
            var active_div = $(this).parent().find(".page-box-active");
            active_div.toggleClass('col-md-9 col-md-1').removeClass("page-box-active");
            active_div.find("#body").hide();
            active_div.find("#title").show();
            $(this).toggleClass('col-md-1 col-md-9').addClass("page-box-active");
            $(this).find("#title").hide();
            $(this).find("#body").show();
        
      }
    });

});