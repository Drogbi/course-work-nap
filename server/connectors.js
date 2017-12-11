const {EventItemModel, UserModel} = require('./model');

class User {
  constructor() {
    this.findUser = (email, password) => {
      const user = UserModel.findOne({email, password}).exec();
      return user;
    };
    this.getUser = (email) => {
      const user = UserModel.findOne({email}).exec();
      return user;
    };
    this.findUserForUpdate = (email, userItems) => {
      const user = UserModel.findOne({email})
        .then(user => {
          console.log(userItems);
          user.items = userItems.concat(user.items);
          console.log(user);
          user.save();
        });
      return user;
    };
  }
}

class EventItems {
  constructor() {
    this.findEventItems = (title) => {
      const eventItems = EventItemModel.find({section: title}).exec();
      return eventItems;
    }
    this.findEventItemByName = (toke, name) => {
      const eventItem = EventItemModel.findOne({name})
        .then(eventItem => {
          console.log(eventItem);
          eventItem.remove();
      });
      return eventItem;
    }
  }
}

module.exports = { User, EventItems };