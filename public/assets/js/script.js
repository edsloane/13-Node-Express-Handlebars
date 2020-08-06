$(".devour").on("click", function () {
  var id = $(this).attr("data-id");

  $.ajax("/api/burgers/" + id, {
    type: "PUT",
  }).then(function () {});
  location.reload();
});

$("#submit").on("click", function (event) {
  event.preventDefault();

  var newBurger = {
    burger_name: $("#burgerName").val().trim(),
  };

  if (newBurger.burger_name.length === 0) {
    $("#getCodeModal").on("shown.bs.modal", function () {
      $("#getCodeModal").trigger("focus");
    });
    $("#getCodeModal").modal("show");
    return false;
  } else {

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function () {});
    location.reload();
  }
});
