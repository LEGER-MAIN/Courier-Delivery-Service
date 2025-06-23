require('dotenv').config()

const connectwithDB = require('./config/db');
const app = require('./app');
const cors = require('cors');


app.use(cors({
  origin: 'http://localhost:5000',
  credentials: true
}));

//connect MongoDB
connectwithDB();

app.listen(process.env.PORT,()=>{
    console.log(`Server running on ${process.env.PORT}`);
});

