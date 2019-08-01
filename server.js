const express = require('express'),
      app = express(),
      next = require('next'),
      mongoose = require('mongoose'),
      PORT = process.env.PORT || 3000,
      dev = process.env.NODE_DEV !== 'production',
      Next = next({dev}),
      handle = Next.getRequestHandler()

mongoose.connect('mongodb+srv://admin:VQm9tzcQGjtGocut@cluster0-qsi9n.gcp.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true, useCreateIndex: true})

Next.prepare().then(() => {

    app.use(express.urlencoded({extended: true}))
    app.use(express.json())
    app.use('/api', require('./routes/router'))
    app.get('*', (req,res) => {
        return handle(req,res)
    })

    // module.exports = app

    app.listen(PORT, err => {
        if(err) throw err
        console.log('Berhasil cuy koneksi ke PORT ', PORT)
    })
})