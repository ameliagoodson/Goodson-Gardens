const button = document.querySelector('.btn-hamburger')
const navmenu = document.querySelector('.navbar-hidden')

button.addEventListener('click', () => {
    navmenu.classList.toggle('hide')
})

// Contact form validation
$(document).ready(function () {
  $(".btn-contact").click(function (event) {
    event.preventDefault();

    var name = $(".name").val();
    var email = $(".email").val();
    var message = $(".message").val();
    var status = $(".status");
    status.empty();

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