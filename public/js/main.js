var editor;
var remoteEditor;

$( document ).ready(function() {
	editor = ace.edit("editor");
	editor.setTheme("ace/theme/monokai");
	editor.getSession().setMode("ace/mode/python");

	remoteEditor = ace.edit("remoteEditor");
	remoteEditor.setTheme("ace/theme/monokai");
	remoteEditor.getSession().setMode("ace/mode/python");
	remoteEditor.setReadOnly(true);

	setInterval(sendLocalCode, 1000);
	setInterval(updateRemoteCode, 1000);

	$("#compileButton").click(function() {
		$.ajax({
			type: "POST",
			url: "/code_submit",
			data: {questionID: questionID, code:editor.getValue()}
		}).done(function(res) {
			console.log(res);
		});
	});
});

function sendLocalCode()
{
	$.ajax({
			type: "POST",
			url: "/add_code",
			data: {userID: userID, code:editor.getValue()}
		}).done(function(res) {
			console.log(res);
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
		});
}