import mongoose from "mongoose";

const productoSchema = new mongoose.Schema(
  {
    brand: { type: mongoose.Schema.Types.ObjectId, ref: "Brand", required: true },
    name: { type: String, required: true },
    image: { type: Image},
    desc: { type: String, required: true },
    ingredients: { type: array },
    activos: { type: array },
    paso: { type: String, required: true, enum: ['limpieza', 'tratamiento', 'hidratacion', 'proteccion'] },
    formato: { type: String, required: true, enum: ['crema','gel','leche','spray', 'serum', 'aceite', 'loción', 'en polvo'] },
    tipo: { type: String, required: true, enum: ['skincare', 'haircare'] },
    para: { type: String, required: true, enum: ['oleosa', 'mixta', 'seca', 'sensible'] },
    rating: { type: Number, min: 1, max: 5  }, //como hacemos q funque estoooooo??!!
    compra: { type: Array },
  },
  { timestamps: true }
);

const Producto = mongoose.model("Producto", productoSchema);
export default Producto;