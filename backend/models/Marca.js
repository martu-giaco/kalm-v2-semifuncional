// backend/models/Marca.js
import mongoose from "mongoose";

const marcaSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    pfp: { type: Image },
    email: { type: String, required: true, unique: true },

    prods: [{ type: mongoose.Schema.Types.ObjectId, ref: "Producto" }],
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "Marca" }],
  },
  { timestamps: true } // ✅ esto va fuera del objeto anterior
);

const Marca = mongoose.models.Marca || mongoose.model("Marca", marcaSchema);
export default Marca;

