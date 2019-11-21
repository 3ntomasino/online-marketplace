$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var nameInput = $("input#name").val();
    var addressInput = $("input#address").val();
    var foodInput = $("input:radio[name=food]:checked").val();

    $(".name").text(nameInput);
    $(".address").text(addressInput);
    $(".food").text(foodInput);

    $("#receipt").show();
    event.preventDefault();
  });
});
