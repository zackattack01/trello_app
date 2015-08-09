Trello.Routers.BoardRouter = Backbone.Router.extend({
  initialize: function (boards, $rootEl) {
    this.boards = boards;
    this.$rootEl = $rootEl;
  },

  routes: {
    'boards/:id': 'show',
    'cards/:id/items': 'indexItems'
  },

  show: function(id) {
    var board = this.boards.getOrFetch(id);
    var view = new Trello.Views.Board({ model: board, collection: this.boards });
    this._swapView(view);
  },

  indexItems: function() {
    ////TODODODOD
  },

  _swapView: function(view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});