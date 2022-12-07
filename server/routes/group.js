const express = require('express');
const router = express.Router();
const groupController = require('../controllers/group');
const { ensureAuth } = require("../middleware/auth");

router.get('/api/group/getGroups', ensureAuth, groupController.getGroups);;

router.post('/api/group/createGroup', groupController.createGroup);

//router.put('/api/editGroup', groupController.markComplete);

router.delete('/api/group/deleteGroup', groupController.deleteGroup);

module.exports = router;