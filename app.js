var cors = require('cors')
const cookieparser = require("cookie-parser");
const dotEnv = require("dotenv");
const express = require('express')

const path = require('path');
const app = express();
app.use(cors())


app.use(express.json())
app.use(cookieparser());


/* -------------------------------- API URLs -------------------------------- */






/* ------------------------------- Production ------------------------------- */
const PORT = process.env.PORT || 5000;
app.use(express.static(path.join(__dirname + '/dist')));
app.get('**', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});
app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
});
