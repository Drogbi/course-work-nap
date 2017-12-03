const {createNote} = require("./db/utils/uitls");

const resolveFunctions = {
  Mutation: {
    checkUser: async function checkUser(_, {email, password}, ctx) {
      let userData;
      const user = new ctx.constructor.User();
      await user.findUser(email, password)
        .then((data) => {
          userData = data;
        });
      if (userData) {
        return {token: 'token-' + email, message: 'Log in success'}
      } else {
        return {message: 'Log in failed'}
      }
    },

    addUser: function addUser(root, data, ctx) {
      createNote(data);
      return {email: data.email, password: data.password};
    }
  },
  Query: {
    getItems: async function getItems(_, {token, title}, ctx) {
      let itemsData;
      const eventItems = new ctx.constructor.EventItems();
      await eventItems.findEventItems(title.toLowerCase())
        .then((data) => {
          itemsData = data;
        });
      if (itemsData) {
        return itemsData;
      } else {
        return {error: 'Error to fetch items'}
      }
    }
  }
};

module.exports = resolveFunctions;