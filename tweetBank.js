const _ = require("lodash");
const data = [{id: 1, name: "xifeng", content: "I love you"}, {id: 2, name: "marshalee", content: "I hate you"}];

function add(name, content, id = data.length + 1) {
  data.push({id, name, content});
}

function list() {
  return _.cloneDeep(data);
}

function find(properties) {
  return _.cloneDeep(_.filter(data, properties));
}

module.exports = { add, list, find };
