'use strict';

window.onload = function() {
	var content_mask = "content@"
	
	var base_url = "";
	var base_file = "/index.html";
	
	var my_router;
	var my_collapser;
	var routes_result = load_routes(base_url, base_file, content_mask);
	
	if (routes_result['routes'] != {}) {
		my_router = new router(routes_result['routes'], content_mask, routes_result['default_id']);
	}
	else {
		console.log("Couldn't load routes");	
	}
	
	collapser = new collapser(document.getElementsByClassName("main-content-window")[0]);
	
	image_to_inline_svg();
}