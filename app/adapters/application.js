import DS from 'ember-data';

export default DS.RESTAdapter.reopen({
	namespace: 'api',
    host: 'http://localhost:9100'
});
