const jwt = require('jsonwebtoken');

const jwtAuthMiddleware = (req,res,next)=>{

    const authorization = req.headers.authorization
    if(!authorization) return res.status(401).json({error:'Token Not Found'});
    //extract the jwt token from the request headers
    const token = req.headers.authorization.split(' ')[1];
    if(!token) return res.status(401).json({error:'Unauthorized'});

    try{
        //verify the JWT token
        const decoded = jwt.verify(token,process.env.JWT_SECRET);

        //ATTACH USER INFORMATION TO THE REQUEST OBJECT
        req.user=decoded
        next();

    }catch(err){
        console.error(err);
        res.status(401).json({error:'Invalid token'});

    }

}

const generateToken =(userData)=>{
    return jwt.sign(userData,process.env.JWT_SECRET,{expiresIn:30000});
}

module.exports={jwtAuthMiddleware, generateToken}