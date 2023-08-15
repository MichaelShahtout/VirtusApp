const mongoose = require('mongoose')

const Schema = mongoose.Schema

const DefaultWorkoutSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    muscleGroups: {
        type: Array,
        required: true,
    },
    workoutType: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Workout', DefaultWorkoutSchema)