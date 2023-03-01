const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')
const breadSeeds = require('../models/breads_seed.js')
const Baker = require('../models/baker.js')

// INDEX
breads.get('/', (req, res) => {
    Bread.find()
        .populate('baker')
        .then(foundBreads => {
            res.render('index', {
                breads: foundBreads,
                title: 'Index Page'
            })
        })
})

// NEW
breads.get('/new', (req, res) => {
    Baker.find()
        .then(foundBakers => {
            res.render('new', {
                bakers: foundBakers
            })
        })
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
    Baker.find()
        .then(foundBakers => {
            Bread.findById(req.params.id)
                .then(foundBread => {
                    res.render('edit', {
                        bread: foundBread,
                        bakers: foundBakers
                    })
                })
        })
})

// SHOW
breads.get('/:id', (req, res) => {
    Bread.findById(req.params.id)
        .populate('baker')
        .then(foundBread => {
            res.render('show', {
                bread: foundBread
            })
        })
        .catch(err => {
            res.render('404', { msg: 'Could not find bread' })
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
        .then(() => {
            res.redirect('/breads')
        })
        .catch(err => {
            res.render('404', { msg: 'Could not create bread' })
        })
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