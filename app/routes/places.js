import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('place');
  },
  actions: {
    savePlace(params) {
      var geocoder = new google.maps.Geocoder();
      var newPlace = this.store.createRecord('place', params);

      geocoder.geocode( {'address': newPlace.get('address') }, function(results, status) {

        if (status === google.maps.GeocoderStatus.OK) {

          newPlace.set('coordinates', results[0].geometry.location);

          newPlace.save();

        } else {

          alert("Save failed. Geocode was not successful for the following reason: " + status);

        }
      });

      this.transitionTo('places');
    }
  }
});
