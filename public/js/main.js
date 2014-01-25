var editor;
var remoteEditor;

$( document ).ready(function() {
	editor = ace.edit("editor");
	editor.setTheme("ace/theme/vibrant_ink");
	editor.getSession().setMode("ace/mode/python");
	document.getElementById('editor').style.fontSize='16px';

	remoteEditor = ace.edit("remoteEditor");
	remoteEditor.setTheme("ace/theme/vibrant_ink");
	//remoteEditor.getSession().setMode("ace/mode/python");
	remoteEditor.setReadOnly(true);
	document.getElementById('remoteEditor').style.fontSize='16px';

	setInterval(sendLocalCode, 500);
	setInterval(updateRemoteCode, 500);

	// $("#compileButton").click();
});

function submitCode() {
	console.log("Sending Solution...");
	$.ajax({
		type: "POST",
		url: "/code_submit",
		data: {questionID: questionID, code:editor.getValue(), userID: userID}
	}).done(function(res) {
		console.log(res);
		if(res == "Incorrect")
		{
			$("#status").html("Incorrect Answer!")
			$("#status").css("color","red");
		}
		else
		{
			$("#status").html("Congratulations!");
			$("#status").css("color","green");
			$('#countdown').hide();
		}
	});
}

function sendLocalCode()
{
	$.ajax({
		type: "POST",
		url: "/add_code",
		data: {userID: userID, code:editor.getValue()}
	}).done(function(res) {
		//console.log(res);
	});
}

function updateRemoteCode()
{
	$.ajax({
		type: "POST",
		url: "/get_code",
		data: {userID: userID}
	}).done(function(res) {
		remoteEditor.setValue(res.code);
		console.log(res);
		if(res.winner != -1 && res.winner != userID)
		{
			$("#status").html("Opponent Won!");
			$("#status").css("color","orange");
			$('#countdown').hide();
		}
		remoteEditor.clearSelection();
	});
}