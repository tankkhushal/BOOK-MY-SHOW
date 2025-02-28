const BookMyShow = require("../models/BookModel");
const path = require('path');
const fs = require("fs");
const { query } = require("express");
const { title } = require("process");



module.exports.BookMyshow= async (req,res)=>{
    try{
        let MovieShow = await BookMyShow.find();
        return res.render('bockhome',{
            MovieShow
        })
    }
    catch(err){
        console.log("BookMyshow wrong");
        return res.redirect('back');
    }
}

module.exports.Views= async (req,res)=>{
    try{
        let MovieShow = await BookMyShow.find();
        return res.render('Views',
            MovieShow
        )
    }
    catch(err){
        console.log("Views wrong");
        return res.redirect('back');
    }
}

module.exports.AddMovies= async (req,res)=>{
    let MovieShow = await BookMyShow.find();
    // return res.render("AddMovies",{
    //     MovieShow
    // })
    try{
        return res.render('AddMovies',{
            MovieShow
        })
    }
    catch(err){
        console.log("AddMovies wrong");
        return res.redirect('back');
    }
}

module.exports.insertMovies = async (req,res)=>{
    console.log(req.body);
    console.log(req.file);

    var imageMovie = '';
    if(req.file){
        var imageMovie = BookMyShow.movieimg+"/"+req.file.filename;
        console.log(imageMovie);
    }
    req.body.image = imageMovie;

    await BookMyShow.create(req.body);
    return res.redirect("/");

}

module.exports.Views= async (req,res)=>{
    let MovieShow = await BookMyShow.find();
    try{
        return res.render('Views',{
            MovieShow
        })
    }
    catch(err){
        console.log("ViewMovies wrong");
        return res.redirect('back');
    }
}
