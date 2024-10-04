const prisma= require('../prisma/index')
const cookietoken= require('../utils/CookieToken')

// user signup

exports.signup= async (req,res,next)=>{
    try {
        const {name,email,password}=req.body

        if(!name|| !email|| !password)
            throw new Error(' please provide me your details')

        const user= await prisma.user.create({
            data:{
                name,
                email,
                password
            }
        })

        cookietoken(user,res)
    } catch (error) {
        throw new Error(error)
    }
}