
const typeDefinitions = `
type User {
  email: String
  password: String
}
type Login {
 token: String
 message: String
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

type Event{
 name: String
 section: String
 schedule: Schedule
 price: String
}

type Mutation {
  checkUser(email: String, password: String): Login
  addUser(email: String, password: String): User
}

type Query {
  getItems(token: String, title: String): [Event]
}

schema {
  query: Query
  mutation: Mutation
}
`;

module.exports = [typeDefinitions];