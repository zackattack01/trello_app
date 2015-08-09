Trello.Collections.Items = Backbone.Collection.extend({
  initialize: function(models, options) {
    this.card = options.card;
  },

  model: Trello.Models.Item,

  url: function() {
    return this.card.url() + '/items';
  },

});