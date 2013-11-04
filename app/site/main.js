/*global require*/
'use strict';

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
        config: 'config/main'
    }
});

require([
    'backbone',
    'config'
], function (Backbone, config) {
	var AppRouter = Backbone.Router.extend({
	        routes: config.sections
	    }),
	    app_router = new AppRouter();
    
    app_router.on('route:articleID', function (id) {
        // Note the variable in the route definition being passed in here
        alert( "Get post number " + id );   
    });
    
    app_router.on('route:defaultRoute', function (actions) {
		
		if (actions.indexOf('.html') === -1 && actions.indexOf('.htm') === -1) {
			require(['site/' + actions.replace('!', '') + '/index.js'], function(page) {
				console.log(actions); 
				console.log(page);
			});
		} else {
			require([actions.replace('.html', '').replace('!', '').replace('.htm', '')], function(page) {
				console.log(actions); 
				console.log(page);
			});	
		}
        
    });
    // Start Backbone history a necessary step for bookmarkable URL's
    Backbone.history.start();
    
    console.log('Hello from Backbone!');
});

require.onError = function (err) {
    console.log(err);
};