'use strict';

module.exports = {
  async up(queryInterface) {
    const now = new Date();

    // Mapiranje ingredient name -> id (mora da prati seed-ingredient-types.js)
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

    await queryInterface.bulkInsert('products', [
      { id: 1, name: 'Barilla Špageti 500g', ingredientTypeId: ingId['Špageti'], packageAmount: '500g', price: 250.00, imageUrl: '📦', createdAt: now, updatedAt: now },
      { id: 2, name: 'De Cecco Špageti 400g', ingredientTypeId: ingId['Špageti'], packageAmount: '400g', price: 280.00, imageUrl: '📦', createdAt: now, updatedAt: now },

      { id: 3, name: 'Domaća jaja kutija 10 komada', ingredientTypeId: ingId['Jaja'], packageAmount: '10 komada', price: 200.00, imageUrl: '🥚', createdAt: now, updatedAt: now },
      { id: 4, name: 'Domaća jaja kutija 6 komada', ingredientTypeId: ingId['Jaja'], packageAmount: '6 komada', price: 120.00, imageUrl: '🥚', createdAt: now, updatedAt: now },

      { id: 5, name: 'Kajmak sir 250g', ingredientTypeId: ingId['Sir'], packageAmount: '250g', price: 450.00, imageUrl: '🧀', createdAt: now, updatedAt: now },
      { id: 6, name: 'Madam sir 400g', ingredientTypeId: ingId['Sir'], packageAmount: '400g', price: 520.00, imageUrl: '🧀', createdAt: now, updatedAt: now },

      { id: 7, name: 'Lurija maslac 250g', ingredientTypeId: ingId['Maslac'], packageAmount: '250g', price: 350.00, imageUrl: '🧈', createdAt: now, updatedAt: now },
      { id: 8, name: 'Gavrilović maslac 250g', ingredientTypeId: ingId['Maslac'], packageAmount: '250g', price: 380.00, imageUrl: '🧈', createdAt: now, updatedAt: now },

      { id: 9, name: 'Losos file 500g', ingredientTypeId: ingId['Losos'], packageAmount: '500g', price: 2400.00, imageUrl: '🐟', createdAt: now, updatedAt: now },
      { id: 10, name: 'Losos file 300g', ingredientTypeId: ingId['Losos'], packageAmount: '300g', price: 1600.00, imageUrl: '🐟', createdAt: now, updatedAt: now },

      { id: 11, name: 'Ledenka salata 300g', ingredientTypeId: ingId['Zelena salata'], packageAmount: '300g', price: 70.00, imageUrl: '🥬', createdAt: now, updatedAt: now },
      { id: 12, name: 'Maslna salata 300g', ingredientTypeId: ingId['Zelena salata'], packageAmount: '300g', price: 80.00, imageUrl: '🥬', createdAt: now, updatedAt: now },

      { id: 13, name: 'Pančeta rezana 200g', ingredientTypeId: ingId['Pančeta'], packageAmount: '200g', price: 450.00, imageUrl: '🥓', createdAt: now, updatedAt: now },
      { id: 14, name: 'Pančeta kockice 250g', ingredientTypeId: ingId['Pančeta'], packageAmount: '250g', price: 500.00, imageUrl: '🥓', createdAt: now, updatedAt: now },

      { id: 15, name: 'Paprika crni biber 100g', ingredientTypeId: ingId['Crni biber'], packageAmount: '100g', price: 150.00, imageUrl: '🌶️', createdAt: now, updatedAt: now },
      { id: 16, name: 'Biber mleven 50g', ingredientTypeId: ingId['Crni biber'], packageAmount: '50g', price: 100.00, imageUrl: '🌶️', createdAt: now, updatedAt: now },

      { id: 17, name: 'Prepečeni hleb mešoviti 250g', ingredientTypeId: ingId['Prepečeni hleb'], packageAmount: '250g', price: 120.00, imageUrl: '🍞', createdAt: now, updatedAt: now },
      { id: 18, name: 'Prepečeni hleb crni 200g', ingredientTypeId: ingId['Prepečeni hleb'], packageAmount: '200g', price: 100.00, imageUrl: '🍞', createdAt: now, updatedAt: now },

      { id: 19, name: 'Limun komadi 1kg', ingredientTypeId: ingId['Limun'], packageAmount: '1kg', price: 150.00, imageUrl: '🍋', createdAt: now, updatedAt: now },
      { id: 20, name: 'Limun komadi 500g', ingredientTypeId: ingId['Limun'], packageAmount: '500g', price: 80.00, imageUrl: '🍋', createdAt: now, updatedAt: now },

      { id: 21, name: 'Beli luk 500g', ingredientTypeId: ingId['Beli luk'], packageAmount: '500g', price: 100.00, imageUrl: '🧄', createdAt: now, updatedAt: now },
      { id: 22, name: 'Beli luk 1kg', ingredientTypeId: ingId['Beli luk'], packageAmount: '1kg', price: 180.00, imageUrl: '🧄', createdAt: now, updatedAt: now },

      { id: 23, name: 'Majčina dušica suvena 30g', ingredientTypeId: ingId['Majčina dušica'], packageAmount: '30g', price: 200.00, imageUrl: '🌿', createdAt: now, updatedAt: now },
      { id: 24, name: 'Majčina dušica suvena 50g', ingredientTypeId: ingId['Majčina dušica'], packageAmount: '50g', price: 300.00, imageUrl: '🌿', createdAt: now, updatedAt: now },

      { id: 25, name: 'Mleveno meso od goveđine 500g', ingredientTypeId: ingId['Mleveno meso'], packageAmount: '500g', price: 900.00, imageUrl: '🥩', createdAt: now, updatedAt: now },
      { id: 26, name: 'Mleveno meso mešovito 500g', ingredientTypeId: ingId['Mleveno meso'], packageAmount: '500g', price: 850.00, imageUrl: '🥩', createdAt: now, updatedAt: now },

      { id: 27, name: 'Kukuruzne tortilje pakovanje 10 komada', ingredientTypeId: ingId['Kukuruzne tortilje'], packageAmount: '10 komada', price: 200.00, imageUrl: '🌽', createdAt: now, updatedAt: now },
      { id: 28, name: 'Kukuruzne tortilje pakovanje 20 komada', ingredientTypeId: ingId['Kukuruzne tortilje'], packageAmount: '20 komada', price: 380.00, imageUrl: '🌽', createdAt: now, updatedAt: now },

      { id: 29, name: 'Paradajz svež 1kg', ingredientTypeId: ingId['Paradajz'], packageAmount: '1kg', price: 150.00, imageUrl: '🍅', createdAt: now, updatedAt: now },
      { id: 30, name: 'Paradajz čerupja 500g', ingredientTypeId: ingId['Paradajz'], packageAmount: '500g', price: 200.00, imageUrl: '🍅', createdAt: now, updatedAt: now },

      { id: 31, name: 'Brašno tip 500 1kg', ingredientTypeId: ingId['Brašno'], packageAmount: '1kg', price: 120.00, imageUrl: '🌾', createdAt: now, updatedAt: now },
      { id: 32, name: 'Brašno tip 400 1kg', ingredientTypeId: ingId['Brašno'], packageAmount: '1kg', price: 130.00, imageUrl: '🌾', createdAt: now, updatedAt: now },

      { id: 33, name: 'Nesquik kakao 250g', ingredientTypeId: ingId['Kakao'], packageAmount: '250g', price: 350.00, imageUrl: '🍫', createdAt: now, updatedAt: now },
      { id: 34, name: 'Kakao prah 100g', ingredientTypeId: ingId['Kakao'], packageAmount: '100g', price: 200.00, imageUrl: '🍫', createdAt: now, updatedAt: now },

      { id: 35, name: 'Šećer 1kg', ingredientTypeId: ingId['Šećer'], packageAmount: '1kg', price: 120.00, imageUrl: '🍬', createdAt: now, updatedAt: now },
      { id: 36, name: 'Šećer 2kg', ingredientTypeId: ingId['Šećer'], packageAmount: '2kg', price: 220.00, imageUrl: '🍬', createdAt: now, updatedAt: now },

      { id: 37, name: 'Ramen rezanci 400g', ingredientTypeId: ingId['Pirinčani rezanci'], packageAmount: '400g', price: 150.00, imageUrl: '🍜', createdAt: now, updatedAt: now },
      { id: 38, name: 'Pirinčani rezanci 500g', ingredientTypeId: ingId['Pirinčani rezanci'], packageAmount: '500g', price: 180.00, imageUrl: '🍜', createdAt: now, updatedAt: now },

      { id: 39, name: 'Škampi zamrznut 500g', ingredientTypeId: ingId['Škampi'], packageAmount: '500g', price: 1200.00, imageUrl: '🦐', createdAt: now, updatedAt: now },
      { id: 40, name: 'Škampi zamrznut 300g', ingredientTypeId: ingId['Škampi'], packageAmount: '300g', price: 800.00, imageUrl: '🦐', createdAt: now, updatedAt: now },

      { id: 41, name: 'Kikiriki smeđi 250g', ingredientTypeId: ingId['Kikiriki'], packageAmount: '250g', price: 200.00, imageUrl: '🥜', createdAt: now, updatedAt: now },
      { id: 42, name: 'Kikiriki belo 300g', ingredientTypeId: ingId['Kikiriki'], packageAmount: '300g', price: 250.00, imageUrl: '🥜', createdAt: now, updatedAt: now },

      { id: 43, name: 'Limeta komadi 500g', ingredientTypeId: ingId['Limeta'], packageAmount: '500g', price: 120.00, imageUrl: '🍈', createdAt: now, updatedAt: now },
      { id: 44, name: 'Limeta komadi 1kg', ingredientTypeId: ingId['Limeta'], packageAmount: '1kg', price: 220.00, imageUrl: '🍈', createdAt: now, updatedAt: now },

      { id: 45, name: 'Kikkoman soja sos 250ml', ingredientTypeId: ingId['Soja sos'], packageAmount: '250ml', price: 250.00, imageUrl: '🫙', createdAt: now, updatedAt: now },
      { id: 46, name: 'San-J tamari soja sos 200ml', ingredientTypeId: ingId['Soja sos'], packageAmount: '200ml', price: 280.00, imageUrl: '🫙', createdAt: now, updatedAt: now },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('products', null, {});
  },
};
