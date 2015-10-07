import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('pantry');
  },
  
  actions: {
    savePantry(params) {
      var newPantry = this.store.createRecord('pantry', params);
      newPantry.save();
      this.transitionTo('pantry');
    }
  }
});
