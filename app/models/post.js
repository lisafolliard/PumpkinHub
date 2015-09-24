import DS from 'ember-data';

export default DS.Model.extend({
  image: DS.attr(),
  title: DS.attr(),
  caption: DS.attr(),
  comments: DS.hasMany('comment', { async: true }),
});
