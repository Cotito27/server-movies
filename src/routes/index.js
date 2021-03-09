const express = require("express");
const router = express.Router();

const homeController = require('../controllers/home.controller');

router.get('/', homeController.index);
router.get('/peliculas', homeController.peliculas);
router.get('/series', homeController.series);
router.get('/temporadas', homeController.temporadas);
router.get('/popular', homeController.popular);
router.get('/search', homeController.search);
router.get('/ver/:title', homeController.watch);

module.exports = { router };
