/*jslint devel: false, browser: true, maxerr: 50, indent: 4*/
/*global define: false, require: false, $: false, jQuery: false, console: false, document: false, event: false, frames: false, history: false, Image: false, location: false, name: false, navigator: false, Option: false, parent: false, screen: false, setInterval: false, setTimeout: false, window: false, XMLHttpRequest: false */

define(['jquery', 'dust', 'template/partial/global/header', 'template/partial/global/footer', 'template/about/index'], function($, dust, header, footer, template) {
	'use strict';
	
	return {
		'template': template,
		'data': {
			'header': 'global/header',
			'footer': 'global/footer'
		}
	};
	
});