"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends =
  Object.assign ||
  function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };

exports.default = condenseAssociations;
var _ = require("lodash");

function condenseAssociations(associationNames, path, associations, data) {
  if (!data) return;
  if (!associationNames) associationNames = {};
  var dataArray = Array.isArray(data) ? data : [data]; //convert any data objects to arrays so everything is handled identically
  _.each(associations, function(association, akey) {
    var pathToUse = path ? path + "." + akey : akey;
    dataArray.forEach(function(data) {
      if (data[akey]) {
        var subNames = _.get(associationNames, pathToUse, {});
        _.set(associationNames, pathToUse, _extends({}, subNames));
        condenseAssociations(
          associationNames,
          pathToUse,
          association.target.associations,
          data[akey]
        );
      }
    });
  });
}
