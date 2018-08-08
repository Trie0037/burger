const connection = require("./connection.js");
var orm = {
    selectAll: function (colInput, tableInput) {
        var queryString = "SELECT ?? FROM ??";
        connection.query(queryString, [colInput, tableInput], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },

    insertOne: function (colInput, tableInput) {
        var queryString = "SELECT ?? FROM ??";
        connection.query(queryString, [colInput, tableInput], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },


    updateOne: function (colInput, tableInput) {
        var queryString = "SELECT ?? FROM ??";
        connection.query(queryString, [colInput, tableInput], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },


}
module.exports = orm;