const Post = require("./Post");

let arr = [
    {Name: 'John Doe1', Email: 'john1@test.com', Phone: '+12345678', Dob: '01-01-2010', Subjects: [ 'Bangla', 'English']  },
    {Name: 'John Doe2', Email: 'john2@test.com', Phone: '+12345678', Dob: '01-01-2011', Subjects: [ 'Math', 'Physics' ]  },
    {Name: 'John Doe3', Email: 'john3@test.com', Phone: '+12345678', Dob: '01-01-2012', Subjects: [ 'Bangla', 'English']  },
    {Name: 'John Doe4', Email: 'john4@test.com', Phone: '+12345678', Dob: '01-01-2013', Subjects: [ 'Math', 'Physics' ]  },
]

//Resolvers
const resolvers = {
  Query: {
    hello: () => {
      return arr ;
    },
    getAll: async () => {
      return await Post.find();
    },
  },
  Mutation: {
    createPost: async (parent, args, context, info) => {
      const { Name, Email, Phone, Dob, Subjects } = args.post;
      const post = await new Post({ Name, Email, Phone, Dob, Subjects }).save();
      return post;
    },
    updatePost: async (parent, args, context, info) => {
      const { id } = args;
      const { Name, Email, Phone, Dob, Subjects } = args.post;
      const post = await Post.findByIdAndUpdate(
        id,
        { Name, Email, Phone, Dob, Subjects },
        { new: true }
      );
      return post;
    },
    updateSubject: async (parent, args, context, info) => {
      // const { id } = args;
      const { Subjects, id } = args.post;
      const post = await Post.findByIdAndUpdate(
        id,
        { Subjects },
        { new: true }
        // { $set : { "Subjects": Subject } },
        // { multi: true, useFindAndModify: true }
      );
      return post;
    },
    deletePost: async (parent, args, context, info) => {
      const { id } = args;
      await Post.findByIdAndDelete(id);
      return "Deleted";
    },
  },
};
module.exports = resolvers;