const {User} = require('../DB_connection')

const postUser = async(req, res) =>{
    const {email, password, name} = req.body
    if(!email || !password || !name) return res.status(400).json({message: 'Faltan datos'})

    const newUser = {
        email,
        password,
    }
    try {
        const [findUser, created] = await User.findOrCreate({
            where:{
                email: email
            },
            defaults: {
                password: password,
                name: name
            }
        })
        created ? 
        res.status(201).json({msg: 'Usuario creado correctamente'}) :
        res.status(201).json({msg: 'Ya existe un usuario con ese email'})

    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

module.exports = postUser;