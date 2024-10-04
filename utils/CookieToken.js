const gettingTOken= require('../heloer/JwtTokens')

const cookieToken=(user,res)=>{
    const token= gettingTOken(user.id)
    const options =  {
        expires:new Date(
            Date.now()+ 3*24*60*60*1000
        ),
        httpOnly:true
    }
    user.password= undefined
    res.status(200).cookie('token', token ).json({
        succes:true,
        token,
        user
 
    })
}

module.exports= cookieToken;