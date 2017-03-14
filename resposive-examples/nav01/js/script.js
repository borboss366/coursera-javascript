$(function () {
  var hide = function() {
    $("#menu-id").css("display", "none");
  };

  var show = function() {
    $("#menu-id").css("display", "block");
  };

  var isShown = function() {
    return $("#menu-id").css("display") === "block"; 
  }

  $("#toggle-nav-button-id").click(function(event) {
    console.log("I was clicked");
    
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
