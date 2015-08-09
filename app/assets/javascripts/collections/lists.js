Trello.Collections.Lists = Backbone.Collection.extend({
  initialize: function(models, options) {
    this.board = options.board;
  },

  model: Trello.Models.List,
  
  url: 'api/lists',

  getOrFetch: function(id) {
    var list = this.get(id);
    var that = this;
    if (!list) {
      list = new Trello.Models.List({ id: id });
      list.fetch({
        success: function() {
          that.add(list);
        }
      });
    } else {
      list.fetch();
    }
    return list;
  }
});