const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const mongoose = require('mongoose');
const users = require("./routes/api/users");
const activities = require("./routes/api/activities");
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');
// const awskeys = require('./config/aws_')

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
  
mongoose.set('useFindAndModify', false);


// Bucket: BUCKET_NAME
// Key: file.name
// Body: file.data
// use AWS
// AWS
const aws = require('aws-sdk');
const S3_BUCKET = process.env.S3_BUCKET;
aws.config.region = 'us-west-1';

app.get('/sign-s3', (req, res) => {
  const s3 = new aws.S3();
  const fileName = req.query['file-name'];
  const fileType = req.query['file-type'];
  const s3Params = {
    Bucket: S3_BUCKET,
    Key: fileName,
    Expires: 60,
    ContentType: fileType,
    ACL: 'public-read'
  };
  
  s3.getSignedUrl('putObject', s3Params, (err, data) => {
    if (err) {
      console.log(err);
      return res.end();
    }
    const returnData = {
      signedRequest: data,
      url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`
    };
    res.write(JSON.stringify(returnData));
    res.end();
  });
});

// use bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get("/", (req, res) => {
  res.send("server is live, here we go. this is a test1");
});
  
// requiring routes
app.use("/api/users", users);
app.use("/api/activities", activities );

// initialize passport
app.use(passport.initialize());
require('./config/passport')(passport);


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
