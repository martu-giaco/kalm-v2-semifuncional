import Marca from "../models/Marca.js";

export const createMarca = async (req, res) => {
  try {
    const { name, pfp, prods } = req.body;

    const marca = await Marca.create({
      name, pfp, prods,
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
    const { name, pfp, prods  } = req.body;

    const updatedMarca = await Marca.findByIdAndUpdate(
      id,
      { name, pfp, prods  },
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