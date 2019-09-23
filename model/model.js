const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const localTime = () => {
  let time = new Date();
  return time.toString();
};

const sensor = new Schema(
  {
    box: {
      type: Number,
      unique: true,
      maxlength: 2
    },
    tanaman: {
      nama: {
        type: String,
        minlength: 3
      },
      waktu_tanam: {
        type: String,
        immutable: true,
        required: true,
        default: localTime()
      },
      waktu_panen: {
        type: String,
        default: localTime()
      }
    },
    data: {
      sensor_ph: {
        value: {
          type: Array,
          required: "Define the PH value"
        },
        status: {
          type: String,
          enum: ["stable", "critical"],
          default: "stable"
        }
      },
      sensor_ppm: {
        value: {
          type: Array,
          required: "Define the PPM value"
        },
        status: {
          type: String,
          enum: ["stable", "critical"],
          default: "stable"
        }
      },
      sensor_suhuAir: {
        value: {
          type: Array,
          required: "Define the Water Temp value"
        },
        status: {
          type: String,
          enum: ["stable", "critical"],
          default: "stable"
        }
      },
      sensor_suhuUdara: {
        value: {
          type: Array,
          required: "Define the Air Temp value"
        },
        status: {
          type: String,
          type: String,
          enum: ["stable", "critical"],
          default: "stable",
          default: "stable"
        }
      },
      sensor_cahaya: {
        value: {
          type: Array,
          required: "Define the Candela value"
        },
        status: {
          type: String,
          type: String,
          enum: ["stable", "critical"],
          default: "stable",
          default: "stable"
        }
      },
      update_time: {
        type: Array,
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
