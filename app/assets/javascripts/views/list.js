Trello.Views.List = Backbone.CompositeView.extend({
  template: JST['lists/list'],

  initialize: function() {
    this.listenTo(this.model, 'sync add', this.render);
    this.listenTo(this.model.cards(), 'add', this.addCardView);
    this.listenTo(this.model.cards(), 'remove', this.removeCardView);
    this.model.cards().each(function(card) {
      this.addCardView(card);
    }.bind(this));
  },

  addCardView: function(card) {
    var subView = new Trello.Views.Card({ model: card });
    this.addSubview('.cards', subView);
  },

  render: function() {
    var content = this.template({ list: this.model });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  removeCardView: function(card) {
    this.removeModelSubview('.cards', card);
  }
});  