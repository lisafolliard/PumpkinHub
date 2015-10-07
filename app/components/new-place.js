import Ember from 'ember';

export default Ember.Component.extend({
  map: Ember.inject.service('google-map'),
  addNewPlace: false,
  actions: {
    placeFormShow() {
      this.set('addNewPlace', true);
    },
    savePlace() {
      var params = {
        address: this.get('address'),
        title: this.get('title'),
        image: this.get('image'),
        name: this.get('name'),
        type: this.get('type'),
        hours: this.get('hours'),
        notes: this.get('notes'),
        author: this.get('author'),
        openDate: this.get('openDate'),
        closeDate: this.get('closeDate'),
        tag: this.get('tag'),
        coordinates: null
      };
      this.set('addNewPlace', false),
      this.sendAction('savePlace', params);
    }
  }
});
