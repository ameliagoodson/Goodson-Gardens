$(document).ready(function () {
  $(".btn-contact").click(function (event) {
    event.preventDefault();
    console.log("clicking the button");

    var name = $(".name").val();
    var email = $(".email").val();
    var message = $(".message").val();
    var status = $(".status");
    status.empty();

    // Validation
    if (!name) {
      status.append("<div>Please enter a name</div>");
    }
    if (email.length < 5 || !email.includes("@") || !email.includes(".")) {
      status.append("<div>Email is not valid</div>");
    }
    if (!message || message.length < 10) {
      status.append("<div>Please enter a message</div>");
    }
  });
});
