var connection = require("../config/connection.js");

var orm = {
  all: function (cb) {
    connection.query("SELECT * FROM burgers_table", function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  create: function (vals, cb) {
    connection.query(
      "INSERT INTO burgers_table (burger_name) VALUES (?)",
      [vals],
      function (err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      }
    );
  },

  update: function (vals, cb) {
    connection.query(
      "UPDATE burgers_table SET devoured = true WHERE id = ?",
      [vals],
      function (err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      }
    );
  },
};

module.exports = orm;
