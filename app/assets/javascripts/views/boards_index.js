Trello.Views.BoardIndex = Backbone.View.extend({
  template: JST['boards/board_index'],

  initialize: function () {
    this.listenTo(this.collection, 'sync add', this.render);
  },

  render: function() {
    this.$el.empty();
    var content = this.template({ boards: this.collection });
    this.$el.html(content);
    return this;
  }
});