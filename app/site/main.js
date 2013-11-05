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

require(['backbone', 'config', 'alias', 'dust'], function (Backbone, config, alias, dust) {
	'use strict';
	
	var AppRouter = Backbone.Router.extend({
	        routes: config.sections
	    }),
	    app_router = new AppRouter();
    
    app_router.on('route:articleID', function (id) {
        
        require(['site/article/index.js', 'dust', 'jquery'], function(page, dust, $) {
			
			// allow the module to override the article ID, if it wants to
			if (typeof(page.data.id) === 'undefined') {
				page.data.id = id;
			}
			
			dust.render(page.template, page.data, function(error, html) {
				$('#page-content').html(html);
			});
			
		});
		 
    });
    
    app_router.on('route:defaultRoute', function (actions) {
		
		if (!actions) {
			actions = 'index.html';
		}
		
		if (typeof(alias[actions]) !== 'undefined') {
			actions = alias[actions];
		}
		
		if (actions.indexOf('.html') === -1 && actions.indexOf('.htm') === -1) {
			
			require(['site/' + actions.replace('!', '') + '/index.js', 'dust', 'jquery'], function(page, dust, $) {
				
				dust.render(page.template, page.data, function(error, html) {
					$('#page-content').html(html);
				});
				
				$(document).trigger('writeComplete');
				
			});
			
		} else {
			
			require([actions.replace('.html', '').replace('!', '').replace('.htm', ''), 'dust', 'jquery'], function(page, dust, $) {
				
				dust.render(page.template, page.data, function(error, html) {
					$('#page-content').html(html);
				});
				
				$(document).trigger('writeComplete');
				
			});
			
		}
        
    });
    // Start Backbone history a necessary step for bookmarkable URL's
    Backbone.history.start();
    
});

require.onError = function (err) {
	'use strict';
	
	// working to make the error fire more than once, and always load a 404
	console.log(err);
    $('#page-content').html('404 - This page does not yet exist!');
};