
var myFavorites = [];

const postFav = (req, res) =>{
    let character = req.body

    if (Object.keys(character).length > 0) {
        
        myFavorites.push(character);
    }

    return res.status(200).json(myFavorites)
}

const deleteFav = (req, res) => {
    const { id } = req.params;
    myFavorites = myFavorites.filter((fav) => fav.id !== id);

    return res.status(200).json(myFavorites);
};

module.exports = {
    postFav,
    deleteFav
}