/*global desc, task, jake, fail, complete */
"use strict";

// with jake we provide tasks that execute functions
task("default",["lint"]);

desc("Lint all the things");
task("lint", [], function(){
	var lint = require("./build/lint/lint_runner.js");
	var files = new jake.FileList();
	files.include("**/*.js");
	files.exclude("node_modules");
	files.exclude("build");
	
	var options = {
		node: true
	};
	
	lint.validateFileList(files.toArray(), options, {});
});
