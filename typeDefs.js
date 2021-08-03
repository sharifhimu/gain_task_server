const { gql } = require("apollo-server-express");
//Queries
const typeDefs = gql`
  type Post {
    id: ID
    Name: String
    Email: String
    Phone: String
    Dob: String
    Subjects: [String]
  } 
  type Query {
    hello(id:[ID]): [Post]
    getAll: [Post]
  }
  input PostInput {
    Name: String
    Email: String
    Phone: String
    Dob: String
    Subjects: [String]
  }
  input PostSubject {
    id: String
    Subjects: [String]
  }
  type Mutation {
    createPost(post: PostInput): Post
    updatePost(id: String, post: PostInput): Post
    updateSubject( post: PostSubject): Post
    deletePost(id: String): String
  }
`;

module.exports = typeDefs;