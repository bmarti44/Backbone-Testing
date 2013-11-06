define(["dust"],function (dust) {
	// index.dust
	(function(){dust.register("index",body_0);function body_0(chk,ctx){return chk.partial("partial/global/header",ctx,null).write("<div class=\"jumbotron\"><h1>'Allo, 'Allo!</h1><p class=\"lead\">Always a pleasure scaffolding your apps.</p><p><a class=\"btn btn-lg btn-success\" href=\"#\">Splendid!</a></p></div><div class=\"row marketing\"><div class=\"col-lg-6\"><h4>Home</h4><p>This is everything for the home page.</p></div></div>").partial("partial/global/footer",ctx,null);}return body_0;})();
	return "index";
});