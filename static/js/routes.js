'use strict';

var base_url = "/tabs/";
var base_file = "/index.html";
var default_id = '';
	
var load_routes = function() {
	var routes = {};
	
	var tabs = document.getElementById("tabs-list").children;
	for (var i = 0; i < tabs.length; i++){
		if (i == 0) default_id = tabs[i].id;
		routes[tabs[i].id] = base_url + tabs[i].id + base_file;
	}
	
	return routes;
}