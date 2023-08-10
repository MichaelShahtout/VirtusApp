require('dotenv').config()

const express = require('express')
const app = express()


//routes
app.get('/', (request, response) => {
    response.json({msg: "Welcome to Virtus!"})
})

app.use("/api/workouts", require("./routes/workouts"))
app.use("/api/users", require("./routes/users"))

// listen for requests
app.listen(process.env.PORT, () => {
    console.log("Listening on port 4000")
})