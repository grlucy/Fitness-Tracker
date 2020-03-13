const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: { type: Date, default: Date.now },
  exercises: [
    {
      type: { type: String, required: true },
      name: String,
      duration: Number,
      distance: Number,
      weight: Number,
      reps: Number,
      sets: Number
    }
  ],
  totalDuration: Number
});

workoutSchema.methods.setTotalDuration = function() {
  let total = 0;
  for (let i = 0; i < this.exercises.length; i++) {
    total += this.exercises[i].duration;
  }
  this.totalDuration = total;
  return this.totalDuration;
};

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
