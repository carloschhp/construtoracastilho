$(document).ready(function() {
    $(".dropdown-item").on("click", function(e) {
      e.preventDefault();
      var target = $(this).data("target");
      $(target).fadeIn();
    });
  });
