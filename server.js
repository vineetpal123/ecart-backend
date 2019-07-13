const express = require('express');
const app     = express();
const mysql = require('mysql');
const async = require('async');
const path = require('path');
const bodyParser = require('body-parser');
const defaultRouter = require('./routes/default');
const userRouter    = require('./routes/user');
const courseRouter    = require('./routes/course');
const topicRouter    = require('./routes/topic');
const morgan = require('morgan');
const fs = require('fs');
const cors = require('cors');
var bunyan = require('bunyan');
//Database
const db = require('./config/database.js'); 

var logger = bunyan.createLogger({
  name: "api-logger",
  streams: [{
    path: 'detail-log.txt',
    level: 'info'
  }]
})

db
  .authenticate()
  .then(() => {
    logger.info({name: "connection made"})
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
    logger.info({name: "connection made"})
  });



var fileStream = fs.createWriteStream(__dirname+"/user-request.txt", {flags: 'a'})


 const PORT = process.env.PORT || 8080 
 var server = app.listen(PORT, console.log(`Server started on port ${PORT}`))
// use for track user request
app.use(morgan('combined', {stream: fileStream}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use('/', defaultRouter)
//enables cors
app.use(cors({  
  'origin': '*',
  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE'  
}));

// authenticate middleware
function authenticate(req, res, next){
    
    
    if (req.headers['username'] == 'admin'){
        next()
    }else{        
        return res.status(501).json({message:'Authorization Failed'})
    }
    
}
// use error handler
// app.use((req, res, next) => {
//   const error = new Error('Not Found')
//   error.status = 400;
//   next(error)
// })

// app.use((error, req, res, next) => {
  
//   console.log(error)
//   res.json({
//     error: {
//       message:error.message
//     }
//   })
//   next()
// })

// register middleware
app.use('/', authenticate, userRouter)
app.use('/', authenticate, courseRouter)
app.use('/', authenticate, topicRouter)

