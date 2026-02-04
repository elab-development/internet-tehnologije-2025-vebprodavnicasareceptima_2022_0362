const db = require("../models");

exports.getMine = async (req, res) => {
  try {
    const userId = req.user.id;

    const rows = await db.UserProduct.findAll({
      where: { userId },
      include: [
        {
          model: db.Product,
          include: [{ model: db.IngredientType, attributes: ["id", "name"] }],
        },
      ],
      order: [[db.Product, "name", "ASC"]],
    });

    
    const result = rows.map((r) => ({
      productId: r.productId,
      quantity: r.quantity,
      product: r.Product,
    }));

    return res.json(result);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Greška pri čitanju mojih proizvoda." });
  }
};

exports.addMine = async (req, res) => {
  try {
    const userId = req.user.id;
    const { productId, quantity } = req.body;

    if (!productId) {
      return res.status(400).json({ message: "productId je obavezan." });
    }

    // provera da proizvod postoji
    const product = await db.Product.findByPk(productId);
    if (!product) {
      return res.status(404).json({ message: "Proizvod ne postoji." });
    }

    const qty = Number(quantity || 1);
    if (!Number.isInteger(qty) || qty < 1) {
      return res.status(400).json({ message: "quantity mora biti ceo broj >= 1." });
    }

    //ako već postoji
    const existing = await db.UserProduct.findOne({ where: { userId, productId } });

    if (existing) {
      existing.quantity = existing.quantity + qty;
      await existing.save();
      return res.status(200).json({ message: "Količina ažurirana.", item: existing });
    }

    const created = await db.UserProduct.create({ userId, productId, quantity: qty });
    return res.status(201).json({ message: "Dodato u moje proizvode.", item: created });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Greška pri dodavanju proizvoda." });
  }
};

exports.removeMine = async (req, res) => {
  try {
    const userId = req.user.id;
    const productId = Number(req.params.productId);

    const deleted = await db.UserProduct.destroy({ where: { userId, productId } });
    if (!deleted) {
      return res.status(404).json({ message: "Stavka nije pronađena." });
    }

    return res.json({ message: "Obrisano." });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Greška pri brisanju proizvoda." });
  }
};
