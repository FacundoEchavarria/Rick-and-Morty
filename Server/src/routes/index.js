const express = require('express')
const getCharById = require('../controllers/getCharById')
const {deleteFav, postFav} = require('../controllers/handleFavorites')
const logIn = require('../controllers/login')

const getCharByIdRouter = express.Router()
const logInRouter = express.Router()
const deleteFavRouter = express.Router()
const postFavRouter = express.Router()
const router = express.Router()

router.get('/character/:id', getCharById)
router.get('/login', logIn)
router.post('/fav', postFav)
router.delete('/fav/:id', deleteFav)

module.exports = router;