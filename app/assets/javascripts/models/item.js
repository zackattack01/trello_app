Trello.Models.Item = Backbone.Model.extend({
  initialize: function(options) {
    this.card = options.card;
  },

  urlRoot: function() {
    return this.card.url() + '/items';
  }

});