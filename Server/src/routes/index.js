const express = require('express')
const getCharById = require('../controllers/getCharById')
const {deleteFav, postFav} = require('../controllers/handleFavorites')
const logIn = require('../controllers/login')

const getCharByIdRouter = express.Router()
const logInRouter = express.Router()
const deleteFavRouter = express.Router()
const postFavRouter = express.Router()

getCharByIdRouter.get('/character/:id', getCharById)
logInRouter.get('/login', logIn)
postFavRouter.post('/fav', postFav)
deleteFavRouter.delete('/fav/:id', deleteFav)

module.exports = {
    getCharByIdRouter,
    logInRouter,
    deleteFavRouter,
    postFavRouter
};