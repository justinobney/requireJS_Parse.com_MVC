define(['Views/list_contact_view','parse'], function(list_contact_view){
	function start(){
		// " ~LOAD~ " the contacts
		get_all(function(collection){
			list_contact_view.render({contacts:collection});
		});
	}

	function get_all(callback) {
		var Contact = Parse.Object.extend("Contact");

		var ContactCollection = Parse.Collection.extend({
			model: Contact,
			query: (new window.Parse.Query(Contact))
		});

		var collection = new ContactCollection();

		//Use fetch success callback to wait for async call to return..
		collection.fetch({
			success: function (collection) {
				var contacts = collection.models.map(function(e){
					return e.toJSON();
				});
				callback(contacts);
			},
			error: function (collection, error) {
				// The collection could not be retrieved.
				console.warn(collection, error);
			}
		});
    }

	return {
		start:start
	};
});