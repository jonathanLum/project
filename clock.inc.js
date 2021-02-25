document.addEventListener('DOMContentLoaded', bindButtons);

function bindButtons()
{
	document.getElementById('submit').addEventListener('click', function(event){
		var req = new XMLHttpRequest();
		var city = document.getElementById('city').value;
		var zip = document.getElementById('zip').value;
		var country = document.getElementById('country').value;
        if(document.getElementById("useZip").checked)
        {
            req.open("GET", "http://api.openweathermap.org/data/2.5/weather?zip=" + zip + "," + country + "&appid=" + apiKey, true);
        }  
        else
        {
            req.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=" + city + "," + country + "&appid=" + apiKey, true);
        }
		req.addEventListener('load',function()
		{
			if(req.status >= 200 && req.status < 400)
			{
				var response = JSON.parse(req.responseText);
				console.log(response);
				var msg = "City: " + response.name + "<br>" + "Country: " + response.sys.country + "<br>" + "Temp: " + response.main.temp + "<br>" + "Wind Speed: " + response.wind.speed + "<br>";
				document.getElementById('form1Disp').innerHTML = msg;
			}
		});
		req.send(null);
		event.preventDefault();
	});
	
	document.getElementById('postSubmit').addEventListener('click', function(event){
		var req = new XMLHttpRequest();
		var payload = {httpBin:document.getElementById('tosend').value};
		req.open("POST", "http://httpbin.org/post", true);
		req.setRequestHeader('Content-Type', 'application/json');
		req.addEventListener('load',function()
		{
			if(req.status >= 200 && req.status < 400)
			{
				var response = JSON.parse(req.responseText);
				console.log(response);
				var response = JSON.parse(response.data);
				var msg = "City: ";
				document.getElementById('form2Disp').textContent = response.httpBin;
			}
		});
		req.send(JSON.stringify(payload));
		event.preventDefault();
	});
	
}








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
