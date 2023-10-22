import { Schema, model, models } from "mongoose";

const FoodSchema = new Schema({
  name: {
    type: String,
  },
  image: {
    type: String,
  },
  isGood: {
    type: Boolean,
  },
});

const food = models.food || model("Food", FoodSchema);
export default food;
