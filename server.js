const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = require("./app");
const mongoose = require("mongoose");
process.on("uncaughtException", (err) => {
  console.log(err.name, err.message);
  console.log("UNCAUGHT EXCEPTION! Shutting down...");
  process.exit(1);
});


const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
//process.env.DATABASE_LOCAL
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    //useCreateIndex: true,
    useUnifiedTopology: true, //to avoid deprecation warning
  })
  .then(() => console.log(`DB is connected`)); //.catch(err=>console.log(err));

console.log(app.get("env"));
const port = 7000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
//unhandeled rejections have been dealt with
process.on("unhandledRejection", (err) => {
  console.log(err.name, err.message);
  console.log("UNHANDLED REJECTION! Shutting down...");
  server.close(() => {
    process.exit(1);
  });
});
//uncaught exceptions have been dealt with
