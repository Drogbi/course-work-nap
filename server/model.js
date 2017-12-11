const Mongoose = require('mongoose');

const UserSchema = Mongoose.Schema({
  email: String,
  password: String,
  items: [{
    name: String,
    week: String,
    items: [String],
    price: String
  }],
  isAdmin: Boolean,
});

const EventItemSchema = Mongoose.Schema({
  name: String,
  section: String,
  schedule: {
    mon: [String],
    tue: [String],
    wed: [String],
    thu: [String],
    fri: [String],
    sat: [String],
    sun: [String]
  },
  price: String
});

const UserModel = Mongoose.model('User', UserSchema);
const EventItemModel = Mongoose.model('EventItem', EventItemSchema);

module.exports = {EventItemModel, UserModel};