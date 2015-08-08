window.Trello = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var boards = new Trello.Collections.Boards();
    boards.fetch();
    var $boards = $('#boards-index');
    var boardsView = new Trello.Views.BoardIndex({ collection: boards });
    $boards.html(boardsView.render().$el);
    $rootEl = $('#content-main');

    new Trello.Routers.BoardRouter(boards, $rootEl);
    Backbone.history.start();
  }
};