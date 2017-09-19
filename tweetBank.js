const _ = require("lodash");
const data = [];

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
