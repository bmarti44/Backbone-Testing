/*jslint devel: false, browser: true, maxerr: 50, indent: 4*/
/*global define: false, require: false, $: false, jQuery: false, console: false, document: false, event: false, frames: false, history: false, Image: false, location: false, name: false, navigator: false, Option: false, parent: false, screen: false, setInterval: false, setTimeout: false, window: false, XMLHttpRequest: false */

define(function() {
	'use strict';
	// define the dynamic sections of the site here
	return {
		'sections': {
            "article/:id": "articleID",
            "*actions": "defaultRoute" // Backbone will try match the route above first
		}
	};
});