'use strict';

module.exports = {
  async up(queryInterface) {
    const now = new Date();

    await queryInterface.bulkInsert('ingredient_types', [
      { id: 1, name: 'Špageti', createdAt: now, updatedAt: now },
      { id: 2, name: 'Jaja', createdAt: now, updatedAt: now },
      { id: 3, name: 'Sir', createdAt: now, updatedAt: now },
      { id: 4, name: 'Maslac', createdAt: now, updatedAt: now },
      { id: 5, name: 'Losos', createdAt: now, updatedAt: now },
      { id: 6, name: 'Zelena salata', createdAt: now, updatedAt: now },
      { id: 7, name: 'Pančeta', createdAt: now, updatedAt: now },
      { id: 8, name: 'Crni biber', createdAt: now, updatedAt: now },
      { id: 9, name: 'Prepečeni hleb', createdAt: now, updatedAt: now },
      { id: 10, name: 'Limun', createdAt: now, updatedAt: now },
      { id: 11, name: 'Beli luk', createdAt: now, updatedAt: now },
      { id: 12, name: 'Majčina dušica', createdAt: now, updatedAt: now },
      { id: 13, name: 'Mleveno meso', createdAt: now, updatedAt: now },
      { id: 14, name: 'Kukuruzne tortilje', createdAt: now, updatedAt: now },
      { id: 15, name: 'Paradajz', createdAt: now, updatedAt: now },
      { id: 16, name: 'Brašno', createdAt: now, updatedAt: now },
      { id: 17, name: 'Kakao', createdAt: now, updatedAt: now },
      { id: 18, name: 'Šećer', createdAt: now, updatedAt: now },
      { id: 19, name: 'Pirinčani rezanci', createdAt: now, updatedAt: now },
      { id: 20, name: 'Škampi', createdAt: now, updatedAt: now },
      { id: 21, name: 'Kikiriki', createdAt: now, updatedAt: now },
      { id: 22, name: 'Limeta', createdAt: now, updatedAt: now },
      { id: 23, name: 'Soja sos', createdAt: now, updatedAt: now },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('ingredient_types', null, {});
  },
};
