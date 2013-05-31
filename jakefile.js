// with jake we provide tasks that execute functions
task("default",[], function(){
	console.log("default");
});

desc("Example")
task("example", ["someDependency"], function(){
	console.log("example task");
});

task("someDependency", function(){
	console.log("someDependency");
});