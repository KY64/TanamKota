const express = require('express'),
      router = express.Router(),
      sensor = require('../controller/controller')

router
    .get('/data/sensor', sensor.listSensor)
    .delete('/data/sensor', sensor.deleteAllSensor)
    .post('data/sensor', sensor.addSensor)

router
    .get('/data/sensor/:sensor', sensor.selectSensor)
    .delete('/data/sensor/:sensor', sensor.deleteSensor)
    .put('/data/sensor/:sensor', sensor.updateSensor)

module.exports = router