import Ember from 'ember';

export default Ember.Component.extend({
  addNewPlace: false,
  actions: {
    placeFormShow() {
      this.set('addNewPlace', true);
    },
    savePlace() {
      var params = {
        latitude: this.get('latitude'),
        longitude: this.get('longitude'),
        title: this.get('title'),
        image: this.get('image'),
        name: this.get('name'),
        type: this.get('type'),
        hours: this.get('hours'),
        notes: this.get('notes'),
        author: this.get('author'),
        openDate: this.get('openDate'),
        closeDate: this.get('closeDate'),
        tag: this.get('tag')
      };
      this.set('addNewPlace', false),
      this.sendAction('savePlace', params);
    }
  }
});
