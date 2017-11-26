const {createNote} = require("./db/utils/uitls");

const resolveFunctions = {
  Mutation: {
    checkUser: async function checkUser(_, {email, password}, ctx) {
      console.log(ctx.token);
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
  }
};

module.exports = resolveFunctions;