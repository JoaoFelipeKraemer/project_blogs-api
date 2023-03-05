const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const auth = async (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).send({ message: 'Token not found' });
    }

    try {
    const payload = jwt.verify(token, secret);
   
    req.user = payload;

   return next();
    } catch (e) {
       return res.status(401).send({ message: 'Expired or invalid token' });
    }
};

module.exports = auth;