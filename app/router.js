import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
	location: config.locationType
});

Router.map(function() {
	this.resource('sign-in', {
		path: '/'
	});
	this.resource('sign-in', {
		path: '/sign-in'
	});
	this.resource('sign-up', {
		path: '/sign-up'
	});
	this.resource('reset-password', {
		path: '/reset-password'
	});
});

export default Router;
