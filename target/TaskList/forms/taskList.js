function startProcess(){

	console.log("Inside Start Process")
}

function submitUser(){

	var user = document.getElementById("user").value;


	console.log("User has been submitted : " + user);

	//Updating the table with values from REST Call
	$("#tableBody").detach();

	var URL = "http://localhost:8080/engine-rest/task?assignee=" + user;
	var data = new Array();
	data = ajaxFunction(URL, "json");
	console.log( data);
			
				  
				  var temp = "<tbody id=\"tableBody\">";
				  var description;
				  var taskId;
				  var tempUrl;
				  var hrefValue;

				  originalData = data;
			    for (var i = 0; i < data.length; i++) {

			         description = data[i].description;
			         taskId = data[i].id;
			         console.log("TASK ID " + taskId);

			         if( description != null ){
			         	tempUrl = description.match(/\bhttps?:\/\/\S+/gi);
			         	console.log(tempUrl);
			         	tempUrl += "?taskId=" + taskId;
			         	hrefValue = "<a href=\" " + tempUrl + "\">" + description + "</a>";

			         }else{

			         	hrefValue = "This is a null Value";
			         }

			        temp = temp + "<tr id='row" + i + " '> <th class='pt-3-half' id='customer_name" + i + "'>" + data[i].id +"</th> <th class='pt-3-half' id='customer_phone" + i + "'>" + data[i].assignee +  "</th> <th class='pt-3-half' id='order_id" + i + "'>" + data[i].name +  "</th> <th class='pt-3-half' id='totalCost" + i + "'>" + data[i].processInstanceId +  "</th>  <th class='pt-3-half' id='delivery" + i + "'>" + data[i].processDefinitionId +  "  </th>  <th class='pt-3-half' contenteditable='false' id='delivery" + i + "'>" + hrefValue +  "  </th> </tr>";
			    }

			    temp = temp + "</tbody>";
			    $('#table').append(temp);

	//END of REST Call service
}


$(document).ready (function(){

	

});





function ajaxFunction( URL, dataType){
var obj = new Array();
var settings = {
  "async": false,
  "crossDomain": true,
  "url": URL,
  "contentType" : "application/json",
  "dataType" : dataType,
  "data" : {},
  "method": "GET",
  "headers": {
    
    "Access-Control-Allow-Headers" : true,
    "cache-control": "no-cache",
  },
  'success': function (data) {
            obj = data;
   }
}

		var data = new Array();
		$.ajax(settings).done(function (response) {
		  
		  obj = response;
		  
		  data = obj.data;
		  
		});
		//console.log(data);
		console.log(obj);
		return obj;

}








