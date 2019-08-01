const express = require('express'),
      app = express(),
      sensor = require('../controller/controller')

app.route('/data/sensor')
   .get(sensor.listSensor)
   .delete(sensor.deleteAllSensor)
   .post(sensor.addSensor)

app
    .get('/data/sensor/:sensor', sensor.selectSensor)
    .delete('/data/sensor/:sensor', sensor.deleteSensor)
    .put('/data/sensor/:sensor', sensor.updateSensor)

module.exports = app