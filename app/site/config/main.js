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