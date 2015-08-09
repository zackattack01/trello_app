Trello.Views.Item = Backbone.View.extend({
  template: JST['items/item'],

  initialize: function() {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function() {
    var content = this.template({ item: this.model });
    this.$el.html(content);
    return this;
  }
});