const express = require('express')
const bread = require('../models/bread.js')
const breads = express.Router()
const Bread = require('../models/bread.js')
const breadSeeds = require('../models/breads_seed.js')

// INDEX
breads.get('/', (req, res) => {
    Bread.find()
        .then(foundBreads => {
            res.render('index', {
                breads: foundBreads,
                title: 'Index Page'
            })
        })
})

// NEW
breads.get('/new', (req, res) => {
    res.render('new')
})

// CREATE MANY
breads.get('/data/seed', (req, res) => {
    Bread.insertMany(breadSeeds)
        .then(createdBreads => {
            res.redirect('/breads')
        })
})

// EDIT 
breads.get('/:id/edit', (req, res) => {
    Bread.findById(req.params.id)
        .then(foundBread => {
            res.render('edit', {
                bread: foundBread
            })
        })
})

// SHOW
breads.get('/:id', (req, res) => {
    Bread.findById(req.params.id)
        .then(foundBread => {
            res.render('show', {
                bread: foundBread
            })
        })
        .catch(err => {
            res.render('404')
        })
})

// CREATE
breads.post('/', (req, res) => {
    if (!req.body.image) {
        req.body.image = undefined
    }
    if (req.body.hasGluten === 'on') {
        req.body.hasGluten = true
    } else {
        req.body.hasGluten = false
    }
    Bread.create(req.body)
    res.redirect('/breads')
})



// DELETE
breads.delete('/:id', (req, res) => {
    Bread.findOneAndDelete(req.params.id)
        .then(deletedBread => {
            res.status(303).redirect('/breads')
        })
})

// UPDATE
breads.put('/:id', (req, res) => {
    if (req.body.hasGluten === 'on') {
        req.body.hasGluten = 'true'
    } else {
        req.body.hasGluten = 'false'
    }
    Bread.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(updatedBread => {
            console.log(updatedBread)
            res.redirect(`/breads/${req.params.id}`)
        })
})

module.exports = breads