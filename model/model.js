const mongoose = require('mongoose'),
      Schema = mongoose.Schema

const localTime = () => {
    let time = new Date()
    return time.toLocaleString()
}

const sensor = new Schema({
    sensorName: {
        type: String,
        required: "Required Sensor Name",
        minlength: 2
    },
    value: {
        type: Number,
        immutable: true,
        required: "Undefined value",
        default: 0
    },
    status: {
        type: String,
        enum: ["Critical","Stable"],
        default: "Stable"
    },
    time: {
        type: String,
        immutable: true,
        default: localTime()
    }
}, {collection: 'dataSensor'})

module.exports = mongoose.model("sensor", sensor)