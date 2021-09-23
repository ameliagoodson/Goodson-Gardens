

$(document).ready(function () {

  // Contact form validation
  $(".btn-contact").click((event) => {
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
  // Mobile navigation toggle
    const buttonMenu = $('.btn-hamburger')
    const navMenu = $('.navbar-hidden')

    buttonMenu.click(() =>{
      navMenu.toggle()
    })
  // Back to top button
  const buttonTop = $('.btn-top')

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        buttonTop.addClass('show')
    }
    else buttonTop.removeClass('show')
    })

  buttonTop.click(function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0
  })
  
});