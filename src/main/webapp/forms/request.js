function btnSubmit(){

	console.log("Submit Button was clicked");

	var approver = document.getElementById("approver").value;

	console.log(approver);

	var url = window.location.href;

	//var url = "http://localhost:8080/TaskList/forms/request.html?taskId=e2b5d45a-8dc9-11e8-aaa0-6e37c0097b02";

	var taskId = url.slice(url.indexOf("taskId=") + "taskId=".length);
	
	
	/*var taskId = callbackUrl.substring(  url.indexOf("taskId="), url.length );

	callbackUrl = callbackUrl.substring( callbackUrl.lastIndexOf("=") + 1, callbackUrl.length );
	console.log( "CallbackUrl : " + callbackUrl);
	*/

	console.log("TaskID : " + taskId);
	
	POSTCall(taskId, approver);

}


function POSTCall(taskId, approver){

console.log("Approver : " + approver);

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://localhost:8080/engine-rest/task/" + taskId + "/complete",
  "method": "POST",
  "headers": {
    "content-type": "application/json",
    "cache-control": "no-cache",
  },
  "processData": false,
  "data": "{\"variables\": {\"approver\": {\"value\": \"" + approver +  "\"} } }"
}

$.ajax(settings).done(function (response) {
	console.log("Successfully Closed");
  console.log(response);
});


}