const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());

const mongoURI = 'mongodb://localhost:27017/nas_forms'; // Updated database name (verify host connection on MongoDB)
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.error('MongoDB connection error:', err));
const formSchema = new mongoose.Schema({ // Schema defined 
  name: String,
  description: String,
});
const Form = mongoose.model('Form', formSchema); // Model created 
app.get('/', (req, res) => {
  res.send('Welcome to the NAS Forms API!');
}); // routes sendout 

app.post('/forms', async (req, res) => {
  try {
    const newForm = new Form(req.body);
    await newForm.save();
    res.status(201).json(newForm);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/forms', async (req, res) => {
  try { // routes to get all forms 
    const forms = await Form.find();
    res.status(200).json(forms);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Starting the server here, locally, hosted on HTTP url using REST APIs on MongoDB
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
