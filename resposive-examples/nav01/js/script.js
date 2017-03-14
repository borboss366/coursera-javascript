
$(function () {
  var hide = function() {
    $("#menu-id").addClass("not-show");
  };

  var show = function() {
    $("#menu-id").removeClass("not-show");
  };

  var isShown = function() {
    return !$("#menu-id").hasClass("not-show"); 
  }

  $("#toggle-nav-button-id").click(function(event) {
    if (isShown()) {
      hide();
    } else {
      show();
    }
  });

  $("#menu-id").mouseleave(function(){
    hide();
  });
});

