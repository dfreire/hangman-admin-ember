import Ember from 'ember';

export default Ember.ObjectController.extend({
	email: "",
	password: "",
	actions: {
		signIn: function() {
			var signInRequest = {
				email: this.email.trim(),
				password: this.password
			};
			this.store.createRecord('SignIn', signInRequest);
			console.warn('SignIn', signInRequest);
		}
	}
});
