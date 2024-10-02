const JWT = require('jsonwebtoken')

const GetJsonWebToken = (userid) => {

    return JWT.sign({ userid: userid }, process.env.JWT_SECRET, { expiresIn: '1 day' })
}

module.exports=GetJsonWebToken