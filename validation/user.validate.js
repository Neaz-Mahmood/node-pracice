const validation  =  (schema) => async ( req, res, next ) => {
    try{
        await schema.validate(req.body, {abortEarly: false});
        next();
    }
    catch (error){
        const errors = [];
        error.inner.forEach(err => {
            const isPathExists = errors.find(e=> e.path === err.path);
            if(!isPathExists){
                errors.push({ path: err.path, massage: err.massage});
            }
        });
        return res.status(400).send(errors);
    }
}


module.exports = validation;