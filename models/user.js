const mongoose = require("mongoose");

//Define o schema do usuário
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  isActive: {
    type: Boolean,
    required: true,
    default: true,
  },
});

module.exports = mongoose.model('User', userSchema);
