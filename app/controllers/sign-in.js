import Ember from 'ember';

var SignInController = {
	actions: {
		signIn: function() {
			console.warn("should sign-in", this.email);
		}

	}
};

export default Ember.ObjectController.extend(SignInController);