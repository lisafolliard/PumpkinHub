import Ember from 'ember';

export default Ember.Component.extend({

  insertMap: function() {
    var model = this.get('model');
    var coords = model.get('coordinates');
    var keys = Object.keys(coords);
    var lat = coords[keys[0]];
    var lng = coords[keys[1]];
    var type = model.get('type');

    var markers = {
      pumpkin: new google.maps.MarkerImage(
        'assets/images/logo.png',
        null, /* size is determined at runtime */
        null, /* origin is 0,0 */
        null, /* anchor is bottom center of the scaled image */
        new google.maps.Size(30, 30)
      ),
      corn: new google.maps.MarkerImage(
        'assets/images/corn.png',
        null, /* size is determined at runtime */
        null, /* origin is 0,0 */
        null, /* anchor is bottom center of the scaled image */
        new google.maps.Size(30, 30)
      )
    };

    var container = this.$('.map-canvas')[0];
    var options = {
      center: new window.google.maps.LatLng(
        lat,
        lng
      ),
      zoom: 15
    };

    var placeMap = new window.google.maps.Map(container, options);

    new google.maps.Marker({
      map: placeMap,
      position: {lat: lat, lng: lng},
      icon: markers[type]
    });
  }.on('didInsertElement')

});
