Trello.Collections.Boards = Backbone.Collection.extend({
  model: Trello.Models.Board,
  url: 'api/boards',

  getOrFetch: function(id) {
    var board = this.get(id);
    var that = this;
    if (!board) {
      board = new Trello.Models.Board({ id: id });
      board.fetch({
        success: function() {
          that.add(board);  
        }
      });
    } else {
      board.fetch();
    }
    return board;
  }
});