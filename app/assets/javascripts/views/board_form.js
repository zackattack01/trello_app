Trello.Views.BoardForm = Backbone.View.extend({
  template: JST['boards/new_board'],

  events: {
    'click form button.submit': 'submit'
  },

  submit: function(e) {
    e.preventDefault();
    var formData = $('#new-board-form').serializeJSON();
    this.model.set(formData);
    var that = this;
    this.model.save({}, {
      success: function() {
        that.collection.add(that.model, { merge: true });
        Backbone.history.navigate('boards/' + that.model.get('id'), { trigger: true });
      }
    });
  },

  render: function() {
    var content = this.template({ board: this.model });
    this.$el.html(content);
    return this;
  }
});