$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var firstNameInput = $("input#firstName").val();
    var lastNameInput = $("input#lastName").val();
    var addressInput = $("input#address").val();
    var cityInput = $("input#city").val();
    var stateInput = $("input#state").val();
    var zipCodeInput = $("input#zipCode").val();

    $(".firstName").text(firstNameInput);
    $(".lastName").text(lastNameInput);
    $(".address").text(addressInput);
    $(".city").text(cityInput);
    $(".state").text(stateInput);
    $(".zipCode").text(zipCodeInput);

    $("#letter").show();
    $(".formOne") .hide();

    event.preventDefault();
  });
});
