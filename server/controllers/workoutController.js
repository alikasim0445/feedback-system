const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')

// get all workouts
const getWorkouts = async (req, res) => {
  // const user_id = req.user._id

  const workouts = await Workout.find({}).sort({createdAt: -1})

  res.status(200).json(workouts)
}

// get a single workout
const getWorkout = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such workout'})
  }

  try{
    const workout = await Workout.findById(id)

    if (!workout) {
      return res.status(401).json({error: 'No such workout'})
    }
    
    res.status(200).json(workout)
    }catch(error){
       res.status(500).json({message: "Server error"})
    }
}


// create new workout
const createWorkout = async (req, res) => {
  const { sector, office, desk, rate, phone, comment } = req.body;

  const emptyFields = [];

  if (!sector) {
    emptyFields.push('sector');
  }
  if (!office) {
    emptyFields.push('office');
  }
  if (!desk) {
    emptyFields.push('desk');
  }
  if (!rate) {
    emptyFields.push('rate');
  }
  
  if (emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all the fields', emptyFields });
  }

  try {
    // const user_id = req.user._id;
    const workout = await Workout.create({ sector, office, desk, rate, phone, comment });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// delete a workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(401).json({error: 'No such workout'})
  }

  try{
    const workout = await Workout.findOneAndDelete({_id: id})

    if (!workout) {
      return res.status(400).json({error: 'No such workout'})
    }

    res.status(200).json(workout)
    }catch(error){
      res.status(500).json({message: 'Server error'})
    }
}

// update a workout
const updateWorkout = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such workout'})
  }

  const workout = await Workout.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!workout) {
    return res.status(400).json({error: 'No such workout'})
  }

  res.status(200).json(workout)
}


module.exports = {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout
}