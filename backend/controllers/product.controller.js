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

exports.create = async (req, res) => {
  try {
    const { name, ingredientType, packageAmount, price, image } = req.body;
    
    console.log('Product create endpoint hit. Payload:', { name, ingredientType, packageAmount, price, image });
    console.log('User from middleware:', req.user);

    if (!name || !ingredientType || price == null) {
      return res.status(400).json({ message: 'name, ingredientType and price are required.' });
    }

    // pronadji ili kreiraj tip sastojka
    const [ingType] = await db.IngredientType.findOrCreate({ where: { name: ingredientType } });
    console.log('Found or created ingredient type:', ingType.name);

    const created = await db.Product.create({
      name,
      ingredientTypeId: ingType.id,
      packageAmount: packageAmount || null,
      price: Number(price),
      imageUrl: image || null,
    });

    console.log('Product created in DB:', created.id);

    const product = await db.Product.findByPk(created.id, {
      include: [{ model: db.IngredientType, attributes: ['id', 'name'] }],
    });

    console.log('Product returned:', product);
    return res.status(201).json(product);
  } catch (err) {
    console.error('Error in product create:', err);
    return res.status(500).json({ message: 'Greška pri kreiranju proizvoda.' });
  }
};

exports.remove = async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (!id) return res.status(400).json({ message: 'Nevažeći id.' });

    const deleted = await db.Product.destroy({ where: { id } });
    if (!deleted) return res.status(404).json({ message: 'Proizvod nije pronađen.' });

    return res.json({ id });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Greška pri brisanju proizvoda.' });
  }
};