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

	setInterval(sendLocalCode, 1000);
	setInterval(updateRemoteCode, 1000);

	// $("#compileButton").click();
});

function submitCode() {
	console.log("Sending Solution...");
	$.ajax({
		type: "POST",
		url: "/code_submit",
		data: {questionID: questionID, code:editor.getValue()}
	}).done(function(res) {
		console.log(res);
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
		remoteEditor.setValue(res);
		remoteEditor.clearSelection();
	});
}