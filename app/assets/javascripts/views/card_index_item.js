Trello.Views.Card = Backbone.CompositeView.extend({
  template: JST['cards/card'],

  initialize: function() {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function() {
    var content = this.template({ card: this.model });
    this.$el.html(content);
    return this;
  }
});