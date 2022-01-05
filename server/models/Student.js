const { Schema, model } = require("mongoose");

const Student = new Schema({
  uuid: { type: String, required: true },
  name: { type: String, required: true },
  city: { type: String, required: true },
  university: { type: String, required: true },
  telephone: { type: String, required: true },
  mail: { type: String, required: true },
  avatar: { type: String, required: true },
});

module.exports = model("Student", Student);
