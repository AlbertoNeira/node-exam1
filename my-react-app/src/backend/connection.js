const mongoose = require('mongoose');

mongoose.set('debug', true);


const express = require('express');
const cors = require('cors')
const doctorRoutes = require('./route');

const app = express();
const PORT = 3020;



app.use(express.json());
app.use(cors()); // Enable CORS for all routes


async function connectToDatabase() {
  try {
      await mongoose.connect('mongodb+srv://tester:1234@lego-db.lssxr4t.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferCommands: false, // Disable the buffering of commands
      
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
  }
}

app.use('/', doctorRoutes);

app.listen(PORT, ()=>{
  console.log("Server has started at port",PORT,"you can Go to link from here "+`http://localhost:${PORT}`);
  connectToDatabase();
})



