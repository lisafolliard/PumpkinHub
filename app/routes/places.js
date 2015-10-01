import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('place');
  },
  actions: {
    savePlace(params) {
      var newPlace = this.store.createRecord('place', params);
      newPlace.save();
      this.transitionTo('places');
    }
  }
});
