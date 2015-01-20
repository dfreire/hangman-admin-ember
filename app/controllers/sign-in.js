import Ember from 'ember';

export default Ember.ObjectController.extend({
	email: "",
	password: "",
	actions: {
		signIn: function() {
			console.warn("sign-in:", this.email.trim(), this.password);
		}
	}
});