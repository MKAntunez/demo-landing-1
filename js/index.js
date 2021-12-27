// selector
var menu = document.querySelector('.hamburgesa');

// method
function toggleMenu (event) {
  this.classList.toggle('is-active');
  document.querySelector( ".collapse" ).classList.toggle("is_active");
  event.preventDefault();
}

// event
menu.addEventListener('click', toggleMenu, false);

//Solución con jQUery
/*$(document).ready(function(){
	$('.hamburger').click(function() {
		$('.hamburger').toggleClass('is-active');
		$('.menuresponsive').toggleClass('is-active');
		return false;
	});*/