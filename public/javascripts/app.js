/*Model*/
var JModel = Backbone.Model.extend({});

/*Collection*/
var JCollections = Backbone.Collection.extend({
	model : JModel
});

/*View*/
var JView = Backbone.View.extend({
	initialize : function() {
		alert('Welcome to first view');
		this.render();		
	},

	events : {
		"click #search_button" : "formSubmit"
	},

	formSubmit : function(ev) {
		alert($("#search_input").val());
	},

	render : function() {
		var template = _.template($("#search_template").html(), {});

		this.$el.html(template);
		this.collection.each(function(model) {
			console.log(model.toJSON().name);
		});

	}
});

var jcollections = new JCollections([
	{name : "Aravind", email : "aravindbalaji07@gmail.com"},
	{name : "Sathish", email : "Sathishkumar@gmail.com"}
]);




var firtView = new JView({
	el : $(".content"),
	collection : jcollections
});