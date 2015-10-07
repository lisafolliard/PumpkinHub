import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('party');
  },

  actions: {
    saveParty(params) {
      var newParty = this.store.createRecord('party', params);
      newParty.save();
      this.transitionTo('party');
    },

    destroyParty(party) {
      party.destroyRecord();
      this.transitionTo('party');
    }
  }
});
