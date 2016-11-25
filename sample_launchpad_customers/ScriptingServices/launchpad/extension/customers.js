/* eslint-env node, dirigible */

var repository = require('platform/repository');

const CONTROLLER_LOCATION = '/db/dirigible/registry/public/ScriptingServices/launchpad/extension/controller/CustomerCtrl.js';

exports.getMenuItem = function() {
	return {
		name:"Customers",
		link:"#/customers"
	};
};

exports.getHomeItem = function(){
	return {
		image: "user-circle-o",
		color: "red",
		path: "#/customers",
		title: "Customers",
		description: "Northwind Customers",
		newTab: true
	};
};

exports.getRoute = function() {
	return {
		'location': '/customers',
		'controller': 'CustomerCtrl',
		'template': 'templates/customers.html'
	};
};

exports.getController = function() {
	return repository.getResource(CONTROLLER_LOCATION).getTextContent();
};
