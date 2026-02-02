const db = require('../models');
 
exports.getAll = async (req, res) => {
  try {
    const items = await db.IngredientType.findAll({
      order: [['name', 'ASC']],
    });
    res.json(items);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Greška pri čitanju tipova sastojaka.' });
  }
};