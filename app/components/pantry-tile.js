import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(pantry) {
      if (confirm('Are you sure you want to delete this pantry item?')) {
        this.sendAction('destroyPantry', pantry);
      }
    }
  }
});
