// with jake we provide tasks that execute functions
task("default",["lint"]);

desc("Lint all the things");
task("lint", [], function(){
	var lint = require("./build/lint/lint_runner.js");
	lint.validateFile("jakefile.js", {}, {});
});
