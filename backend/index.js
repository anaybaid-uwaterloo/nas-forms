// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Create an instance of Express
const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(bodyParser.json());

// MongoDB connection
const mongoURI = 'mongodb://localhost:27017/nas_forms'; // Update with your database name
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.error('MongoDB connection error:', err));

// Define a simple schema
const formSchema = new mongoose.Schema({
  name: String,
  description: String,
});

// Create a model
const Form = mongoose.model('Form', formSchema);

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the NAS Forms API!');
});

// Route to create a new form
app.post('/forms', async (req, res) => {
  try {
    const newForm = new Form(req.body);
    await newForm.save();
    res.status(201).json(newForm);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Route to get all forms
app.get('/forms', async (req, res) => {
  try {
    const forms = await Form.find();
    res.status(200).json(forms);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
