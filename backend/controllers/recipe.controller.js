const db = require('../models');
 
exports.getAll = async (req, res) => {

  try {

    const recipes = await db.Recipe.findAll({

      include: [

        {

          model: db.RecipeIngredient,

          include: [

            {

              model: db.IngredientType,

              attributes: ['id', 'name'],

            },

          ],

        },

      ],

      order: [['createdAt', 'DESC']],

    });

    res.json(recipes);

  } catch (err) {

    console.error(err);

    res.status(500).json({ message: 'Greška pri čitanju recepata.' });

  }

};
 
exports.getById = async (req, res) => {

  try {

    const id = Number(req.params.id);
 
    const recipe = await db.Recipe.findByPk(id, {

      include: [

        {

          model: db.RecipeIngredient,

          include: [

            {

              model: db.IngredientType,

              attributes: ['id', 'name'],

            },

          ],

        },

      ],

    });
 
    if (!recipe) {

      return res.status(404).json({ message: 'Recept nije pronađen.' });

    }
 
    res.json(recipe);

  } catch (err) {

    console.error(err);

    res.status(500).json({ message: 'Greška pri čitanju recepta.' });

  }

};

exports.getFavorites = async (req, res) => {
  try {
    const userId = req.user.id;

    const favorites = await db.FavoriteRecipe.findAll({
      where: { userId },
      attributes: ['recipeId'],
      order: [['createdAt', 'DESC']],
    });

    res.json(favorites.map((f) => f.recipeId));
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Greška pri čitanju omiljenih recepata.' });
  }
};

exports.addFavorite = async (req, res) => {
  try {
    const userId = req.user.id;
    const recipeId = Number(req.body.recipeId);

    if (!recipeId) {
      return res.status(400).json({ message: 'recipeId je obavezan.' });
    }

    const existing = await db.FavoriteRecipe.findOne({ where: { userId, recipeId } });
    if (!existing) {
      await db.FavoriteRecipe.create({ userId, recipeId });
    }

    return res.status(201).json({ recipeId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Greška pri dodavanju u omiljene.' });
  }
};

exports.removeFavorite = async (req, res) => {
  try {
    const userId = req.user.id;
    const recipeId = Number(req.params.recipeId);

    if (!recipeId) {
      return res.status(400).json({ message: 'recipeId je obavezan.' });
    }

    await db.FavoriteRecipe.destroy({ where: { userId, recipeId } });

    return res.json({ recipeId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Greška pri uklanjanju iz omiljenih.' });
  }
};

 