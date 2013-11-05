define(["dust"],function (dust) {
	// article/index.dust
	(function(){dust.register("article/index",body_0);function body_0(chk,ctx){return chk.write("this is my article with id ").reference(ctx.get("id"),ctx,"h");}return body_0;})();
	return "article/index";
});