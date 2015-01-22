import DS from "ember-data";

var ApplicationAdapter = DS.RESTAdapter.extend({
    host: 'localhost:9100',
    namespace: 'api/v1'
});

export default ApplicationAdapter;
