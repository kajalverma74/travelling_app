
const jwt = require('jsonwebtoken');
require('dotenv').config();
const authenticate = (req, res, next) => {

    const authorization = req.headers.authorization
    if(!authorization) return res.status(401).json({ error: 'Token Not Found' });

    const token = req.headers.authorization.split(' ')[1];
    if(!token) return res.status(401).json({ error: 'Unauthorized' });

    try{
        
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded

        next();

    }catch(err){
        console.error(err);
        
        res.status(401).json({ error: 'Invalid token' });
    }
}

function generateToken(userId) {
    const token = jwt.sign({ userId }, secret, { expiresIn: '8h' });
    return token;
}

module.exports = {authenticate, generateToken};
