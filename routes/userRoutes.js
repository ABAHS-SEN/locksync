const express = require('express');
const { registerUser, loginUser, shareAccount, viewSharedAccounts, revokeAccount } = require('../controllers/userController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/share', auth(), shareAccount);
router.get('/shared', auth(), viewSharedAccounts);
router.post('/revoke', auth(), revokeAccount);

module.exports = router;
