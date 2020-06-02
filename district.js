
// state-wise to district-wise
// parameter state passed
var queryString = decodeURIComponent(window.location.search);
queryString = queryString.substring(1);
var queries = queryString.split("=");

var stateH3 = document.getElementById('stateName');
stateH3.innerHTML += queries[1];

// district-wise data display
var state_name = queries[1];

$.getJSON("https://api.covid19india.org/state_district_wise.json",function(data){

	var table = document.getElementById("myTableData");
	var districts = data[state_name].districtData;
	var district_names = Object.keys(districts);
	var len = Object.keys(district_names).length;
	for(var i=0; i< len ; i++)
	{
		var district = districts[district_names[i]]
		var rowCount = table.rows.length;
		var row = table.insertRow(rowCount);
		row.insertCell(0).innerHTML= district_names[i];
		row.insertCell(1).innerHTML= parseInt(district.confirmed).toLocaleString();
   		row.insertCell(2).innerHTML= parseInt(district.active).toLocaleString();
   		row.insertCell(3).innerHTML= parseInt(district.recovered).toLocaleString();
   		row.insertCell(4).innerHTML= parseInt(district.deceased).toLocaleString();
	}
});