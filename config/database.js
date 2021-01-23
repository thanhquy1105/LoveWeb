const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(
      "mongodb+srv://thanhquy1105:4c5TAtYMB7nqY3P4@loveapp.o10yy.mongodb.net/loveapp?retryWrites=true&w=majority" ||
        process.env.MONGODB_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      }
    )
    .then((con) => {
      console.log(
        `MongoDB Database connected with HOST: ${con.connection.host}`
      );
    });
};
module.exports = connectDatabase;
