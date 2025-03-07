import jwt from 'jsonwebtoken';

function authMiddleware (req, res, next){
    const token = req.header('authorization');

    if(!token){
        return res.status(401).json({message: 'No token, authorization denied'});
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) =>{
        if(err){
            return res.status(401).json({message: 'Token is not valid'});
        }
        req.userId = decoded.id;
        next();
    })
}

export default authMiddleware;