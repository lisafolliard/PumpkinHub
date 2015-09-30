import DS from 'ember-data';

export default DS.Model.extend({
  latitude: DS.attr('number'),
  longtitude: DS.attr('number'),
  image: DS.attr(),
  name: DS.attr(),
  type: DS.attr(),
  hours: DS.attr(),
  notes: DS.attr(),
  author: DS.attr(),
  openDate: DS.attr(),
  closeDate: DS.attr(),
  comments: DS.hasMany('comment', { async: true }),
  tag: DS.belongsTo('tag', { async: true })
});
