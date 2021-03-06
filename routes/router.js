const express = require('express'),
      app = express(),
      model = require('../controller/controller')

app.route('/')
   .get(model.isLogin)

app.route('/api/data/user')
   .get(model.listUser)
   .post(model.addUser)

app.route('/api/data/sensor')
   .get(model.listSensor)
   .delete(model.deleteAllSensor)
   .post(model.addSensor)

app
    .route('/api/data/sensor/:sensor')
    .get(model.selectSensor)
    .delete(model.deleteSensor)
    .put(model.updateSensor)

module.exports = app