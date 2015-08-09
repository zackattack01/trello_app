Trello.Models.Card = Backbone.Model.extend({
  initialize: function(options) {
    this.list = options.list;
  },

  urlRoot: 'api/cards',

  parse: function(response) {
    if (response.items) {
      this.items().add(response.items);
      delete response.items;
    }
    return response;
  },

  items: function() {
    if (!this._items) {
      this._items = new Trello.Collections.Items([], { card: this });
    }
    return this._items;
  }
});