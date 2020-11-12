// Defining MongoDB NoSQL Model for Workout DB
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date
  },

  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Exercise Type is Required"
      },
    
      name: {
        type: String,
        trim: true,
        required: "Exercise Name is Required"
      },
    
      duration: Number,
      weight : Number,
      reps: Number,
      sets: Number,
      distance: Number
    }
  ]
}
);

//Custom Method to setup the Date
WorkoutSchema.methods.setDate = function(){
  this.day = Date.now();
}

// Using Virtual to calculate the totalDuration of exercises within the last workout
WorkoutSchema.virtual('totalDuration').get(function(){
  let totalDuration = 0;
  for (let i = 0; i < this.exercises.length; i++) {
    totalDuration = totalDuration + this.exercises[i].duration;
  }
  return totalDuration;
})

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
