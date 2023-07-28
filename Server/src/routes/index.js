const express = require('express')
const getCharById = require('../controllers/getCharById')
const {deleteFav, postFav} = require('../controllers/handleFavorites')
const logIn = require('../controllers/login')
const postUser = require('../controllers/postUser')


const router = express.Router()

router.get('/character/:id', getCharById)

router.get('/login', logIn)
router.post('/login', postUser)

router.post('/fav', postFav)
router.delete('/fav/:id', deleteFav)

module.exports = router;