const express = require('express');
const session=require('express-session');
const bodyParser = require('body-parser');
const cors =require('cors');
const massive = require('massive');
require('dotenv').config();
const app = express();
const checkForSession = require('./checkForSession');

const path = require('path');

// app.use(cors({
//     origin: 'http://localhost:3000',
//     credentials: true
// }));
app.use(bodyParser.json());

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    secure: false
}));

app.use(checkForSession);

app.use(express.static(`${__dirname}/../build`));//////////////run  npm run build in houser folder and include this line, you have to run this npm run build everytime you make a change in the react.


massive(process.env.CONNECTION_STRING).then(db => {         
    app.set('db',db);
}).catch(err => console.error(err));


 const login_Controller= require('./controllers/login_controller');
 const Trigger_Controller=require('./controllers/trigger_controller');
 const encounter_Controller=require('./controllers/encounter_controller');

// app.get('/api/users',Property_Controller.getUsers);
app.post('/api/login', login_Controller.login);
app.get('/api/me', login_Controller.getUserInfo);
app.post('/api/logout',login_Controller.logout);
app.get('/api/triggers',Trigger_Controller.getTriggers);
app.get('/api/:triggersourcedataid',Trigger_Controller.getTrigger);
app.put('/api/:triggersourcedataid',Trigger_Controller.updateTriggerStatus);
app.post('/api/ae/:triggersourcedataid',Trigger_Controller.createAdverseEvent);
app.get('/api/comments/:triggersourcedataid',Trigger_Controller.getComment);
app.post('/api/comments/:triggersourcedataid',Trigger_Controller.createComment);
app.delete('/api/comments/:triggersourcedataid/:commentid',Trigger_Controller.deleteComment);
app.get('/api/encounter/:encounterid',encounter_Controller.getEncounter);
app.get('/api/encountertriggers/:mrn',encounter_Controller.getTriggersbyEncounter);
app.get('/api/yourtriggers/:username',Trigger_Controller.getYourTriggers);
app.put('/api/assign/:triggersourcedataid', Trigger_Controller.updateTriggerUsername);

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '../build/index.html'));
});             //put this in the end of all the endpoint, so those axios api call would work



const port = process.env.PORT || 8888;
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );