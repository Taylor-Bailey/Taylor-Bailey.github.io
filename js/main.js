// function hover(element) {
//     element.setAttribute('src', '../images/twb-03.png');
// }
// function unhover(element) {
//     element.setAttribute('src', '../images/twb-0.png');
// }

window.onscroll = function() {myFunction()};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }