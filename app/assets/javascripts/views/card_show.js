Trello.Views.CardShow = Backbone.CompositeView.extend({
  template: JST['cards/card_show'],

  initialize: function() {
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.model.items(), 'add', this.addItemView);
    this.listenTo(this.model.items(), 'remove', this.removeItemView);
    this.model.items().each(function(item) {
      this.addItemView(item);
    }.bind(this));
  },

  addItemView: function(item) {
    var subView = new Trello.Views.Item({ model: item });
    this.addSubview('.items', subView);
  },

  removeItemView: function(item) {
    this.removeModelSubview('items', item);
  },

  render: function() {
    var content = this.template({ card: this.model });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
});