'use strict';

module.exports = {
  async up(queryInterface) {
    const now = new Date();

    await queryInterface.bulkInsert('recipes', [
      {
        id: 1,
        name: 'Karbonara špageti',
        description: 'Klasičan italijanski recept sa jajima, sirom i pančetom',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYE0baxn14n7lJI2qzFWL3jNSmTBRXUt0yZg&s',
        difficulty: 'Srednja',
        prepTimeMinutes: 20,
        createdAt: now, updatedAt: now,
      },
      {
        id: 2,
        name: 'Cezar salata',
        description: 'Sveža zelena salata sa domaćim Cezar prelivom',
        imageUrl: 'https://www.cuisinart.ca/dw/image/v2/ABAF_PRD/on/demandware.static/-/Sites-ca-cuisinart-sfra-Library/default/dw617e433c/images/recipe-Images/caesar-salad-recipe.jpg?sw=1200&sh=1200&sm=fit',
        difficulty: 'Lako',
        prepTimeMinutes: 10,
        createdAt: now, updatedAt: now,
      },
      {
        id: 3,
        name: 'Grilovani losos',
        description: 'Savršeno grilovani losos sa sosom od limuna i maslaca',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJy7e7FNp7D3XHt8SSWKZyej_gLn9u60YFFQ&s',
        difficulty: 'Srednja',
        prepTimeMinutes: 25,
        createdAt: now, updatedAt: now,
      },
      {
        id: 4,
        name: 'Tortilje sa govedinom',
        description: 'Zacinjene tortilje punjene mlevenim mesom i svežim povrćem',
        imageUrl: '🌮',
        difficulty: 'Lako',
        prepTimeMinutes: 15,
        createdAt: now, updatedAt: now,
      },
      {
        id: 5,
        name: 'Čokoladni kolač',
        description: 'Čokoladni kolač sa više slojeva i bogatim filom',
        imageUrl: '🍰',
        difficulty: 'Teško',
        prepTimeMinutes: 40,
        createdAt: now, updatedAt: now,
      },
      {
        id: 6,
        name: 'Pad Thai',
        description: 'Popularno tajlandsko jelo od prženih pirinčanih rezanaca i škampa,',
        imageUrl: '🍤',
        difficulty: 'Srednja',
        prepTimeMinutes: 20,
        createdAt: now, updatedAt: now,
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('recipes', null, {});
  },
};
