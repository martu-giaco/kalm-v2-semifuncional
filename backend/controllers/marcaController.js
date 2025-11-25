import Marca from "../models/Marca.js";
import User from "../models/User.js";

export const createMarca = async (req, res) => {
  try {
    const { name, time, type, products } = req.body;

    const marca = await Marca.create({
      name, time, type, products,
      author: req.userId
    });

    await User.findByIdAndUpdate(req.userId, {
      $push: { marcas: marca._id }
    });

    res.status(201).json(marca);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getUserMarcas = async (req, res) => {
  const marcas = await Marca.find({ author: req.params.userId }).sort({ createdAt: -1 });
  res.json(marcas);
};

export const updateMarca = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, time, type, products } = req.body;

    const updatedMarca = await Marca.findByIdAndUpdate(
      id,
      { name, time, type, products },
      { new: true }
    );

    if (!updatedMarca) {
      return res.status(404).json({ error: 'Marca no encontrada' });
    }

    res.json(updatedMarca);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};