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
 
});

WorkoutSchema.methods.setDate = function(){
  this.day = Date.now();
}

WorkoutSchema.virtual('totalDuration').get(function(){
  let totalDuration = 0;

  totalDuration += this.duration;
  console.log("duration within the virtual: " + this.duration + " totalDuration: " + totalDuration );
  // this.duration.forEach(function(el){
  //   totalDuration += el.duration;
  // });
  return totalDuration;
})

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
