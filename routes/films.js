const express = require('express')
const router = express.Router()
const connection = require('../database/connection')

router.get('/', (req, res) => {

    const sql = `SELECT * FROM movies`

    connection.query(sql, (err, results) => {
        res.json({
            films: results
        })
    })
})


router.get('/:id', (req, res) => {

    const id = req.params.id
    const sql = `SELECT * FROM movies WHERE id = ?`


    connection.query(sql, [id], (err, results) => {
        if (err) return res.serverStatus(500).json({ err: err })

        res.json({
            films: results[0]
        })
    })




})




module.exports = router