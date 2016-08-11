$(document).ready(function() {
  $("form").submit(function(event){
    if(parseInt($("input#age").val())>= 18){
      $(".adult").show();
    } else {
      $(".minor").show();
    }
    event.preventDefault();
    $("#votingAge").hide();
  });
});
