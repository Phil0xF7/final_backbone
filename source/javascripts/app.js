$(document).ready(function () {
  var ListView = Backbone.View.extend({
    el: $('body'),

    events: {
      'click button#btnUpdate': 'render'
    },

    initialize: function(){
      _.bindAll(this, 'render', 'addOne', 'addAll');
    },

    render: function(){
      $("#content").append("Yeah");
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
    url: '/data'
  });

  var listView = new ListView();

  var person = new Person();
});