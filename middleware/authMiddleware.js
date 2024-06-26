const jwt = require('jsonwebtoken');
const User = require('../models/User');

const auth = (roles = []) => {
  if (typeof roles === 'string') {
    roles = [roles];
  }

  return [
    (req, res, next) => {
      const token = req.cookies.token;
      if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });

      try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
      } catch (err) {
        res.status(401).json({ msg: 'Token is not valid' });
      }
    },
    async (req, res, next) => {
      const user = await User.findById(req.user.userId);
      if (!user || (roles.length && !roles.includes(user.role))) {
        return res.status(403).json({ msg: 'Access denied' });
      }
      req.user.role = user.role;
      next();
    }
  ];
};

module.exports = auth;
