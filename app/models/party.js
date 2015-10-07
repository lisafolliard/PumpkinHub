import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  host: DS.attr(),
  address: DS.attr(),
  date: DS.attr(),
  startTime: DS.attr(),
  endTime: DS.attr(),
  ageGroup: DS.attr(),
  details: DS.attr
});
