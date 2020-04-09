/************************        For NavBar        ***************************/
export const toggleNav = (burger, nav) => {
  // Selection of HTML objects
  // const burger = document.querySelector('.burger i');
  // const nav = document.querySelector('.nav');
  burger.classList.toggle('fa-bars');
  burger.classList.toggle('fa-times');
  nav.classList.toggle('nav-active');
}

export default toggleNav;
// Calling the function after click event occurs
// burger.addEventListener('click', function () {
//   toggleNav();
// });