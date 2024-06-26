const express = require('express');
const { registerUser, loginUser, shareAccount,viewSharedAccounts,revokeAccount } = require('../controllers/userController');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/share', shareAccount);
router.get('/shared',viewSharedAccounts); // Authenticated users can view shared accounts
router.post('/revoke',revokeAccount); // Only creators can revoke access



module.exports = router;
