



var date_date = []
$.getJSON("https://api.covid19india.org/data.json",function(data){
	var table = document.getElementById("myTableData2");
	var length= data.cases_time_series.length;
	 for (var i=length-1;i>=0;i--)
	 {

				var date_data = data.cases_time_series[i];
				date_date[i] = date_data.date;
				var rowCount = table.rows.length;
				var row = table.insertRow(rowCount);
	 

		 		row.insertCell(0).innerHTML= date_date[i];
		   		row.insertCell(1).innerHTML= parseInt(date_data.totalconfirmed).toLocaleString() ;
		   		row.insertCell(2).innerHTML= parseInt(date_data.totalrecovered).toLocaleString();
		   		row.insertCell(3).innerHTML= parseInt(date_data.totaldeceased).toLocaleString();
	 

		}

});