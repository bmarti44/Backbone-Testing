define(["dust"],function (dust) {
	// about/index.dust
	(function(){dust.register("about/index",body_0);function body_0(chk,ctx){return chk.partial(body_1,ctx,null).write("<div class=\"jumbotron\"><h1>'Allo, 'Allo!</h1><p class=\"lead\">Always a pleasure scaffolding your apps.</p><p><a class=\"btn btn-lg btn-success\" href=\"#\">Splendid!</a></p></div><div class=\"row marketing\"><div class=\"col-lg-6\"><h4>About</h4><p>This is everything for the about page.</p></div></div>").partial(body_2,ctx,null);}function body_1(chk,ctx){return chk.write("partial/").reference(ctx.get("header"),ctx,"h");}function body_2(chk,ctx){return chk.write("partial/").reference(ctx.get("footer"),ctx,"h");}return body_0;})();
	return "about/index";
});