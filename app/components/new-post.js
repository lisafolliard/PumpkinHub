import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    postFormShow() {
      this.set('addNewPost', true);
    },
    save() {
      var params = {
        title: this.get('title'),
        image: this.get('image'),
        caption: this.get('caption')
      };
      this.set('addNewPost', false),
      this.sendAction('save', params);
    }
  }
});
