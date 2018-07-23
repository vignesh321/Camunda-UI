function btnSubmit(){

	console.log("Submit Button was clicked");

	var select = document.getElementById("selectOption");
	var status = select.value;


	console.log(status);

	var url = window.location.href;

	//var url = "http://localhost:8080/TaskList/forms/request.html?taskId=efd994bc-8dae-11e8-aaa0-6e37c0097b02&callbackUrl=http://localhost:8080/camunda/app/tasklist/default/#/";

	var taskId = url.slice(url.indexOf("taskId=") + "taskId=".length);
	
	
	/*var taskId = callbackUrl.substring(  url.indexOf("taskId="), url.length );

	callbackUrl = callbackUrl.substring( callbackUrl.lastIndexOf("=") + 1, callbackUrl.length );
	console.log( "CallbackUrl : " + callbackUrl);
	*/

	console.log("TaskID : " + taskId);
	
	POSTCall(taskId, status);
}


function POSTCall(taskId, status){


var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://localhost:8080/engine-rest/task/" + taskId + "/complete",
  "method": "POST",
  "headers": {
    "content-type": "application/json",
    "cache-control": "no-cache",
    "postman-token": "2992acd5-a803-b1e4-4a8d-8760f61f16e9"
  },
  "processData": false,
  "data": "{\"variables\":\n    {\"status\": {\"value\": \"" + status + "\"}\n   }\n}"
}

$.ajax(settings).done(function (response) {
	console.log("Successfully Closed");
  console.log(response);
});


}