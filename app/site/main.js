/*jslint devel: false, browser: true, maxerr: 50, indent: 4*/
/*global define: false, require: false, $: false, jQuery: false, console: false, document: false, event: false, frames: false, history: false, Image: false, location: false, name: false, navigator: false, Option: false, parent: false, screen: false, setInterval: false, setTimeout: false, window: false, XMLHttpRequest: false */

require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',
        bootstrap: 'vendor/bootstrap',
        config: 'config/main',
        alias: 'module/alias/alias',
        dust: '../bower_components/dustjs-linkedin-amd/dust-core-1.2.2',
        'dust-helpers': '../bower_components/dustjs-helpers-amd/dust-helpers'
    }
});

require([
    'backbone',
    'config',
    'alias',
    'dust'
], function (Backbone, config, alias, dust) {
	'use strict';
	
	var AppRouter = Backbone.Router.extend({
	        routes: config.sections
	    }),
	    app_router = new AppRouter();
    
    app_router.on('route:articleID', function (id) {
        // Note the variable in the route definition being passed in here
        alert( "Get post number " + id );   
    });
    
    app_router.on('route:defaultRoute', function (actions) {
		console.log(actions);
		if (!actions) {
			actions = 'index.html';
		}
		
		if (typeof(alias[actions]) !== 'undefined') {
			actions = alias[actions];
		}
		
		if (actions.indexOf('.html') === -1 && actions.indexOf('.htm') === -1) {
			require(['site/' + actions.replace('!', '') + '/index.js'], function(page) {
				console.log(actions); 
				$('#page-content').html(page);
			});
		} else {
			require([actions.replace('.html', '').replace('!', '').replace('.htm', '')], function(page) {
				console.log(actions); 
				$('#page-content').html(page);
			});	
		}
        
    });
    // Start Backbone history a necessary step for bookmarkable URL's
    Backbone.history.start();
    
    console.log('Hello from Backbone!');
});

require.onError = function (err) {
	'use strict';
	
    $('#page-content').html('404 - This page does not yet exist!');
};