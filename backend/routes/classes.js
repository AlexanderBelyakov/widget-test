const router = require('express').Router();

const { getClasses } = require('../controllers/classes');

router.get('/', getClasses);

module.exports = router;
