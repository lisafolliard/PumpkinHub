import Ember from 'ember';
export default Ember.Component.extend({
  map: Ember.inject.service('google-map'),

  actions: {
    showMap(model) {
      var container = this.$('.map-display')[0];
      var lat = model.get('latitude');
      var lng = model.get('longitude');
      var myLatLng = {lat: lat, lng: lng};
      var options = {
        center: this.get('map').center(lat, lng),
        zoom: 15
      };

      var newMap = this.get('map').findMap(container, options);

      var marker = new google.maps.Marker({
        position: myLatLng,
        map: newMap,
      });
    }
  }
});
