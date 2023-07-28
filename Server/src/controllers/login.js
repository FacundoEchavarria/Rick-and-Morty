const {User} = require('../DB_connection')

const logIn = async(req, res) =>{
    const {email, password, name} = req.query
    if(!email || !password || !name) return res.status(400).json({message: 'Faltan datos'})

    try {
        const findUser = await User.findOne({
            where:{
                email: email,
            }
        });

        if(findUser){
            if(findUser.password === password)  return res.status(200).json({access : true})
            else return res.status(403).json({message: 'Contraseña incorrecta'})
        }else{
            return res.status(404).json({message: 'Usuario no encontrado'})
        }
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

module.exports = logIn;