
const typeDefinitions = `
type User {
  email: String
  password: String
}

type UserData {
  email: String
  items: [UserItemQ]
}
type Login {
 token: String
 message: String
 isAdmin: Boolean
}

type Schedule {
  mon: [String]
  tue: [String]
  wed: [String]
  thu: [String]
  fri: [String]
  sat: [String]
  sun: [String]
}

type UserItemQ {
  name: String
  week: String
  items: [String]
  price: String
}

input UserItem {
  name: String
  week: String
  items: [String]
  price: String
}

type Event{
 name: String
 section: String
 schedule: Schedule
 price: String
}

type Mutation {
  checkUser(email: String, password: String): Login
  addUser(email: String, password: String): User
  updateUserItems(token: String, userItems: [UserItem]): String
  deleteEventItem(token: String, name: String): String
}

type Query {
  getItems(token: String, title: String): [Event]
  getAccountData(token: String): UserData
}

schema {
  query: Query
  mutation: Mutation
}
`;

module.exports = [typeDefinitions];