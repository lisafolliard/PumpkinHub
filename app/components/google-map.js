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

      var container = this.$('.map-display')[0];
      var options = {
        center: this.get('map').center(45.5200, -122.6819),
        zoom: 10
      };
      var newMap = this.get('map').findMap(container, options);

      var address = model.get('address');

      var geocoder = new google.maps.Geocoder();

      geocoder.geocode( {'address': address}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          newMap.setCenter(results[0].geometry.location);
          var marker = new google.maps.Marker({
            map: newMap,
            position: results[0].geometry.location,
            icon: pumpkinMarker
          });
        } else {
          alert("Geocode was not successful for the following reason: " + status);
        }
      });
    }
  }
});


// import Ember from 'ember';
// export default Ember.Component.extend({
//   map: Ember.inject.service('google-map'),
//
//   actions: {
//     showMap(model) {
//       var container = this.$('.map-display')[0];
//       var lat = model.get('latitude');
//       var lng = model.get('longitude');
//       var myLatLng = {lat: lat, lng: lng};
//       var options = {
//         center: this.get('map').center(lat, lng),
//         zoom: 15
//       };
//       var geocoder = new google.maps.Geocoder();
//       var pumpkinMarker = new google.maps.MarkerImage(
//         'assets/images/logo.png',
//         null, /* size is determined at runtime */
//         null, /* origin is 0,0 */
//         null, /* anchor is bottom center of the scaled image */
//         new google.maps.Size(25, 25)
//       );
//
//       var newMap = this.get('map').findMap(container, options);
//
//       function codeAddress() {
//         var address = model.get("address");
//         geocoder.geocode( { 'address': address}, function(results, status) {
//           if (status == google.maps.GeocoderStatus.OK) {
//             newMap.setCenter(results[0].geometry.location);
//             var marker = new google.maps.Marker({
//               map: newMap,
//               position: results[0].geometry.location,
//               icon: pumpkinMarker
//             });
//           } else {
//             alert("Geocode was not successful for the following reason: " + status);
//           }
//         });
//       };
//
//       // var marker = new google.maps.Marker({
//       //   position: myLatLng,
//       //   map: newMap,
//       //   icon: pumpkinMarker
//       // });
//     }
//   }
// });
