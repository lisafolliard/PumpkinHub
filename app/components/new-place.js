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
        // latitude: this.get('latitude'),
        // longitude: this.get('longitude'),
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
        //function(address) {
        //   var geocoder = new google.maps.Geocoder();
        //
        //   geocoder.geocode( {'address': address}, function(results, status) {
        //
        //     if (status === google.maps.GeocoderStatus.OK) {
        //       return results[0].geometry.location;
        //       // var marker = new google.maps.Marker({
        //       //   map: newMap,
        //       //   position: results[0].geometry.location,
        //       //   // icon: pumpkinMarker
        //       // });
        //     } else {
        //       alert("Geocode was not successful for the following reason: " + status);
        //     }
        //   });
        // }
      };
      this.set('addNewPlace', false),
      this.sendAction('savePlace', params);
    }
  }
});
