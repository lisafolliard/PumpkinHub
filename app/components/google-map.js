import Ember from 'ember';

export default Ember.Component.extend({
  map: Ember.inject.service('google-map'),

  actions: {
    showMap(model) {

      var pumpkinMarker = new google.maps.MarkerImage(
        'assets/images/logo.png',
        null, /* size is determined at runtime */
        null, /* origin is 0,0 */
        null, /* anchor is bottom center of the scaled image */
        new google.maps.Size(25, 25)
      );

      var coords = model.get('coordinates');

      var keys = Object.keys(coords);

      var lat = coords[keys[0]];
      var lng = coords[keys[1]];

      var container = this.$('.map-display')[0];
      var options = {
        center: this.get('map').center(
          lat,
          lng
        ),
        zoom: 10
      };

      var placeMap = this.get('map').findMap(container, options);

      new google.maps.Marker({
        map: placeMap,
        position: {lat: lat, lng: lng},
        icon: pumpkinMarker
      });

    }
  }
});
