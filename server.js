
const express     = require('express');
const dotenv      = require('dotenv');
const cors        = require('cors');
const bodyParser  = require('body-parser');
const morgan      = require('morgan');
const multer      = require('multer');
const helmet      = require('helmet');
const HttpErrors  = require('http-errors');

// including global config file 
   dotenv.config();

   const PORT = process.env.PORT || 3000;

 
// includes db connection
   // const db = require('./config/db.config');
   require('./config/dbSync');

// including global error handler
   const errorHandler = require('./errors/errorHandler');
   

// including routes   
   const UserRoute         = require('./routes/users'); 
   const DashRoute         = require('./routes/dashboard');
   const TransactionRoute  = require('./routes/transaction');
   const UnhandledRoute    = require('./errors/404Page');
   const ViewRoute         = require('./routes/viewsRoute');


// intialize express app
   const app = express();

// cors mechanisam 
   app.use('*',cors());

// to protect xxs attack
//    app.use(helmet({
//       contentSecurityPolicy: {
//           directives: {
//               defaultSrc: ["'self'"],
//               scriptSrc: ["'self'", "https://maps.googleapis.com", "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js",
//               "https://fonts.googleapis.com/icon?family=Material+Icons",
//               "https://unpkg.com/ionicons@5.1.2/dist/ionicons/ionicons.js"
//               ,"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
//               "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.csshttps://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css",
//               ,"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"],
//               connectSrc: ["'self'", "https://some-domain.com", "https://some.other.domain.com"],
//               styleSrc: ["'self'","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.csshttps://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css", "fonts.googleapis.com", "'unsafe-inline'"],
//               fontSrc: ["'self'", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/fontawesome.min.css","fonts.gstatic.com"],
//               imgSrc: ["'self'", "https://maps.gstatic.com", "https://maps.googleapis.com", "data:", "https://another-domain.com","https://unpkg.com/ionicons@5.1.2/dist/ionicons/ionicons.js"],
//               frameSrc: ["'self'", "https://www.google.com"]
//           }
//       },
//   }));

// for logging each request 
   app.use(morgan('dev'));
   
// for json parsing
   app.use(bodyParser.json());
   
// for url encoded data parsing
   app.use(bodyParser.urlencoded({extended:true}));
   
// for form data or multipart data parsing
   app.use(multer().array());

   

// intialize view and template engine
   app.use(express.static(__dirname + "/public/"));
   app.use('/w3/', express.static(__dirname + '/node_modules/w3-css/3/'));
   app.use('/swiper/', express.static(__dirname + '/node_modules/swiper/'));
   app.use('/jquery/', express.static(__dirname + '/node_modules/jquery/dist/'));




   app.set('views', 'views');

   app.set('view engine', 'ejs'); 

// intialize static folder
  

// for views route
   app.use('/view',ViewRoute);
// for dashboard route
   app.use('/Dash',DashRoute);
// for user route
   app.use('/User',UserRoute);
// for Transaction route
   app.use('/Transaction',TransactionRoute);

// for 404 page handler   
   app.all('*',UnhandledRoute.Response);   


   
// home route
   app.get('',async(req,res,next)=>{
        
       res.send('hi welcome home');

   });



// global error handler
   app.use(errorHandler.ErrorResponse); 


// start server
   app.listen(PORT,()=>{
       console.log(`Server is listening on port ${PORT}`);
   });

   process.on('unhandledRejection', (reason, promise) => {
      console.log('Unhandled Rejection at:', promise, 'reason:', reason);
      // Application specific logging, throwing an error, or other logic here
    });

