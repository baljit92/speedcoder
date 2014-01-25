$( document ).ready(function() {
	var editor = ace.edit("editor");
	editor.setTheme("ace/theme/monokai");
	editor.getSession().setMode("ace/mode/python");

	var remoteEditor = ace.edit("remoteEditor");
	remoteEditor.setTheme("ace/theme/monokai");
	remoteEditor.getSession().setMode("ace/mode/python");
});
