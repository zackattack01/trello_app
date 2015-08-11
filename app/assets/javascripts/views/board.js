Trello.Views.Board = Backbone.CompositeView.extend({
  template: JST['boards/board_show'],

  initialize: function() {
    this.listenTo(this.model.lists(), 'add', this.addListView);
    this.listenTo(this.model, 'sync add', this.render);
    this.listenTo(this.model.lists(), 'remove', this.removeListView);
    this.model.lists().each(function (list) {
      this.addListView(list);
    }.bind(this));
  },

  addListView: function(list) {
    var subView = new Trello.Views.List({ model: list });
    this.addSubview('.lists', subView);
  },

  render: function() {
    var content = this.template({ board: this.model });
    this.$el.html(content);
    this.attachSubviews();
    this.onRender();
    return this;
  },

  onRender: function() {
    this.$('.lists').sortable();
    this.$('div.ui-sortable-handle').addClass("clearfix");
    Backbone.CompositeView.prototype.onRender.call(this);
  },

  removeListView: function(list) {
    this.removeModelSubview('.lists', list);
  }
});