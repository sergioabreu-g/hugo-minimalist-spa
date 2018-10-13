'use strict';
	
var load_routes = function(base_url, base_file, content_mask) {
	var routes = {};
	var default_id;
	
	var tabs = document.getElementById("tabs-list").children;
	for (var i = 0; i < tabs.length; i++){
		var lowered_unmasked_id = tabs[i].id.replace(content_mask, "").toLowerCase();
		
		if (i == 0) default_id = lowered_unmasked_id;
		routes[lowered_unmasked_id] = base_url + lowered_unmasked_id + base_file;
	}
	
	return {routes, default_id};
}