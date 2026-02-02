const db = require('../models');
 
exports.getAll = async (req, res) => {

  try {

    const recipes = await db.Recipe.findAll({

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

 