const express = require('express'),
      app = express(),
      model = require('../controller/controller')

app.route('/')
   .get(model.isLogin)

app.route('/login/auth')
   .post(model.authentication)

app.route('/api/data/user')
   .get(model.listUser)
   .post(model.addUser)

app.route('/api/data/sensor')
   .get(model.listSensor)
   .delete(model.deleteAllSensor)
   .post(model.addSensor)

app
    .route('/api/data/sensor/box/:box')
    .get(model.selectSensor)
    .delete(model.deleteSensor)
    .post(model.updateSensor)

module.exports = app