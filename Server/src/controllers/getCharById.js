const axios = require('axios')
const URL = "https://rickandmortyapi.com/api/character/"

const getCharById = (req, res) =>{
    const {id} = req.params
    axios(`${URL}/${id}`)
        .then((response)=>{
            const data = response.data
            if(data.error){
                res.status(404).json({message: 'Not found'})
            }
            else {
                const character = {
                    id: id,
                    name: data?.name,
                    gender: data?.gender,
                    species: data?.species,
                    origin: data?.origin?.name,
                    image: data?.image,
                    status: data?.status,
                }
                res.status(200).json(character)
            }
        })
        .catch(error =>{
            res.status(500).send(error.message)
        })
}

module.exports = getCharById;

// var axios = require('axios')

// const getCharById = (res, id) => {
//     axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(response => {
//         const data = response.data
//         const character = {
//             id: id,
//             name: data?.name,
//             gender: data?.gender,
//             species: data?.species,
//             origin: data?.origin?.name,
//             image: data?.image,
//             status: data?.status,
//         }
//         res.writeHead(200, {"Content-Type":"application/json"})
//         res.end(JSON.stringify(character))
//     })
//         .catch(error =>{
//         res.writeHead(404, {"Content-Type":"text/plain"})
//         res.end(error.message)
//     })
    
// }


// module.exports = getCharById
