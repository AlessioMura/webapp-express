const express = require('express')
const server = express()
const FilmsRouter = require('./routes/films')

const PORT = process.env.PORT || '3003'
const HOST = process.env.HOST || 'http://localhost'


server.use('/api/films', FilmsRouter)


server.get('/', (req, res) => {
    res.send(`Server is running`)
})





server.listen(PORT, () => {
    console.log(`Server is listening on ${HOST}:${PORT}`);

})