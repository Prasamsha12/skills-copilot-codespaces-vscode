// Create web server

// Import module
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

// Create route
router.get('/', commentController.index);

// Export
module.exports = router;