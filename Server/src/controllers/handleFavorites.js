
var myFavorites = [];

const postFav = (req, res) =>{
    let character = req.body
    myFavorites.push(character)
    return res.status(200).json(myFavorites)
}

const deleteFav = (req, res) =>{
    const {id} = req.params;
    myFavorites.filter(fav => fav.id !== parseInt(id))

    return res.status(200).json(myFavorites)
}

module.exports = {
    postFav,
    deleteFav
}