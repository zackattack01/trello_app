Trello.Models.List = Backbone.Model.extend({
  initialize: function(options) {
    this.cardSet = options.cards
  },

  urlRoot: 'api/lists',

  cards: function() {
    if (!this._cards) {
      this._cards = new Trello.Collections.Cards(this.cardSet, { list: this });
    }
    return this._cards;
  } 
});