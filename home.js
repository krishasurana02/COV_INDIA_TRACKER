$.getJSON("https://api.covid19india.org/data.json",function(data){
		var state_data = data.statewise[0];
		var confirmedh3 = document.getElementById("confirmed");
		confirmedh3.innerText = parseInt(state_data.confirmed).toLocaleString();
		var activeh3 = document.getElementById("active");
		activeh3.innerText = parseInt(state_data.active).toLocaleString();
		var recoveredh3 = document.getElementById("recovered");
		recoveredh3.innerText = parseInt(state_data.recovered).toLocaleString();
		var deathsh3 = document.getElementById("deaths");
		deathsh3.innerText = parseInt(state_data.deaths).toLocaleString();
});