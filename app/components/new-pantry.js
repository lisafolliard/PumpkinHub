import Ember from 'ember';

export default Ember.Component.extend({
  addNewPantry: false,

  actions: {
    pantryFormShow() {
      this.set('addNewPantry', true);
    },

    savePantry() {
      var params = {
        name: this.get('name'),
        image: this.get('image'),
        description: this.get('description')
      };
      this.set('addNewPantry', false),
      this.sendAction('savePantry', params);
    }
  }
});
