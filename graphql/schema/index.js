const { buildSchema } = require('graphql');

module.exports = buildSchema(`
    type Action {
        _id: ID!
        userId: String!
        area: String!
        timestamp: String!
    }

    input ActionInput {
        userId: String!
        area: String!
    }

    type UserData {
        _id: ID!
    }

    type RootQuery {
        actions: [Action!]!
        login(): UserData!
    }

    type RootMutation {
        createAction(actionInput: ActionInput): Action!
    }

    schema: {
        query: RootQuery,
        mutation: RootMutation
    }
`);