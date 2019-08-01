const mongoose = require("mongoose"),
      model = require("../model/model"),
      sensor = mongoose.model("sensor");

exports.listSensor = (req, res) => {
  sensor
    .find({}, (err, sensor) => {
      if (err) res.send(err);
      res.json(sensor);
    })
    .sort({ time: -1 });
};

exports.addSensor = (req, res) => {
  var newSensor = new sensor(req.query);
  newSensor.save((err, sensor) => {
    if (err) res.send(err);
    res.json(sensor);
  });
};

exports.selectSensor = (req, res) => {
  sensor
    .find({ sensorName: req.params.sensor }, (err, sensor) => {
      if (err) res.send(err);
      res.json(sensor);
    })
    .sort({ time: -1 });
};

exports.updateSensor = (req, res) => {
  sensor.findOneAndUpdate(
    { sensorName: req.params.sensor },
    req.body,
    { new: true },
    (err, sensor) => {
      if (err) res.send(err);
      res.json(sensor);
    }
  );
};

exports.deleteSensor = (req, res) => {
  sensor.deleteOne({ sensorName: req.params.sensor }, (err, sensor) => {
    if (err) res.send(err);
    res.json(sensor);
  });
};

exports.deleteAllSensor = (req, res) => {
  sensor.deleteMany({}, (err, sensor) => {
    if (err) res.send(err);
    res.json(sensor);
  });
};
