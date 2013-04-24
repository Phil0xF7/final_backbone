$(document).ready(function () {
  var ListView = Backbone.View.extend({
    el: $('body'),

    events: {
      'click button#btnUpdate': 'render'
    },

    initialize: function(){
      _.bindAll(this, 'render', 'addOne', 'addAll');

      this.collection = new List();
      this.collection.bind('reset', this.reset);
      this.collection.bind('add', this.add);

      this.collection.fetch();
    },

    render: function(){
      $("#content").html("Yeah");
    },

    add: function() {

    },

    addOne: function(){

    },

    addAll: function(){

    }

  });
  var Item = Backbone.Model.extend({
    urlRoot: '/data'
  });

  var List = Backbone.Collection.extend({
    model: Item,
    url: '/data/1.json'
  });

  var listView = new ListView();

});