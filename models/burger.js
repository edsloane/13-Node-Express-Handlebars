var orm = require("../config/orm.js");

var burger = {
  all: function (cb) {
    orm.all(function (res) {
      cb(res);
    });
  },

  create: function (vals) {
    orm.create(vals, function (res) {});
  },
  update: function (vals) {
    orm.update(vals, function (res) {});
  },
};

module.exports = burger;
