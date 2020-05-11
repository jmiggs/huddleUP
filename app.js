const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const mongoose = require('mongoose');
const users = require("./routes/api/users");
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}
// mongoose db setup
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

// use bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//run test on localhost:5000
app.get("/", (req, res) => {
  res.send("server is live, here we go. this is a test1");
});
  
// requiring routes
app.use("/api/users", users);

// initialize passport
app.use(passport.initialize());
require('./config/passport')(passport);


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
