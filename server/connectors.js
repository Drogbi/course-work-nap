const {EventItemModel, UserModel} = require('./model');

class User {
  constructor() {
    this.findUser = (email, password) => {
      const user = UserModel.findOne({email, password}).exec();
      return user;
    }
  }
}

class EventItems {
  constructor() {
    this.findEventItems = (title) => {
      console.log(title);
      const eventItems = EventItemModel.find({}).exec();
      return eventItems;
    }
  }
}

module.exports = { User, EventItems };