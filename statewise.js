//State-wise data
//Total cases data i=0

 var state_name = []

$.getJSON("https://api.covid19india.org/data.json",function(data){
	var table = document.getElementById("myTableData");
 
    		for (var i=1;i<38;i++)
		{	
			var state_data = data.statewise[i];
			state_name[i] = state_data.state;
			// console.log(state_name[i], " : ", state_data.confirmed);
			var rowCount = table.rows.length;
			var row = table.insertRow(rowCount);
			var cell1 = row.insertCell(0);   		
	   		var a = document.createElement('a');
			a.href = 'district.html?state='+state_name[i];
			a.setAttribute("class","sourceText");
			a.innerHTML = '<i class="fas fa-angle-double-right fa-lg"></i>';
			cell1.innerHTML += state_name[i] + "\t";
			cell1.appendChild(a);
	   		row.insertCell(1).innerHTML= parseInt(state_data.confirmed).toLocaleString();
	   		row.insertCell(2).innerHTML= parseInt(state_data.active).toLocaleString();
	   		row.insertCell(3).innerHTML= parseInt(state_data.recovered).toLocaleString();
	   		row.insertCell(4).innerHTML= parseInt(state_data.deaths).toLocaleString();
		}
		var rowCount = table.rows.length;
		var row = table.insertRow(rowCount);
		var state_data = data.statewise[0];
		state_name[0] = state_data.state;
		var cell1 = row.insertCell(0);   	
		cell1.innerHTML += state_name[0] + "&nbsp";
		row.insertCell(1).innerHTML= parseInt(state_data.confirmed).toLocaleString();
   		row.insertCell(2).innerHTML= parseInt(state_data.active).toLocaleString();
   		row.insertCell(3).innerHTML= parseInt(state_data.recovered).toLocaleString();
   		row.insertCell(4).innerHTML= parseInt(state_data.deaths).toLocaleString();

		
	// });
});
