Trello.Collections.Lists = Backbone.Collection.extend({
  initialize: function(models, options) {
    this.board = options.board;
  },

  model: Trello.Models.List,
  url: 'api/lists'
});