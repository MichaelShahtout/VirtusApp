require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose') // view backend/.env for credentials
const app = express()


//routes
app.get('/', (request, response) => {
    response.json({msg: "Welcome to Virtus!"})
})

// Workout API
app.use("/api/workouts", require("./routes/workouts"))
//app.use("/api/users", require("./routes/users"))

mongoose.connect(process.env.MONGO_URI).then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
        console.log("Connected to database; Listening on port 4000")
    })
}).catch((error)=> {
    console.log(error)
})