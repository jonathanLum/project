document.addEventListener('DOMContentLoaded', bindButtons);

// FORM
function bindButtons()
{
	document.getElementById('submit').addEventListener('click', function(event){
		var req = new XMLHttpRequest();
		var payload = {httpBin:document.getElementById('tosend').value};
		req.open("POST", "http://httpbin.org/post", true);
		req.setRequestHeader('Content-Type', 'application/json');
		req.addEventListener('load',function()
		{
			if(req.status >= 200 && req.status < 400)
			{
				/*var response = JSON.parse(req.responseText);
				console.log(response);
				var response = JSON.parse(response.data);
				document.getElementById('response').textContent = response.httpBin;*/
				document.getElementById('response').textContent = "Submitted to " + document.getElementById('tosend').value + "!";
			}
		});
		req.send(JSON.stringify(payload));
		event.preventDefault();
	});
}


// SLIDESHOW
// Vars
var slideIndex = 1;
showSlides(slideIndex);
var change;

// Arrow buttons
function plusSlides(n) {
  clearTimeout(change);
  showSlides(slideIndex += n);
}
// Dots
function currentSlide(n) {
  clearTimeout(change);
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) 
  {slideIndex = 1}
  if (n < 1) 
  {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  
  change = setTimeout(function(){plusSlides(1)}, 2000);
}





// CLOCK
let c = document.querySelector(".clock");
let d = document.querySelector(".date");

function padding(n){
	return n.toString().padStart(2, "0");
}

setInterval(() => {
	let today = new Date();
	let hh = today.getHours();
	let mm = today.getMinutes();
	let ss = today.getSeconds();
	let date = today.toDateString();
	
	c.innerText = `${padding(hh)} : ${padding(mm)} : ${padding(ss)}`;
	d.innerText = date;
}, 1000);
