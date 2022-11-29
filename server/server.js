const express = require('express');
const app = express();

require('dotenv').config();

app.use('/', require('./routes/user'))
// app.get("/api", (req, res) => {
//     res.json({"users": ["userOne", "userTwo", "userThree"]});
// });

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
});