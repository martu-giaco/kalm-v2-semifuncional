import Producto from "../models/producto.js";

export const createProducto = async (req, res) => {
  try {
    const { brand, name, image, desc, ingredients, activos, paso, formato, tipo, para, rating, compra } = req.body;

    const producto = await Producto.create({
      brand, name, image, desc, ingredients, activos, paso, formato, tipo, para, rating, compra,
      author: req.marcaId
    });

    await Marca.findByIdAndUpdate(req.marcaId, {
      $push: { productos: producto._id }
    });

    res.status(201).json(producto);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getMarcaProductos = async (req, res) => {
  const productos = await Producto.find({ author: req.params.marcaId }).sort({ createdAt: -1 });
  res.json(productos);
};

export const updateProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const { brand, name, image, desc, ingredients, activos, paso, formato, tipo, para, rating, compra } = req.body;

    const updatedProducto = await Producto.findByIdAndUpdate(
      id,
      { brand, name, image, desc, ingredients, activos, paso, formato, tipo, para, rating, compra },
      { new: true }
    );

    if (!updatedProducto) {
      return res.status(404).json({ error: 'Producto no encontrada' });
    }

    res.json(updatedProducto);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};