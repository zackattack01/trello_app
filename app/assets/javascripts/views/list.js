Trello.Views.List = Backbone.CompositeView.extend({
  template: JST['lists/list'],
  initialize: function() {
    this.listenTo(this.model, 'sync', this.render)
  },

  render: function() {
    var content = this.template({ list: this.model });
    this.$el.html(content);
    return this;
  }
})  