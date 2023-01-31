const express = require('express');
const router = express.Router();

const {generateImage} = require('../controllers/generateControllers');

router.post('/generateimage', generateImage);

module.exports = router;
