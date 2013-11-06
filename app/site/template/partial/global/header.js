define(["dust"],function (dust) {
	// partial/global/header.dust
	(function(){dust.register("partial/global/header",body_0);function body_0(chk,ctx){return chk.write("<div class=\"header\"><ul class=\"nav nav-pills pull-right\"><li class=\"active\"><a href=\"#\">Home</a></li><li><a href=\"#/about\">About</a></li><li><a href=\"#/contact\">Contact</a></li></ul><h3 class=\"text-muted\">backbone test</h3></div>");}return body_0;})();
	return "partial/global/header";
});