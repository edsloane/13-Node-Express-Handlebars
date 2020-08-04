const connection = require("./connection");
var orm = {
  selectAll: function (tableName, cb) {
    connection.query("SELECT * FROM ??", [tableName], function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function (tableName, objectToInsert, cb) {
    connection.query(
      "INSERT INTO ?? SET ?",
      [tableName, objectToInsert],
      function (err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      }
    );
  },
  updateOne: function (tableName, itemToUpdate, condition, cb) {
    connection.query(
      "UPDATE ?? SET ? WHERE ?",
      [tableName, itemToUpdate, condition],
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
