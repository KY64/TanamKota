const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const localTime = () => {
  let time = new Date();
  return time.toLocaleString();
};

const sensor = new Schema(
  {
    data: {
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
        enum: ["Critical", "Stable"],
        default: "Stable"
      },
      time: {
        type: String,
        immutable: true,
        default: localTime()
      }
    }
  },
  { collection: "dataSensor" }
);

const user = new Schema(
  {
    name: {
      type: String,
      // required: "Name Required",
      minlength: 2
    },
    email: {
      type: String,
      required: "Email Required",
      minlength: 4
    },
    password: {
      type: String,
      required: "Password Required",
      minlength: 4
    },
    phone: {
      type: Number,
      // required: "Phone Number Required",
      minlength: 6
    }
  },
  { collection: "dataUser" }
);

module.exports = mongoose.model("sensor", sensor);
module.exports = mongoose.model("user", user);
