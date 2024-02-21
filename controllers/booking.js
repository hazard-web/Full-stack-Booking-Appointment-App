const User = require('../models/user');
const path = require('path');
const express = require('express');
const { JSON } = require('sequelize');




exports.getAppointmentPage = (req,res,next) => {
    res.sendFile(path.join(__dirname,'..','public', 'views','BookingApp.html'));
     
}

exports.getAppointments = (req, res, next) => {
   
   


   
}


exports.postRegister = (req,res,next) => {
     
    let appointment = {
        name: req.body.name,
        email: req.body.email,
        phone:req.body.phone
    }

    User.create({
        name: appointment.name,
        email:appointment.email,
        phone:appointment.phone

    })
    .then( result => {
        console.log('Created..')
       res.redirect('/bookingSuccess');
    })
    .catch( err => {
        res.send("Use another email or number .")
       // res.sendStatus(500).json(err)
        console.log(err)
    });

   
}

exports.getBookingSuccess = ( req, res, next) => {
  res.send('You Successfully Registered')
  
}

exports.postDeleteUer = () => {

};

