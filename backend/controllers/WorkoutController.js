const DefaultWorkout = require('../models/DefaultWorkout')

// Retrieve all default workouts
const getDefaultWorkouts = async (_, response) => {
    try {
        const workouts = await DefaultWorkout.find({}).sort({name: 1})
        response.status(200).json(workouts)
    } catch (error) {
        response.status(400).json({error: error.message})
    }
}

// Get all workouts created by a user
const getUserCreatedWorkouts = async (userId) => {

}

// Get all workouts (default + custom created)
const getAllUserWorkouts = async (userId) => {
    return await getDefaultWorkouts()
}

module.exports = {
    getDefaultWorkouts,
    getUserCreatedWorkouts,
    getAllUserWorkouts,
}