import mongoose from "mongoose";
const { Schema } = mongoose;

const reviewSchema = new Schema(
  {
    gigId: {
      type: String,
      required: true,
    },
    buyerId: {
      type: String,
      required: true,
    },
    stars: {
      type: Number,
      required: true,
      enum: [1, 2, 3, 4, 5],
    },
    review: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Review", reviewSchema);
