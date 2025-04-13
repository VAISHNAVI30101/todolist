const express = require('express');
const app = express();
const PORT = 3001;
const router = require('./routes/todo')

app.use(express.json());
app.use('/todo',router)
app.listen(PORT, () =>{
    console.log(`Server is running in port:`, PORT);
})