const express = require("express");

const routes = express.Router();

const BookMyShows = require("../models/BookModel");

const BookMyshowCtrl = require("../controllers/BookCtrl");

routes.get("/",BookMyshowCtrl.BookMyshow);

routes.get("/addmovies",BookMyshowCtrl.AddMovies);

routes.post("/insertMovies",BookMyShows.uploadaImageFile,BookMyshowCtrl.insertMovies);

routes.get("/views",BookMyshowCtrl.Views);

module.exports = routes;