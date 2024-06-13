const Class = require('../models/class');

module.exports.getClasses = (req, res, next) => {
  Class.find({})
    .then((classes) => res.status(200).send(classes))
    .catch(next);
};
