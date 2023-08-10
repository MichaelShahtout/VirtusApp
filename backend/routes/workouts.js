const express = require('express')
const router = express.Router()

// GET all workouts
router.get("/", (request, response) => {
    response.json({
        msg: "GET all workouts"
    })
})

// GET a single workout
router.get("/:id", (request, response) => {
    response.json({
        msg: "GET a single workout"
    })
})

// DELETE a single workout
router.delete("/:id", (request, response) => {
    response.json({
        msg: "DELETE a workout"
    })
})

// UPDATE a single workout
router.patch("/:id", (request, response) => {
    response.json({
        msg: "UPDATE a workout"
    })
})

// POST a new workout
router.post("/", (request, response) => {
    response.json({
        msg: "POST a new workout"
    })
})

module.exports = router