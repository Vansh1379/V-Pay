import jwt from "jsonwebtoken";

const jwtSecret = process.env.JWT_SECRET;

const authMiddleware = (req, res, next) => {
    const authHeaader = req.headers.authorization;
    console.log(authHeaader);

    if (!authHeaader || !authHeaader.startsWith('Bearer ')) {
        res.status(403).json({
            msg: "Wrong Token Send Bruh!"
        })
    }

    const token = authHeaader.split(' ')[1];

    console.log(token);

    try {
        const decode = jwt.verify(token, jwtSecret);
        console.log(decode);
        /*Assigning User ID: The decoded variable holds the payload data, which typically includes information like userId. By assigning req.userId = decoded.userId;, the middleware is adding the userId from the token to the request object.

        Accessing User ID in Routes: By doing this, any subsequent middleware or route handlers can access req.userId to know which user made the request. This is useful for authorization and other operations that need to know the user context.*/
        // error
        console.log(decode.userID);
        if (decode.userId) {
            req.userId = decode.userID;
            next();
        }
        console.log(req.userId);
    }
    catch (e) {
        res.status(403).json({
            msg: "Wrong Headers or Token send cannot verify you !"
        })
        console.log(e);
    }
}

export default authMiddleware;