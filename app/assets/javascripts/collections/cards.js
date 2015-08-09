Trello.Collections.Cards = Backbone.Collection.extend({
  url: 'api/cards',

  model: Trello.Models.Card,

  initialize: function(models, options) {
    if (options && options.list) {
      this.list = options.list;
    }
  },

  getOrFetch: function(id) {
    var card = this.get(id);
    var that = this;
    if (!card) {
      card = new Trello.Models.Card({ id: id });
      card.fetch({
        success: function() {
          that.add(card);
        }
      });
    } else {
      card.fetch();
    }
    return card;
  }
});