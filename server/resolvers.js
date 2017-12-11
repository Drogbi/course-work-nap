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
        return {token: 'token-' + email, message: 'Log in success', isAdmin: userData.isAdmin}
      } else {
        return {message: 'Log in failed'}
      }
    },
    updateUserItems: async function updateUserItems(_, {token, userItems}, ctx) {
      let userData;
      console.log(userItems);
      const user = new ctx.constructor.User();
      await user.findUserForUpdate(token.split('token-')[1], userItems);
      if (userData) {
        return 'Success'
      } else {
        return 'Failed'
      }
    },
    deleteEventItem: async function deleteEventItem(_, {token, name}, ctx) {
      const eventItem = new ctx.constructor.EventItems();
      await eventItem.findEventItemByName(token.split('token-')[1], name);
      return 'Success'
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
    },
    getAccountData: async function getAccountData(_, {token}, ctx) {
      let userData;
      const user = new ctx.constructor.User();
      await user.getUser(token.split('token-')[1])
        .then((data) => {
          console.log(data);
          userData = data;
        });
      if (userData) {
        return userData
      } else {
        return {message: 'Log in failed'}
      }
    }
  }
};

module.exports = resolveFunctions;