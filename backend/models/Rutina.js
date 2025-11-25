import mongoose from "mongoose";

const rutinaSchema = new mongoose.Schema(
  {
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String, required: true },
    time: { type: String, required: true, enum: ['día', 'noche'] },
    type: { type: String, required: true, enum: ['skincare', 'haircare'] },
    products: { type: Array },
  },
  { timestamps: true }
);

const Rutina = mongoose.model("Rutina", rutinaSchema);
export default Rutina;