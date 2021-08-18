const express = require('express'),
      app = express(),
      next = require('next'),
      mongoose = require('mongoose'),
      PORT = process.env.PORT || 3000,
      dev = process.env.NODE_ENV !== 'production',
      Next = next({dev}),
      handle = Next.getRequestHandler()

mongoose.connect(`mongodb://localhost:27017/test_db`, {useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false})

Next.prepare().then(() => {

    app.use(express.urlencoded({extended: true}))
    app.use(express.json())
    app.use('/', require('./routes/router'))
    app.get('*', (req,res) => {
        return handle(req,res)
    })

    // module.exports = app

    app.listen(PORT, err => {
        if(err) throw err
        console.log('Berhasil cuy koneksi ke PORT ', PORT)
    })
})
