const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000; 
const router = require('./routes/route')

app.use(express.json());

// import routes
app.use("/restrau",router)

app.listen(PORT , () => {
    console.log("Listening on port 5000");
})