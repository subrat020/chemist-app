const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const medicinesRoutes = require('./routes/medicines');

const app = express();

mongoose.connect('mongodb://localhost:27017/medicineDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(bodyParser.json());
app.use('/medicines', medicinesRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
