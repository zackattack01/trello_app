Trello.Routers.BoardRouter = Backbone.Router.extend({
  initialize: function (boards, $rootEl, $newBoardForm) {
    this.boards = boards;
    this.$rootEl = $rootEl;
    this.$newBoardForm = $newBoardForm;
    this.newBoard();
  },

  routes: {
    // 'boards/new': 'newBoard',
    'boards/:id': 'boardShow',
    'cards/:id': 'cardShow'
  },

  newBoard: function() {
    var board = new Trello.Models.Board();
    var view = new Trello.Views.BoardForm({ model: board, collection: this.boards });
    this.$newBoardForm.html(view.render().$el);
  },

  boardShow: function(id) {
    var board = this.boards.getOrFetch(id);
    var view = new Trello.Views.Board({ model: board, collection: this.boards });
    this._swapView(view);
  },

  cardShow: function(cardId) {
    var card = new Trello.Models.Card({ id: cardId });
    card.fetch();
    var view = new Trello.Views.CardShow({ model: card });
    this._swapView(view);
  },

  _swapView: function(view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.$el);
    view.render();
  }
});