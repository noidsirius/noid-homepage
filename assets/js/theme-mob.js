$(document).ready(function(){

    window.onresize = function(event) {
          if (window.outerWidth > 768) {
            document.location = "../index.html";
          }
    };
});