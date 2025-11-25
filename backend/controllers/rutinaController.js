import Rutina from "../models/Rutina.js";
import User from "../models/User.js";

export const createRutina = async (req, res) => {
  try {
    const { name, time, type, products } = req.body;

    const rutina = await Rutina.create({
      name, time, type, products,
      author: req.userId
    });

    await User.findByIdAndUpdate(req.userId, {
      $push: { rutinas: rutina._id }
    });

    res.status(201).json(rutina);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getUserRutinas = async (req, res) => {
  const rutinas = await Rutina.find({ author: req.params.userId }).sort({ createdAt: -1 });
  res.json(rutinas);
};

export const updateRutina = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, time, type, products } = req.body;

    const updatedRutina = await Rutina.findByIdAndUpdate(
      id,
      { name, time, type, products },
      { new: true }
    );

    if (!updatedRutina) {
      return res.status(404).json({ error: 'Rutina no encontrada' });
    }

    res.json(updatedRutina);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};