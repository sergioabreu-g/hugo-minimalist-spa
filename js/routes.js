'use strict';
	
var load_routes = function(base_url, base_file, content_mask) {
	var routes = {};
	var default_id;
	
	var tabs = document.getElementById("tabs-list").children;
	for (var i = 0; i < tabs.length; i++){
		var unmasked_id = tabs[i].id.replace(content_mask, "");
		
		if (i == 0) default_id = unmasked_id;
		routes[unmasked_id] = base_url + unmasked_id + base_file;
	}
	
	return {routes, default_id};
}