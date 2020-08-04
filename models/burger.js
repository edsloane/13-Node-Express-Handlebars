const orm = require("../config/orm");

var burger = {
  getAll: function (cb) {
    orm.selectAll("burgers", function (result) {
      cb(result);
    });
  },
  create: function (newBurger, cb) {
    orm.insertOne("burgers", newBurger, function (result) {
      cb(result);
    });
  },
  update: function (updateObject, conditionObject, cb) {
    orm.updateOne("burgers", updateObject, conditionObject, function (result) {
      cb(result);
    });
  },
};

module.exports = burger;
