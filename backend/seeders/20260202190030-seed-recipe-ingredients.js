'use strict';

module.exports = {
  async up(queryInterface) {
    const now = new Date();

    const ingId = {
      'Špageti': 1,
      'Jaja': 2,
      'Sir': 3,
      'Maslac': 4,
      'Losos': 5,
      'Zelena salata': 6,
      'Pančeta': 7,
      'Crni biber': 8,
      'Prepečeni hleb': 9,
      'Limun': 10,
      'Beli luk': 11,
      'Majčina dušica': 12,
      'Mleveno meso': 13,
      'Kukuruzne tortilje': 14,
      'Paradajz': 15,
      'Brašno': 16,
      'Kakao': 17,
      'Šećer': 18,
      'Pirinčani rezanci': 19,
      'Škampi': 20,
      'Kikiriki': 21,
      'Limeta': 22,
      'Soja sos': 23,
    };

    await queryInterface.bulkDelete('recipe_ingredients', { recipeId: [1, 2, 3, 4, 5, 6] });

    await queryInterface.bulkInsert('recipe_ingredients', [
      // Recipe 1: Karbonara špageti
      { recipeId: 1, ingredientTypeId: ingId['Špageti'], quantity: 400, unit: 'g', createdAt: now, updatedAt: now },
      { recipeId: 1, ingredientTypeId: ingId['Jaja'], quantity: 3, unit: 'komadi', createdAt: now, updatedAt: now },
      { recipeId: 1, ingredientTypeId: ingId['Sir'], quantity: 100, unit: 'g', createdAt: now, updatedAt: now },
      { recipeId: 1, ingredientTypeId: ingId['Pančeta'], quantity: 200, unit: 'g', createdAt: now, updatedAt: now },
      { recipeId: 1, ingredientTypeId: ingId['Crni biber'], quantity: 5, unit: 'g', createdAt: now, updatedAt: now },

      // Recipe 2: Cezar salata
      { recipeId: 2, ingredientTypeId: ingId['Zelena salata'], quantity: 300, unit: 'g', createdAt: now, updatedAt: now },
      { recipeId: 2, ingredientTypeId: ingId['Sir'], quantity: 50, unit: 'g', createdAt: now, updatedAt: now },
      { recipeId: 2, ingredientTypeId: ingId['Prepečeni hleb'], quantity: 100, unit: 'g', createdAt: now, updatedAt: now },

      // Recipe 3: Grilovani losos
      { recipeId: 3, ingredientTypeId: ingId['Losos'], quantity: 500, unit: 'g', createdAt: now, updatedAt: now },
      { recipeId: 3, ingredientTypeId: ingId['Limun'], quantity: 2, unit: 'komadi', createdAt: now, updatedAt: now },
      { recipeId: 3, ingredientTypeId: ingId['Maslac'], quantity: 50, unit: 'g', createdAt: now, updatedAt: now },
      { recipeId: 3, ingredientTypeId: ingId['Beli luk'], quantity: 3, unit: 'češanj', createdAt: now, updatedAt: now },
      { recipeId: 3, ingredientTypeId: ingId['Majčina dušica'], quantity: 10, unit: 'g', createdAt: now, updatedAt: now },

      // Recipe 4: Tortilje sa govedinom
      { recipeId: 4, ingredientTypeId: ingId['Mleveno meso'], quantity: 400, unit: 'g', createdAt: now, updatedAt: now },
      { recipeId: 4, ingredientTypeId: ingId['Kukuruzne tortilje'], quantity: 10, unit: 'komadi', createdAt: now, updatedAt: now },
      { recipeId: 4, ingredientTypeId: ingId['Zelena salata'], quantity: 150, unit: 'g', createdAt: now, updatedAt: now },
      { recipeId: 4, ingredientTypeId: ingId['Paradajz'], quantity: 200, unit: 'g', createdAt: now, updatedAt: now },
      { recipeId: 4, ingredientTypeId: ingId['Sir'], quantity: 100, unit: 'g', createdAt: now, updatedAt: now },

      // Recipe 5: Čokoladni kolač
      { recipeId: 5, ingredientTypeId: ingId['Brašno'], quantity: 250, unit: 'g', createdAt: now, updatedAt: now },
      { recipeId: 5, ingredientTypeId: ingId['Kakao'], quantity: 50, unit: 'g', createdAt: now, updatedAt: now },
      { recipeId: 5, ingredientTypeId: ingId['Jaja'], quantity: 4, unit: 'komadi', createdAt: now, updatedAt: now },
      { recipeId: 5, ingredientTypeId: ingId['Šećer'], quantity: 200, unit: 'g', createdAt: now, updatedAt: now },
      { recipeId: 5, ingredientTypeId: ingId['Maslac'], quantity: 150, unit: 'g', createdAt: now, updatedAt: now },

      // Recipe 6: Pad Thai
      { recipeId: 6, ingredientTypeId: ingId['Pirinčani rezanci'], quantity: 300, unit: 'g', createdAt: now, updatedAt: now },
      { recipeId: 6, ingredientTypeId: ingId['Škampi'], quantity: 300, unit: 'g', createdAt: now, updatedAt: now },
      { recipeId: 6, ingredientTypeId: ingId['Kikiriki'], quantity: 100, unit: 'g', createdAt: now, updatedAt: now },
      { recipeId: 6, ingredientTypeId: ingId['Limeta'], quantity: 2, unit: 'pieces', createdAt: now, updatedAt: now },
      { recipeId: 6, ingredientTypeId: ingId['Soja sos'], quantity: 50, unit: 'ml', createdAt: now, updatedAt: now },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('recipe_ingredients', null, {});
  },
};
