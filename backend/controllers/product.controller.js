const db = require('../models');
 
exports.getAll = async (req, res) => {
  try {
    const products = await db.Product.findAll({
      include: [
        {
          model: db.IngredientType,
          attributes: ['id', 'name'],
        },
      ],
      order: [['name', 'ASC']],
    });
 
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Greška pri čitanju proizvoda.' });
  }
};