const {Favorite} = require('../DB_connection')

var myFavorites = [];

const postFav = async(req, res) =>{
    let {id ,name, origin, status, image, species, gender} = req.body

    if(!id || !name || !origin || !status || !image || !species || !gender) return res.status(401).json({message: 'Faltan datos'})
    try {
        const [findFavorite, created] = await Favorite.findOrCreate({
            where:{
                id: id
            },
            defaults: {
                id,
                name,
                origin,
                status,
                image,
                species,
                gender
            }
        })
        if(created){
            const favoritos = await Favorite.findAll()
            myFavorites = [...favoritos]
            return res.status(200).json(myFavorites)
        }else{
            res.status(200).json({msg: 'Ya existe este personaje en favoritos'})
        }

    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

const deleteFav = async(req, res) => {
    const { id } = req.params;
    try {
        await Favorite.destroy({
            where:{
                id
            }
        })
        const favoritos = await Favorite.findAll()
        myFavorites = [...favoritos]
        return res.status(209).json(myFavorites)

    } catch (error) {
        return res.status(500).json({error: error.message})
    }
};

module.exports = {
    postFav,
    deleteFav
}