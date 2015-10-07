import Ember from 'ember';

export default Ember.Component.extend({
  addNewParty: false,

  actions: {
    partyFormShow() {
      this.set('addNewParty', true);
    },

    saveParty() {
      var params = {
        name: this.get('name'),
        host: this.get('host'),
        address: this.get('address'),
        date: this.get('date'),
        startTime: this.get('startTime'),
        endTime: this.get('endTime'),
        ageGroup: this.get('ageGroup'),
        details: this.get('details')
      };
      this.set('addNewParty', false),
      this.sendAction('saveParty', params);
    }
  }
});
