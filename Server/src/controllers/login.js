const users = require('../utils/users')

const logIn = (req, res) =>{
    const {email, password} = req.query
    if(users[0].email === email && users[0].password === password){
        return res.status(200).json({access : true})
    }
    else return res.status(200).json({access : false})
}

module.exports = logIn;