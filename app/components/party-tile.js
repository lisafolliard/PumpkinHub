import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(party) {
      if (confirm('Are you sure you want to delete this event?')) {
        this.sendAction('destroyParty', party);
      }
    }
  }
});
