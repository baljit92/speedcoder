var editor;

$( document ).ready(function() {
	editor = ace.edit("editor");
	editor.setTheme("ace/theme/monokai");
	editor.getSession().setMode("ace/mode/python");

	var remoteEditor = ace.edit("remoteEditor");
	remoteEditor.setTheme("ace/theme/monokai");
	remoteEditor.getSession().setMode("ace/mode/python");
	remoteEditor.setReadOnly(true);

	$("#compileButton").click(function() {
		$.ajax({
			type: "POST",
			url: "/code_submit",
			data: {questionID: questionID, code:editor.getValue()}
		}).done(function(res) {
			console.log(res.stdout);
		});
	});
});


