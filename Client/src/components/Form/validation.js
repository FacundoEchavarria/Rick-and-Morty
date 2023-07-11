const validation = (user) =>{
    const validatioUserName = new RegExp(/^[a-zA-Z]+$/)
    const validatioEmail = new RegExp(/\S+@\S+\.\S+/)
    const validatioPassword = new RegExp(/\d/)
    let incorrect = {};
    
    if((user.userName.length <= 4 || user.userName.length >= 16) && user.userName){
        incorrect.userName = '*The user name must have between 6 and 15 characters.'
    }
    else if(!validatioUserName.test(user.userName) && user.userName){
        incorrect.userName = '*The user name must only be letters.'
    }

    if(user.email.length > 35 && user.email){
        incorrect.email = '*The email must be shorter thar 35 characters.'
    }
    else if(!validatioEmail.test(user.email) && user.email){
        incorrect.email = '*You need a valid email.'
    }
    else if(user.email.length === '' && user.email){
        incorrect.email = '*You can´t leave this empty.'
    }

    if(!validatioPassword.test(user.password) && user.password){
        incorrect.password = '*The password must have at leat one number.'
    }
    else if((user.password.length < 6 || user.password.length > 10) && user.password){
        incorrect.password = '*The user passwrord must have between 6 and 10 characters.'
    }
    return incorrect
}


export default validation